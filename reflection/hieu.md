# Reflection Cá Nhân — Cao Đức Hiếu

- **Họ và tên:** Cao Đức Hiếu
- **Mã học viên:** 2A202602701
- **Nhóm:** K4-3B · Zone B2 · Track B (Trợ lý Học viên)
- **Đề tài:** AI TA Dashboard — Trợ lý tổng hợp và cảnh báo câu hỏi tồn đọng cuối ngày cho Teaching Assistant

---

## 1. Vai Trò & Phần Việc Đảm Nhiệm
Trong dự án, tôi phụ trách phần **Kỹ nghệ Câu lệnh (Prompt Engineering) & Phân loại Dữ liệu (Classification)**:
- **Thiết kế Prompt phân loại:** Viết prompt hệ thống cho mô hình `gpt-4o-mini`, yêu cầu trích xuất JSON có cấu trúc gồm nhãn nhị phân `is_question` (true/false) và câu tóm tắt 1 dòng (`summary`).
- **Xây dựng bộ Few-shot Examples:** Phân tích các lỗi sai ở vòng chạy thử ban đầu để bổ sung các ví dụ đối sánh (counter-examples), phân tách rạch ròi giữa tin hỏi kỹ thuật/thủ tục vs tin tán gẫu/nội bộ/tìm team.
- **Tối ưu định dạng JSON Output:** Cấu hình tham số `response_format={"type": "json_object"}` và `temperature=0.0` để đảm bảo mô hình không bị hallucination cấu trúc và không gây lỗi parse trong luồng xử lý tự động.

---

## 2. AI Đã Hỗ Trợ Tôi Như Thế Nào?
- AI hỗ trợ tôi sinh nhanh các biến thể tin nhắn học viên giả lập có ngôn ngữ tự nhiên phức tạp (chứa teencode, viết tắt, câu cụt lốc) để thử độ bền (stress-test) của prompt trước khi đưa vào bộ Golden Set.
- Khi gặp tình trạng mô hình bắt nhầm từ khóa, tôi đã thảo luận với AI để tinh chỉnh ranh giới phân loại theo hướng dẫn của Google PAIR G4 (hiển thị thông tin phù hợp ngữ cảnh), giúp prompt ngắn gọn mà vẫn đạt độ chính xác tối đa.

---

## 3. Một Bài Học Từ Case Thất Bại (Fail) Của Chính Nhóm
- **Case fail thực tế:** Ở lượt chạy thử đầu tiên của CP3, mô hình đạt 90% (18/20 câu), bị fail ở 2 câu:
  - ID 1: *"Câu hỏi này để hôm ws chủ nhật trao đổi luon nhé"* ➔ AI bắt nhầm là câu hỏi vì thấy có chữ "Câu hỏi".
  - ID 13: *"Có ai lập team làm hackathon chưa cho mình join với"* ➔ AI bắt nhầm vì thấy từ khóa tìm kiếm hỗ trợ.
- **Bài học rút ra:** LLM rất dễ bị "bẫy từ khóa bề mặt" (lexical overlap). Prompt thuần zero-shot với các quy tắc chung chung là không đủ tin cậy. Chỉ khi tôi đưa vào các ví dụ Few-shot cụ thể mô tả rõ những tình huống "tưởng là hỏi nhưng không cần TA can thiệp", độ chính xác mới nhảy vọt lên **100% (20/20 câu)**.

---

## 4. Cam Kết Tuân Thủ "Vibe-Coding Rule"
Tôi nắm rất rõ cấu trúc prompt trong `evaluate_cp3.py`, lý do vì sao chọn few-shot thay vì fine-tuning hay chain-of-thought phức tạp, và sẵn sàng giải thích cơ chế phân loại này khi Ban giám khảo chất vấn.
