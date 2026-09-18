# Kịch bản Pitching & Demo CP5 - Nhóm K4-3B (Zone B2)

## Phần 1: Dàn ý Slide Thuyết Trình (Pitching)
*Bạn hãy copy nội dung này vào Canva / PowerPoint để làm Slide nộp cho CP5.*

---

**Slide 1: Tiêu đề**
- Tên sản phẩm: AI TA Dashboard - Trợ lý báo cáo tồn đọng cuối ngày.
- Đội ngũ: K4-3B (Thanh Thái, Đức Hiếu, Hữu Đạt, Công Thiện).
- Câu slogan: "Không để học viên nào bị bỏ lại phía sau."

**Slide 2: Nỗi đau (The Problem)**
- **Thực trạng:** Cuối ngày, TA lướt Discord rà soát câu hỏi rất vất vả vì tin nhắn bị trôi trên nhiều kênh.
- **Bot hiện tại:** Báo cáo gom chung chung, bị lỗi font/text rác, không có link bấm thẳng.
- **Hậu quả:** (Evidence) 2/35 topic bị bỏ sót hoàn toàn (có câu tồn đọng đến 3 ngày). TA mất 15-20 phút rà soát mỗi ngày nhưng vẫn sót người.

**Slide 3: Giải pháp (The Solution)**
- Tự động hóa quá trình thu thập và lọc nhiễu bằng AI (OpenAI GPT-4o-mini).
- Chuyển từ "TA tự đi tìm việc" sang "Việc tự tìm đến TA".
- Báo cáo sinh ra được tóm tắt ý chính, đánh dấu thời gian trôi qua và gắn link trực tiếp đến từng câu hỏi.

**Slide 4: Video Demo (Chèn video quay ở Phần 2 vào đây)**
- "Sau đây xin mời BGK xem quá trình TA sử dụng sản phẩm vào cuối ngày."

**Slide 5: Thiết kế AI & Sự an toàn (Impact vs Risk)**
- **Vì sao chỉ tóm tắt mà không Auto-reply?**
- Cost of Error cao: Tư vấn sai kiến thức lập trình gây hậu quả nghiêm trọng.
- Quyết định: AI đóng vai trò **Augment** (hỗ trợ tóm tắt, gom nhóm), con người giữ quyền sinh sát (reply). Đảm bảo tính chuyên môn 100%.

**Slide 6: Kết quả & Kiểm thử**
- Đã test trên tập Golden Set 20 câu với kỹ thuật Few-shot Prompting.
- Tỷ lệ chính xác: **100%**.
- Sẵn sàng tích hợp vòng Validation với các TA thực tế ở LAB 6.

---

## Phần 2: Kịch bản Quay Video Demo (30-60 giây)
*Bạn hãy mở file `codebase/index.html` trên trình duyệt web, bật phần mềm quay màn hình và làm theo các bước sau.*

**Hành động & Lời thoại:**
1. **[Giây 0-5] - Bắt đầu quay:**
   - *Không cần thu âm:* Bắt đầu quay màn hình giao diện Sunset (Discord clone).
2. **[Giây 5-10] - Cập nhật báo cáo:**
   - Click vào nút **"✦ Tạo lại bản tin"**. Đợi vài giây để hệ thống mô phỏng tiến trình AI tổng hợp dữ liệu.
3. **[Giây 10-20] - Xem và lọc kết quả:**
   - Màn hình hiện ra các thống kê: "Câu hỏi đang chờ", "Đã chờ trên 4 giờ".
   - Bấm vào tab/bộ lọc **"Trên 4 giờ"** (hoặc "Cần kiểm tra") để lọc các câu hỏi đang gấp.
4. **[Giây 20-25] - Xử lý câu hỏi:**
   - Ở một thẻ câu hỏi bất kỳ, bấm vào **"Xem chi tiết"** để đọc đoạn hội thoại gốc và phần AI tóm tắt.
   - Sau đó bấm **"Đánh dấu đã xử lý"**. Câu hỏi sẽ được chuyển sang mục "Đã xử lý".
5. **[Giây 25-30] - Kết thúc:**
   - Chuyển sang tab **"✓ Đã xử lý"** để xem lại câu hỏi vừa tick.
   - Tắt video.

*Lưu ý: Video không cần lồng tiếng, chỉ cần thao tác mượt mà theo kịch bản trên là chuẩn yêu cầu CP5.*
