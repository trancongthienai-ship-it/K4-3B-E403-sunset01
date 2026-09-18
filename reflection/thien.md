# Reflection Cá Nhân — Trần Công Thiện

- **Họ và tên:** Trần Công Thiện
- **Mã học viên:** 2A202602579
- **Nhóm:** K4-3B · Zone B2 · Track B (Trợ lý Học viên)
- **Đề tài:** AI TA Dashboard — Trợ lý tổng hợp và cảnh báo câu hỏi tồn đọng cuối ngày cho Teaching Assistant

---

## 1. Vai Trò & Phần Việc Đảm Nhiệm
Trong dự án, tôi giữ vai trò **Quản trị Kỹ thuật & Thiết kế Đặc tả (AI Spec Lead & Pitching)**:
- **Soạn thảo toàn diện `spec.md` (CP4):** Xây dựng đầy đủ 9 đề mục đặc tả AI theo chuẩn công nghiệp, đối chiếu 4 nguyên tắc HAX/PAIR (G1, G4, G9, G11), định nghĩa rõ ràng lát cắt một câu và 4 đường đi của trải nghiệm người dùng (Happy path, Failure, Low-confidence, Correction).
- **Xây dựng bộ Golden Set 20 câu hỏi (`eval/golden_set.json`):** Phân loại các câu hỏi bao phủ chặt chẽ **4 lớp chỗ khó** (Facts, Ambiguity, Out-of-scope, Domain-specific), đặt chuẩn Quality Bar rõ ràng (≥90%) trước khi tiến hành chạy đo đạc.
- **Biên soạn kịch bản Pitch & Demo (`pitch_script.md`, `slides.html`):** Thiết kế cấu trúc 6 slide thuyết trình tuân thủ tuyệt đối quy định "Không có bằng chứng thì không có slide", đảm bảo mọi luận điểm đều gắn với con số thực tế.

---

## 2. AI Đã Hỗ Trợ Tôi Như Thế Nào?
- AI hỗ trợ tôi phản biện cấu trúc tài liệu spec, chỉ ra những lỗ hổng tiềm ẩn trong việc phân định phạm vi (Scope vs Non-goals) trước khi chốt nộp CP4.
- AI đóng vai trò như một "Huấn luyện viên thuyết trình" (Pitch Coach), giúp tôi cô đọng bài nói trong giới hạn thời gian nghiêm ngặt (45 giây mỗi slide), loại bỏ các từ ngữ sáo rỗng và làm nổi bật các con số biết nói (2/35 topic, 15-20 phút, 100% accuracy).

---

## 3. Một Bài Học Từ Case Thất Bại (Fail) Của Chính Nhóm
- **Case fail thực tế:** Khi thiết kế bộ Golden Set ở vòng đầu, tôi đã vô tình đưa vào quá nhiều câu hỏi dễ (happy path) mà thiếu các câu hỏi thuộc lớp chỗ khó thứ 2 (Ambiguity) và thứ 3 (Out-of-scope). Khi chạy thử, điểm số ra rất cao nhưng khi đem cho TA test thật thì TA lập tức phát hiện bot bị lẫn câu tán gẫu.
- **Bài học rút ra:** "Quality bar giả tạo" nguy hiểm hơn một điểm số thấp. Nếu tập kiểm thử không bao quát được các góc khuất và các trường hợp nhập nhằng trong thực tế, sản phẩm sẽ gãy vụn ngay khi vừa rời khỏi phòng thí nghiệm. Việc dũng cảm đưa các kịch bản khó vào test và minh bạch các case fail chính là điểm mấu chốt tạo nên một sản phẩm AI đẳng cấp.

---

## 4. Cam Kết Tuân Thủ "Vibe-Coding Rule"
Tôi nắm vững toàn bộ nội dung của `spec.md`, các tiêu chí đánh giá trong rubric, và triết lý thiết kế của toàn bộ hệ thống. Tôi sẵn sàng đại diện nhóm trình bày thuyết phục và bảo vệ giải pháp trước Ban giám khảo tại CP6.
