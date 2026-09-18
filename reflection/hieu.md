# Đánh giá cá nhân - Cao Đức Hiếu

- **Vai trò trong nhóm**: Thiết kế prompt phân loại & tóm tắt.
- **Trải nghiệm và Bài học**: Việc viết prompt để AI phân biệt được câu hỏi kỹ thuật thực sự và câu tán gẫu khó hơn mình nghĩ. Ban đầu bot bắt nhầm rất nhiều. Qua bài lab này, mình đã áp dụng thành công kỹ thuật Few-shot prompting, nhận ra rằng việc cung cấp các ví dụ cụ thể cho mô hình (cả đúng lẫn sai) giúp nó hiểu rõ ý định và các lớp lỗi (edge cases) tốt hơn rất nhiều so với chỉ mô tả bằng lời.
- **Khó khăn gặp phải**: Tối ưu prompt để vừa đạt độ chính xác cao vừa không bị tốn quá nhiều token API. Đôi khi mình phải đau đầu lựa chọn giữa việc tóm tắt thật chi tiết đoạn code hay là cắt ngắn để bản tin cuối ngày trông gọn gàng, tránh việc bị quá tải thông tin (information overload) cho TAs.
