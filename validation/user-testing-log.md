# Nhật Ký Dùng Thử Sản Phẩm (Validation Log - Khối R6)

> **Mục tiêu:** Kiểm chứng prototype giải pháp với người dùng thực tế trước buổi thuyết trình.  
> **Quy chuẩn:** Tuân thủ hướng dẫn kiểm thử 5 nhịp (Comfort, Context, Task, Observe, Hỏi sau khi dùng) theo `02-guide.md §4.2` và thang bằng chứng 4 tầng.

---

## 1. Bảng Log 5 Người Dùng Thử (Scaffold Log)

| # | Người thử (Tên/Vai — Willing user?) | Task giao (theo Outcome) | Quan sát hành vi (Do dự / Hiểu sai / Thao tác) | Quote nguyên văn từ người thử | Mức độ nghiêm trọng |
|---|---|---|---|---|---|
| **1** | **Nguyễn Văn Hữu** (`moizdau@gmail.com`)<br>*Teaching Assistant Discord K4 (Willing user CP1)* | "Hãy tìm các câu hỏi đang bị tồn đọng chưa ai giải quyết cuối ngày hôm nay để xử lý." | Bấm ngay nút "✦ Tạo lại bản tin" không cần hướng dẫn. Mất 3 giây do dự ở bảng thống kê số lượng, sau đó click vào câu hỏi có tag "Tồn đọng 19 tiếng" đầu tiên. | *"Trước đây tin nhắn bị trôi ở các kênh chat chung rất khó tìm. Có link bấm thẳng nhảy ngay đến đúng tin nhắn gốc trên Discord giúp mình tiết kiệm ít nhất 15 phút mỗi tối và không lo bỏ quên ai."* | Thấp (Giao diện trực quan, cần làm nổi bật hơn tag gấp) |
| **2** | **Lê Thị Thu** (`thunmt2004@gmail.com`)<br>*Teaching Assistant Hỗ trợ Học viên (Willing user CP1)* | "Hãy kiểm tra xem bản tin này có bị lẫn các tin nhắn tán gẫu hoặc chữ rác không." | Cuộn kỹ qua 5 thẻ câu hỏi, đọc từng câu tóm tắt 1 dòng của AI. So sánh câu tóm tắt với đoạn hội thoại gốc trong phần 'Xem chi tiết'. | *"Bản tin cũ của bot toàn chữ rác ('nguồn tham chiếuhi', 'chưa được giải đá') và lẫn tin nhắn tán gẫu. Bản tin mới lọc rất sạch, tóm tắt đúng trọng tâm nên mình nhìn vào là biết học viên đang kẹt ở phần nào để vào hỗ trợ ngay."* | Không có lỗi (Độ tin cậy cao) |
| **3** | **Nguyễn Công Duẩn** (`congduan2554@gmail.com`)<br>*Teaching Assistant Kỹ thuật (Willing user CP1)* | "Hãy phân loại câu hỏi nào cần ưu tiên trả lời gấp trước 23:00 tối nay." | Bấm vào bộ lọc "Trên 4 giờ". Nhìn vào tag thời gian màu đỏ. Hỏi: "Nếu mình xử lý xong thì có nút nào để đánh dấu không, sợ TA khác lại nhảy vào làm trùng?" | *"Rất thích tag thời gian 'Tồn đọng 5h', 'Tồn đọng 19h'. Nó giúp mình và các TA khác biết ngay câu nào đang cấp bách nhất để chia nhau xử lý trước. Nhưng nên có nút tick đã xử lý để tránh 2 người cùng làm."* | **Trung bình** (Cần nút đánh dấu đã xử lý) |
| **4** | **Phạm Minh Tuấn**<br>*Học viên K4 (Người hỏi câu ID 2 trên Discord)* | "Đọc bản tóm tắt câu hỏi của bạn do AI sinh ra, xem AI hiểu đúng vấn đề bạn đang kẹt không." | Đọc phần tóm tắt: "Hỏi cách cấu hình GitHub Copilot cho VS Code". Gật đầu ngay lập tức. | *"AI tóm tắt chuẩn xác câu mình hỏi hôm qua, ngắn hơn nhiều so với đoạn chat dài dòng mình gõ trên Discord. Nếu TA nhận được tin gọn thế này thì chắc sẽ rep mình nhanh hơn nhiều."* | Không có lỗi |
| **5** | **Hoàng Thị Mai Anh**<br>*Lab Coach / Mentor Hỗ trợ Zone B* | "Đánh giá khả năng đưa bản tin này vào quy trình trực ca tối của đội ngũ TA." | Thao tác bấm nút Tạo lại bản tin, duyệt các câu hỏi và test thử nút 'Đánh dấu đã xử lý'. | *"Ý tưởng augment rất đúng đắn, không để AI tự rep bừa bãi. Chỉ cần thêm Webhook đẩy thẳng vào kênh `#ta-internal` đúng 22:00 mỗi tối là đưa vào vận hành chính thức được luôn."* | Thấp (Đề xuất thêm tính năng tự động gửi Webhook) |

---

## 2. Bốn Dòng Tổng Hợp Sau Vòng Validation (Bắt buộc theo §4.2)

1. **Chủ đề lặp lại nhiều nhất:** Người dùng đánh giá rất cao việc trích xuất **Deep-link Discord bấm thẳng** và **lọc sạch tin nhắn rác**, giúp tiết kiệm 15-20 phút rà soát mỗi tối.
2. **Thay đổi đã làm trước demo (Cập nhật vào Spec §9 Changelog):** 
   - Đã bổ sung tính năng nút bấm **"✓ Đánh dấu đã xử lý"** và tab **"Đã xử lý"** ngay trên Dashboard để các TA không bị trùng lặp công việc khi cùng trực ca (theo phản hồi của TA Nguyễn Công Duẩn).
   - Đã làm nổi bật **Tag thời gian tồn đọng màu cảnh báo** ("Tồn đọng > 4 giờ", "Tồn đọng 19 giờ") theo nguyên tắc PAIR G11.
3. **Giữ nguyên có lý do căn cứ:** Giữ nguyên quyết định **KHÔNG cho AI tự động trả lời tin nhắn của học viên (Automate)** dù người dùng muốn nhanh hơn, vì chi phí sai sót (cost-of-error) của việc tư vấn sai kiến thức code/chính sách là rất nghiêm trọng (bảo toàn nguyên tắc Augment).
4. **Đưa vào Backlog dài hạn (Slide 6):** 
   - Tích hợp Discord Webhook tự động đẩy bản tin định kỳ lúc 22:00 hàng ngày.
   - Thêm Multimodal OCR để đọc ảnh chụp màn hình code lỗi (kịch bản KB2).
   - Cơ chế Real-time Lock thông báo "TA đang trả lời..." khi có người đang mở link.

---

## 3. Thang Đo Thất Vọng (Disappointment Score - Sean Ellis)

Khi được hỏi: *"Nếu từ ngày mai không được sử dụng bản tin tổng hợp có gắn link này nữa, bạn sẽ cảm thấy thế nào?"*
- **Rất tiếc (Very disappointed):** **4 / 5 người (80%)** — gồm cả 3 TA trực tiếp.
- **Hơi tiếc (Somewhat disappointed):** **1 / 5 người (20%)** — học viên (vì học viên không trực tiếp rà soát).
- **Không sao (Not disappointed):** **0 / 5 người (0%)**.

➔ **Kết luận:** Sản phẩm đạt chuẩn Product-Market Fit sơ khởi với nhóm người dùng cốt lõi (TA), giải quyết trúng điểm nghẽn thực tế.
