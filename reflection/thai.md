# Reflection Cá Nhân — Trần Thanh Thái

- **Họ và tên:** Trần Thanh Thái
- **Mã học viên:** 2A202602454
- **Nhóm:** K4-3B · Zone B2 · Track B (Trợ lý Học viên)
- **Đề tài:** AI TA Dashboard — Trợ lý tổng hợp và cảnh báo câu hỏi tồn đọng cuối ngày cho Teaching Assistant

---

## 1. Vai Trò & Phần Việc Đảm Nhiệm
Trong đợt Hackathon này, tôi đảm nhận vai trò **Nghiên cứu Người dùng (User Research) & Kiểm thử Thực tế (Validation)**:
- **Thu thập bằng chứng ban đầu (Evidence CP1):** Tiến hành kiểm tra 5 ảnh chụp màn hình thực tế trên Discord khoá K4 (gồm 35 topic), phát hiện ra 2/35 topic bị bỏ sót hoàn toàn không ai trả lời (trong đó có câu hỏi tồn 19 giờ và 3 ngày).
- **Phân tích lỗi bot cũ:** Phân tích file `k4_daily_reports.md`, chỉ ra các lỗi text rác (`nguồn tham chiếuhi`, `nguồn tham chiếuhăn`), câu bị cắt cụt (`chưa được giải đá`), và việc thiếu link trực tiếp khiến TA không dùng.
- **Thực hiện khảo sát & User Testing (Khối R6):** Liên hệ và điều phối 5 người dùng thử prototype (3 TA là willing users: Hữu, Thu, Duẩn; 1 học viên K4; 1 lab coach). Ghi nhận nhật ký 5 nhịp và tổng hợp các đề xuất cải tiến cho nhóm.

---

## 2. AI Đã Hỗ Trợ Tôi Như Thế Nào?
- AI (Gemini / GPT) giúp tôi tăng tốc độ tổng hợp và phân tích dữ liệu định tính từ các cuộc phỏng vấn nhanh với TA.
- AI hỗ trợ soạn thảo bộ câu hỏi Mom Test trung tính, tránh các câu hỏi định hướng kiểu *"Bạn có thích tính năng này không?"*, giúp tôi thu thập được những trích dẫn (quotes) chân thực và các chỉ số thất vọng (Disappointment score) có giá trị cao.
- Khi làm việc nhóm, tôi dùng AI để đối chiếu các phản hồi của người dùng với bộ nguyên tắc Google PAIR (đặc biệt là G9 và G11) để đưa ra đề xuất sửa đổi UI cho Đạt và Hiếu một cách có cơ sở lý thuyết vững chắc.

---

## 3. Một Bài Học Từ Case Thất Bại (Fail) Của Chính Nhóm
- **Case fail thực tế:** Ban đầu nhóm có ý định làm tính năng AI tự động soạn thảo và trả lời luôn tin nhắn của học viên (Automate). Khi tôi đem ý tưởng này đi hỏi các TA trong buổi khảo sát, cả 3 TA đều tỏ ra e ngại và từ chối sử dụng vì sợ AI bị hallucination, hướng dẫn sai cú pháp code hoặc sai thông tin hạn nộp bài.
- **Bài học rút ra:** Không phải cứ ứng dụng AI tự động 100% là tốt. Trong môi trường đào tạo và hỗ trợ kỹ thuật, chi phí sai lầm (cost-of-error) là rất đắt. Thiết kế theo hướng **Augment** (AI chuẩn bị dữ liệu, con người thẩm định và ra quyết định) mới là chìa khóa để xây dựng niềm tin nơi người dùng thật.

---

## 4. Cam Kết Tuân Thủ "Vibe-Coding Rule"
Tôi nắm vững toàn bộ quy trình khảo sát, số liệu mẫu 2/35 topic, các trích dẫn nguyên văn trong `validation/user-testing-log.md` và sẵn sàng giải thích chi tiết trước Ban giám khảo tại phiên thuyết trình CP6.
