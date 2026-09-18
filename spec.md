# AI SPEC — Trợ lý báo cáo câu hỏi tồn đọng cuối ngày · Nhóm K4-3B · Zone B2
Hướng: [ ] A — VLearn  [x] B — Trợ lý Học viên  [ ] C — Làn mở
Loại: [x] Tối ưu tính năng có sẵn  [ ] Tính năng mới

## §1. User & Job
- **Job executor + workflow**: Teaching Assistant (TA) vào cuối ngày, đang lướt Discord để rà soát lại xem có học viên nào bị bỏ sót hay cần hỗ trợ khẩn cấp không.
- **Core JTBD**: Xem danh sách các câu hỏi chưa được giải đáp trong ngày để kịp thời hỗ trợ học viên.
- **Problem statement**: Khi rà soát cuối ngày, TA gặp khó vì các câu hỏi bị trôi trên nhiều kênh, bản tin bot hiện tại tóm tắt lan man, bị lỗi text và thiếu link trực tiếp đến câu hỏi, dẫn đến việc TA mất thời gian tìm kiếm hoặc bỏ sót người cần hỗ trợ, làm học viên nản/trễ deadline.
- **Evidence (chuẩn A và/hoặc B — log đầy đủ trong repo)**:
  - Lỗi bot hiện tại: File `k4_daily_reports.md` hiển thị rõ lỗi bot chèn chữ rác ("nguồn tham chiếuhi", "nguồn tham chiếuhăn"), câu bị cắt cụt ("chưa được giải đá"), tóm tắt gom chung chung không có link đích danh.
  - Dữ liệu thực tế: Qua kiểm tra 5 ảnh chụp màn hình (gồm 35 topic/câu hỏi), có 2/35 topic hoàn toàn không có ai trả lời (VD: topic "hỏi đáp" bị tồn 19 giờ, "Xin hỗ trợ gia nhập nhóm..." bị tồn 3 ngày). Các câu hỏi này bị trôi lọt thỏm, dễ bị TA bỏ sót.
  - Kết quả khảo sát (n = 3, 100% xác nhận): 3/3 TA chỉ đọc lướt qua bản tin hiện tại do bot tóm tắt chung chung không có link bấm thẳng. 100% đồng ý dùng thử bản tin mới có link trực tiếp.

## §2. Impact & quyết định chọn
- **Bảng impact ≥3 ứng viên**:
  1. AI tự động trả lời tất cả các câu hỏi tồn đọng (TA không cần nhúng tay). Tốn token API cao. Khả thi về mặt kỹ thuật nhưng rủi ro cao.
  2. Dùng tính năng search thủ công của Discord để lọc `has:link`, `in:channel-name`. Tốn công sức TA hàng ngày, dễ quên. Khả năng triển khai dễ nhưng impact cực thấp.
  3. AI lọc câu hỏi chưa ai trả lời > 4 tiếng, tóm tắt ý chính và gửi báo cáo kèm link trực tiếp cho TA. Tốn ít token hơn, TA giải quyết nhanh 1 chạm. Khả thi cao.
- **Ứng viên ĐÃ LOẠI + vì sao**:
  - Ứng viên 1: Bị loại vì rủi ro hallucination rất cao. Nếu AI tự đoán sai kiến thức (VD: code sai, chính sách sai), hậu quả sẽ nghiêm trọng và ảnh hưởng đến uy tín khóa học.
  - Ứng viên 2: Bị loại vì nó không giải quyết được "pain point" là TA bị mất thời gian và dễ quên. Không mang tính tự động hóa.
- **Ứng viên CHỌN + vì sao**:
  - Ứng viên 3: Tối ưu nhất. Lọc được nhiễu, tiết kiệm 90% thời gian tìm kiếm cho TA (từ 15 phút rà soát các kênh xuống còn 1-2 phút click link và trả lời), đồng thời giữ lại yếu tố "Human-in-the-loop" để đảm bảo chuyên môn.

## §3. Giải pháp tương tự đã nghiên cứu
- **Ticket Tool (Discord Bot phổ biến)**: Flow tạo ticket tách biệt, dễ quản lý nhưng buộc user phải biết dùng lệnh tạo ticket thay vì hỏi thẳng trên kênh chat chung. Mình khác ở chỗ không bắt user thay đổi thói quen, user cứ chat bình thường, bot tự động lọc ngầm.
- **Discord Search/Filters**: Đáng học ở tính năng lọc theo thời gian, đáng né ở chỗ trả về một đống text thô không có tóm tắt ngữ cảnh. Mình khác ở chỗ gom lại tóm tắt và đánh dấu thời gian trôi qua.

