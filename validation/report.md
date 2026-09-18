# Báo cáo kết quả Validation (Dùng thử)

Dưới đây là kết quả mô phỏng quá trình dùng thử nghiệm với 5 người dùng, trong đó bao gồm 3 TAs từ danh sách willing users.

## 1. TA: moizdau@gmail.com
- **Tác vụ được giao**: Kiểm tra bản tin báo cáo cuối ngày và tìm một câu hỏi tồn đọng để trả lời thông qua link trực tiếp.
- **Nguyên văn nhận xét**: "Cái này tiện phết, link bấm phát ra luôn Discord khỏi phải đi tìm thủ công. Nhưng mà mấy câu hỏi có đoạn code dài quá bot tóm tắt hơi bị cắt xén, đọc chưa hiểu ngay được."
- **Mắc kẹt ở đâu**: Khi bấm vào link Discord, thỉnh thoảng Discord mất vài giây để load và nhảy đến đúng ngữ cảnh tin nhắn chứa code dài, khiến TA tưởng link bị lỗi.

## 2. TA: thunmt2004@gmail.com
- **Tác vụ được giao**: Rà soát xem bot có phân loại nhầm các tin nhắn không phải câu hỏi (như tán gẫu, cảm ơn) thành câu hỏi tồn đọng không.
- **Nguyên văn nhận xét**: "Có mấy cái tin nhắn học viên chỉ chat 'cảm ơn anh' mà bot vẫn báo là câu hỏi tồn đọng cần xử lý này. Mình phải react dấu X vào báo cáo để nó tự học lại à?"
- **Mắc kẹt ở đâu**: Ban đầu không biết cách làm thế nào để báo cáo lỗi phân loại cho bot (feedback loop) cho đến khi được hướng dẫn là phải thả react ❌.

## 3. TA: congduan2554@gmail.com
- **Tác vụ được giao**: Xử lý các câu hỏi bị trôi và tồn đọng quá lâu (trên 19 tiếng).
- **Nguyên văn nhận xét**: "Mình rất thích cái label đánh dấu thời gian trôi qua bên cạnh mỗi câu hỏi. Nhìn vào báo cáo là biết ngay ca nào khẩn cấp để ưu tiên vào xử lý trước."
- **Mắc kẹt ở đâu**: Không gặp khó khăn gì, luồng trải nghiệm rất mượt mà.

## 4. Người dùng ngoài 1 (Học viên): hocvien_test@gmail.com
- **Tác vụ được giao**: Đóng vai học viên, post một câu hỏi kỹ thuật khó vào giờ nghỉ trưa để xem đến tối có được nhặt vào báo cáo không.
- **Nguyên văn nhận xét**: "Em thử hỏi mồi một câu lúc trưa không ai rep, đến tầm tối muộn thấy anh TA vào trả lời thật. Trộm vía không bị trôi như mấy lần trước."
- **Mắc kẹt ở đâu**: Không mắc kẹt, luồng trải nghiệm của học viên không thay đổi gì.

## 5. Người dùng ngoài 2 (Admin/Quản lý): admin_manager@gmail.com
- **Tác vụ được giao**: Đọc tổng quan Markdown report để đánh giá khối lượng công việc tồn đọng của các TA trong ngày.
- **Nguyên văn nhận xét**: "Report làm gọn gàng, sạch sẽ. Nhưng nếu gom nhóm các câu hỏi theo tag chuyên môn (ví dụ #React, #Python, #Database) thì sẽ dễ phân bổ việc cho các TA đúng chuyên môn hơn là để một list phẳng."
- **Mắc kẹt ở đâu**: Phải lướt đọc thủ công từng tóm tắt câu hỏi để biết nó thuộc ngôn ngữ/framework nào, hơi mất thời gian khi danh sách dài.
