# Reflection Cá Nhân — Dương Hữu Đạt

- **Họ và tên:** Dương Hữu Đạt
- **Mã học viên:** 2A202602544
- **Nhóm:** K4-3B · Zone B2 · Track B (Trợ lý Học viên)
- **Đề tài:** AI TA Dashboard — Trợ lý tổng hợp và cảnh báo câu hỏi tồn đọng cuối ngày cho Teaching Assistant

---

## 1. Vai Trò & Phần Việc Đảm Nhiệm
Trong nhóm, tôi đảm nhận vai trò **Lập trình Tích hợp (Fullstack & AI Integration)**:
- **Phát triển script đánh giá CP3 (`evaluate_cp3.py`):** Viết mã nguồn Python kết nối OpenAI API (`gpt-4o-mini`), đọc dữ liệu từ `eval/golden_set.json`, tính toán ma trận nhầm lẫn và xuất kết quả đo tự động ra file `eval/run_1_results.txt`.
- **Xây dựng Interactive Dashboard (`codebase/`):** Lập trình giao diện web tương tác (HTML, CSS, JavaScript) mô phỏng ứng dụng quản trị của TA, bao gồm:
  - Bộ đếm thời gian thực các câu hỏi tồn đọng (>4h, >19h).
  - Nút bấm mô phỏng tiến trình AI tổng hợp báo cáo.
  - Tính năng lọc theo độ trễ và cập nhật trạng thái "✓ Đã xử lý" theo góp ý từ vòng validation.

---

## 2. AI Đã Hỗ Trợ Tôi Như Thế Nào?
- AI đóng vai trò như một người bạn lập trình cặp (pair programmer) cực kỳ hiệu quả, giúp tôi sinh nhanh cấu trúc khung giao diện Discord clone và viết các hàm xử lý trạng thái trong `app.js`.
- AI giúp tôi bắt và xử lý triệt để các ngoại lệ kỹ thuật (như `json.loads` lỗi khi API trả về markdown block, cơ chế retry khi timeout) trong file `evaluate_cp3.py`, đảm bảo chương trình chạy trơn tru 20/20 test cases mà không bị dừng đột ngột giữa chừng.

---

## 3. Một Bài Học Từ Case Thất Bại (Fail) Của Chính Nhóm
- **Case fail thực tế:** Ban đầu khi gọi API trả về JSON, tôi không chỉ định rõ ràng `response_format={ "type": "json_object" }` và không thiết lập `temperature=0.0`. Hậu quả là có lượt chạy mô hình tự động bọc mã JSON vào khối markdown ` ```json ... ``` `, khiến hàm `json.loads()` bị crash với lỗi `JSONDecodeError`.
- **Bài học rút ra:** Khi tích hợp LLM vào hệ thống phần mềm thực tế, tính bất định (non-deterministic) của AI là rủi ro lớn nhất. Luôn phải khóa nhiệt độ (temperature = 0), ép kiểu định dạng JSON có cấu trúc nghiêm ngặt từ API, và luôn có khối `try...except` để đảm bảo hệ thống không bị sập nguồn khi model phản hồi bất thường.

---

## 4. Cam Kết Tuân Thủ "Vibe-Coding Rule"
Tôi tự tay viết và kiểm thử từng dòng code trong `evaluate_cp3.py` cũng như logic DOM trong `codebase/app.js`. Tôi tự tin trình diễn và trả lời bất kỳ câu hỏi kỹ thuật nào của Ban giám khảo về luồng hoạt động của sản phẩm.
