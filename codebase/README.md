# Sunset — Mock tương tác CP2

Mở `index.html` bằng Chrome hoặc Edge để dùng ngay, không cần cài thư viện hay API key. HTML/CSS/JavaScript thuần. Font trực tuyến là tùy chọn; khi không có mạng, trình duyệt dùng font hệ thống.

## Luồng demo (khoảng 1 phút)

1. Bấm **Tạo lại bản tin** để thấy trạng thái tổng hợp giả lập.
2. Mặc định có 3 câu hỏi chờ trên 4 giờ. Chọn **Tất cả** để thấy thêm câu mới chờ 2 giờ.
3. Bấm **Xem chi tiết** → **Xem hội thoại gốc (mock)** để đọc nguồn minh họa.
4. Bấm **Đánh dấu đã xử lý**. Số liệu và danh sách cập nhật ngay.
5. Mở **Đã xử lý**, xem chi tiết và bấm **Đưa về đang chờ** nếu đánh dấu nhầm.
6. Chọn **Cần kiểm tra** để xem trường hợp có thể đã được trả lời ở kênh khác.
7. Có thể tìm kiếm theo nội dung/kênh và bấm **Đặt lại demo** để bắt đầu lại.

## Phạm vi

- Dữ liệu hoàn toàn tự viết, không phải tin nhắn hay danh tính thật.
- Chưa kết nối Discord, chưa gọi AI, không gửi tin và không có đường dẫn Discord thật.
- Nút xem nguồn mở hội thoại giả lập trong hộp chi tiết. Bản tích hợp sau này cần tạo link từ ID Discord thật, không để model tự sinh link.
- Trạng thái chỉ ở bộ nhớ của trang; tải lại trang sẽ đặt lại.
- Thời điểm cố định của demo: 20:00 ngày 17/09/2026; không tính theo đồng hồ thực tế.
- Bản này phục vụ luồng bấm CP2. CP3 vẫn cần lời gọi AI thật ở quyết định trung tâm và kết quả đo.

## Các file

- `index.html`: bố cục giao diện và hộp chi tiết.
- `styles.css`: giao diện desktop/mobile.
- `app.js`: dữ liệu mẫu, bộ lọc, tìm kiếm và chuyển trạng thái.
