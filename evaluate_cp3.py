import os
import json
import time
from dotenv import load_dotenv
from openai import OpenAI

# 1. Load API Key từ file .env
load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    print("❌ Lỗi: Không tìm thấy OPENAI_API_KEY trong file .env!")
    exit(1)

# Khởi tạo OpenAI client
client = OpenAI(api_key=api_key)

def classify_message(content):
    """
    Gọi OpenAI API để phân loại tin nhắn.
    """
    prompt = f"""Bạn là một trợ lý AI phân tích tin nhắn Discord của lớp học.
Nhiệm vụ của bạn là xác định xem tin nhắn có cần Teaching Assistant (TA) hoặc Ban tổ chức hỗ trợ giải quyết hay không.

Quy tắc:
- is_question: true -> Nếu là câu hỏi bài tập, lỗi kỹ thuật, hỏi thủ tục, xin hỗ trợ từ BTC/TA.
- is_question: false -> Nếu là chào hỏi, tán gẫu, cảm ơn, thông báo của BTC, hẹn trao đổi nội bộ, tìm nhóm, báo cáo tiến độ cá nhân.

Ví dụ tham khảo:
- "Mọi người cho em hỏi làm sao để setup cái Github Copilot ạ" -> CẦN hỗ trợ (is_question: true)
- "Câu hỏi này để hôm ws chủ nhật trao đổi luon nhé" -> KHÔNG cần hỗ trợ (is_question: false)
- "Có ai lập team làm hackathon chưa cho mình join với" -> KHÔNG cần hỗ trợ (is_question: false)

Tin nhắn: "{content}"

Hãy trả về CHỈ MỘT chuỗi JSON hợp lệ theo định dạng sau:
{{
  "is_question": true hoặc false,
  "summary": "Tóm tắt ngắn gọn vấn đề nếu is_question là true, ngược lại để chuỗi rỗng"
}}"""

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a precise data extraction assistant that outputs JSON."},
                {"role": "user", "content": prompt}
            ],
            response_format={ "type": "json_object" },
            temperature=0.0
        )
        result_text = response.choices[0].message.content
        return json.loads(result_text)
    except Exception as e:
        print(f"Lỗi gọi API: {e}")
        return {"is_question": False, "summary": "Error"}

def main():
    # 2. Đọc file dữ liệu Golden Set
    print("Đang nạp dữ liệu Golden Set...")
    try:
        with open('eval/golden_set.json', 'r', encoding='utf-8') as f:
            golden_set = json.load(f)
    except FileNotFoundError:
        print("❌ Lỗi: Không tìm thấy file golden_set.json!")
        return

    correct_count = 0
    total_count = len(golden_set)

    print("="*85)
    print("🚀 BẮT ĐẦU CHẠY ĐÁNH GIÁ (CP3) VỚI OPENAI GPT-4O-MINI")
    print("="*85)
    print(f"{'ID':<4} | {'Expected':<10} | {'AI Predict':<10} | {'Result':<6} | {'Summary'}")
    print("-" * 85)

    # 3. Lặp qua 20 cases để chấm điểm
    for item in golden_set:
        msg_id = item['id']
        content = item['content']
        expected = item['expected_is_question']
        
        # Gọi AI
        ai_response = classify_message(content)
        ai_predict = ai_response.get('is_question', False)
        summary = str(ai_response.get('summary', ''))

        # Cắt ngắn summary nếu quá dài để hiển thị cho đẹp
        display_summary = summary if len(summary) < 35 else summary[:32] + "..."

        # So sánh và chấm điểm
        is_correct = (expected == ai_predict)
        if is_correct:
            correct_count += 1
            res_str = "✅ Pass"
        else:
            res_str = "❌ Fail"

        print(f"{msg_id:<4} | {str(expected):<10} | {str(ai_predict):<10} | {res_str:<6} | {display_summary}")

        # Nghỉ 0.5s để tránh hit rate limit của các tài khoản tier thấp
        time.sleep(0.5)

    print("="*85)
    print("📊 KẾT QUẢ ĐÁNH GIÁ LƯỢT 1")
    print(f"- Tổng số ca test : {total_count}")
    print(f"- Số ca AI đúng  : {correct_count}")
    print(f"- Tỷ lệ chính xác : {correct_count / total_count * 100:.1f}%")
    print("="*85)
    print("Xong! Bạn hãy quay video lại màn hình này để nộp CP3 nhé.")

if __name__ == "__main__":
    main()