## §4. Thiết kế
- **Lát cắt MỘT CÂU**: Một TA xem bản tin cuối ngày · muốn tìm câu hỏi chưa ai trả lời · AI quyết định phân loại các câu hỏi thực sự cần hỗ trợ (tồn đọng > 4 giờ) và tóm tắt chúng · kết quả là một danh sách gọn gàng có gắn link trực tiếp để TA click vào trả lời.
- **Non-goals (≥3 thứ KHÔNG build)**:
  1. AI sẽ KHÔNG tự động phản hồi lại tin nhắn của học viên.
  2. KHÔNG tổng hợp và xử lý các loại file đa phương tiện (Voice, video), chỉ xử lý text và mã code ngắn.
  3. KHÔNG tích hợp thông báo qua nền tảng khác như Zalo, Telegram.
- **Mức prototype nhắm tới**: [ ] Sketch [ ] Mock [x] Working — mock đoạn kéo dữ liệu Discord API thực tế (dùng dữ liệu json tự tạo), thật ở phần mô hình AI đọc và phân loại dữ liệu, tạo Markdown.
- **Automation**: [x] augment [ ] conditional [ ] automate — lý do theo cost-of-error: Cost of error cho việc tư vấn sai kiến thức lập trình là cực cao (chết cả một function hoặc gây hiểu lầm nghiêm trọng). Do đó, AI chỉ đóng vai trò Augment (hỗ trợ phân tích, tổng hợp), còn quyền sinh sát (reply) thuộc về con người (TA).
- **§4b. Nguyên tắc đã áp dụng (≥4 — HAX/PAIR, xem guide)**:
  | Nguyên tắc | Áp cụ thể vào đâu trong prototype |
  |---|---|
  | G1: Make clear what the system can do | Ghi rõ ở đầu bản tin: "Đây là danh sách do AI tự động lọc dựa trên tin nhắn chưa có reply, có thể có sai sót." |
  | G4: Show contextually relevant info | Chỉ hiển thị các tin nhắn được AI gán nhãn `is_question: true`. Bỏ qua các tin nhắn tán gẫu. |
  | G9: Support efficient correction | Thiết kế quy trình phản hồi: TA có thể thả react ❌ vào báo cáo nếu phát hiện bot bắt nhầm một câu không phải là câu hỏi. |
  | G11: Make clear why the system did what it did | Bên cạnh mỗi câu hỏi trong báo cáo, hiển thị tag thời gian: "Tồn đọng 5 tiếng", "Tồn đọng 19 tiếng" để giải thích lý do vì sao nó nằm trong list gấp. |

## §5. Kiểu lỗi — 4 lớp chỗ khó + kịch bản (≥8)
1. **Lớp 1: Nguồn sự thật (Chân lý/Facts)**
   - KB1: Học viên hỏi về một công cụ không nằm trong giáo trình (ví dụ: "Anh ơi em setup PHP thế này đúng chưa").
   - KB2: Học viên đăng ảnh chụp màn hình bị lỗi thay vì paste code text dạng văn bản.
2. **Lớp 2: Mơ hồ/Thiếu thông tin (Ambiguity)**
   - KB3: Học viên chat cộc lốc "Anh ơi giúp em với", "Cứu em".
   - KB4: Học viên tách câu hỏi làm 5-6 dòng tin nhắn liên tiếp xen kẽ với người khác.
3. **Lớp 3: Ngoài phạm vi/Thẩm quyền (Out-of-scope)**
   - KB5: Học viên nhờ TA làm hộ bài tập hoặc gỡ bug bài thi cuối khóa.
   - KB6: Học viên phàn nàn về học phí, hoàn tiền (thuộc thẩm quyền Sale/Vận hành, không phải TA).
4. **Lớp 4: Đặc thù domain (Domain-specific)**
   - KB7: Học viên paste một đoạn code thô dài cả trăm dòng không format.
   - KB8: Học viên dùng teencode kết hợp từ vựng chuyên ngành lóng (vd: "e k fix dc cái UI này, lag wá", "tạch luôn server r").

