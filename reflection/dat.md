# Đánh giá cá nhân - Dương Hữu Đạt

- **Vai trò trong nhóm**: Code tích hợp model sinh báo cáo (Làm file `evaluate_cp3.py`).
- **Trải nghiệm và Bài học**: Qua phần thực hành này, mình đã có cơ hội trực tiếp code và gọi API của LLM, cũng như xử lý luồng dữ liệu JSON đầu vào/đầu ra. Việc kết nối mã nguồn Python với API, chạy đánh giá tự động dựa trên golden set giúp mình hiểu rõ vòng đời phát triển của một tính năng AI nhỏ (AI feature lifecycle).
- **Khó khăn gặp phải**: Khó khăn lớn nhất trong quá trình dev là xử lý các lỗi parse JSON. Đôi lúc LLM trả về format không chuẩn (dư dấu phẩy, bọc code block markdown), khiến script bị crash. Mình đã phải nghiên cứu cách handle lỗi linh hoạt và ép LLM trả về đúng schema bằng JSON mode.