## §6. Bốn đường đi của trải nghiệm
- **Happy path**: AI phân loại chính xác các tin nhắn chưa trả lời, gom thành 1 Markdown report sạch sẽ, TA click link và vào trả lời ngay lập tức.
- **Low-confidence (②)**: AI không chắc câu "Mọi người thấy sao?" là câu hỏi bài hay tán gẫu. AI cứ cho vào báo cáo nhưng đánh dấu "Warning: Low Confidence", TA xem và nhận ra là tán gẫu nên thả icon ❌ để AI học lại.
- **Failure/không căn cứ (①)**: AI bắt nhầm đoạn mã code dài thành một "thông báo lỗi" và tóm tắt sai ý nghĩa. TA bấm link vào đọc trực tiếp sẽ hiểu vấn đề thực sự.
- **Correction (user sửa)**: TA phản hồi lại bot (dựa trên G9), nhà phát triển sửa prompt thêm ví dụ (Few-shot) vào file `evaluate_cp3.py`.
- **Khi bị đòi ngoài phạm vi (③)**: Học viên than phiền về học phí, AI vẫn bắt đó là một vấn đề cần giải quyết nhưng có thể tóm tắt là "Hỏi về vận hành/CSKH".
- **Case đặc thù domain (④)**: Text quá dài hoặc quá teencode, AI tóm tắt nguyên văn đoạn đầu kèm dấu `...` để tránh bị nổ token.

## §7. Kiểm thử
- **Chiều chất lượng + định nghĩa kiểm chứng được**: Mức độ chính xác trong việc phân loại tin nhắn (CẦN hỗ trợ vs KHÔNG CẦN hỗ trợ). Được đo đếm bằng tỷ lệ khớp với nhãn do con người gán (Expected).
- **Golden set**: 20 cases đã được tạo, phân loại theo 4 lớp chỗ khó. Lưu trong file `eval/golden_set.json`.
- **Quality bar**: "Đạt khi ≥ **90%** qua bộ (tức 18/20 câu đúng), và log không xuất hiện lỗi parse JSON."
- **Kết quả các lượt chạy**:
  | Lượt chạy | Số case test | Tỷ lệ chính xác | Note |
  |---|---|---|---|
  | Lượt 1 (CP3) | 20 | 100.0% | Dùng GPT-4o-mini + Few-shot prompting |

## §8. Phân công & kế hoạch
- **Phân công có tên**:
  - Trần Thanh Thái (2A202602454) — Khảo sát TA, phân tích data lỗi bot & User test
  - Cao Đức Hiếu (2A202602701) — Thiết kế prompt phân loại & tóm tắt
  - Dương Hữu Đạt (2A202602544) — Code tích hợp model sinh báo cáo (Làm file `evaluate_cp3.py`)
  - Trần Công Thiện (2A202602579) — Làm Spec, review test cases & Demo
- **Willing users + kế hoạch vòng validation**: 
  - `moizdau@gmail.com`, `thunmt2004@gmail.com`, `congduan2554@gmail.com`.
  - Kế hoạch: LAB 6 sẽ nhờ 3 TAs này trực tiếp dry-run bằng cách cấp quyền chạy thử bản tin sinh ra từ 20 case giả lập để xem họ có hài lòng với cấu trúc báo cáo không.

## §9. Changelog
| Thời điểm | Đổi gì | Vì sao (trỏ về feedback/case nào) |
|---|---|---|
| 18/09/2026 | Tạo bản draft spec.md đầu tiên | Nộp CP4 |
| 18/09/2026 | Áp dụng Few-shot learning vào CP3 | Fix lỗi AI bắt nhầm câu tán gẫu thành câu hỏi (ID 1, ID 13) |
| 18/09/2026 | Bổ sung hướng dẫn cách feedback cho bot vào đầu bản tin báo cáo. | TA `thunmt2004@gmail.com` không biết cách feedback (react ❌) khi bot nhận diện nhầm câu hỏi. |
| 18/09/2026 | Giữ nguyên việc AI tóm tắt ngắn các đoạn code dài, ghi chú thêm cảnh báo cho TA. | Tiết kiệm token API và tránh vỡ layout. Sẽ khắc phục bằng cách TA tự click link đọc trực tiếp (theo feedback của `moizdau@gmail.com`). |
| 18/09/2026 | Thêm vào backlog ý tưởng: Phân loại câu hỏi theo tag chuyên môn (ví dụ: #React, #Python). | Giúp quản lý dễ chia việc cho TA chuyên môn (theo feedback của `admin_manager@gmail.com`). |
