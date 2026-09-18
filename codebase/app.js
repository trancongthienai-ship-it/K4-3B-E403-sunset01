const initialQuestions = [
  { id: 3, channel: 'hỗ-trợ-chung', title: 'Hỗ trợ giấy tờ gấp', summary: 'Học viên đang gặp vấn đề gấp liên quan đến giấy tờ cần giải quyết.', hours: 15, user: 'Học viên 03', uncertain: false, reason: 'Học viên đang gặp vấn đề gấp cần TA/BTC hỗ trợ.', messages: [['Học viên 03', 'Em đang cần hỗ trợ về vấn đề giấy tờ gấp thì em liên lạc đến bộ phận nào ạ']] },
  { id: 4, channel: 'hỏi-đáp-kỹ-thuật', title: 'Lỗi setup Github Copilot', summary: 'Lỗi connection timeout khi cài đặt Github Copilot.', hours: 10, user: 'Học viên 04', uncertain: false, reason: 'Học viên gặp lỗi kỹ thuật cần hướng dẫn.', messages: [['Học viên 04', 'Mọi người cho em hỏi làm sao để setup cái Github Copilot ạ, nó cứ báo lỗi connection timeout']] },
  { id: 6, channel: 'hỗ-trợ-chung', title: 'Xin gia nhập nhóm sau hạn', summary: 'Học viên xin gia nhập nhóm do ốm mấy ngày qua.', hours: 25, user: 'Học viên 06', uncertain: false, reason: 'Yêu cầu hỗ trợ đặc biệt cần BTC giải quyết.', messages: [['Học viên 06', 'Xin hỗ trợ gia nhập nhóm sau hạn đăng ký vì em bị ốm mấy ngày qua']] },
  { id: 7, channel: 'hỗ-trợ-học-tập', title: 'Tìm file record buổi 1', summary: 'Hỏi về link record bài giảng.', hours: 8, user: 'Học viên 07', uncertain: false, reason: 'Câu hỏi tìm kiếm tài liệu.', messages: [['Học viên 07', 'Cho em hỏi file record buổi 1 nằm ở đâu vậy ạ?']] },
  { id: 9, channel: 'hỏi-đáp-lab', title: 'Hỏi bài tập phân tích dữ liệu', summary: 'Hỏi cách làm câu 3 bài tập về nhà.', hours: 5, user: 'Học viên 09', uncertain: false, reason: 'Hỏi bài tập, cần TA vào hướng dẫn.', messages: [['Học viên 09', 'Lab coach ơi cho em hỏi câu 3 bài tập về nhà phần phân tích dữ liệu làm sao ạ?']] },
  { id: 11, channel: 'hỏi-đáp-kỹ-thuật', title: "Lỗi 'module not found'", summary: 'Lỗi khi chạy lệnh npm start.', hours: 2, user: 'Học viên 11', uncertain: false, reason: 'Hỏi lỗi code.', messages: [['Học viên 11', "Lỗi 'module not found' khi chạy npm start, có ai biết fix không ạ?"]] },
  { id: 14, channel: 'thông-báo-chung', title: 'Link nộp bài CP1', summary: 'Hỏi về form nộp bài.', hours: 4, user: 'Học viên 14', uncertain: true, reason: 'Hỏi thông tin quan trọng từ BTC.', messages: [['Học viên 14', 'Link nộp bài CP1 ở đâu vậy BTC?']] },
  { id: 16, channel: 'hỗ-trợ-học-tập', title: 'Lịch học bù thứ 7', summary: 'Hỏi lịch học cuối tuần.', hours: 6, user: 'Học viên 16', uncertain: true, reason: 'Hỏi lịch học.', messages: [['Học viên 16', 'Mọi người ơi cho hỏi thứ 7 này có học bù không ạ?']] },
  { id: 18, channel: 'hỗ-trợ-chung', title: 'Kiểm tra điểm chuyên cần', summary: 'Học viên thắc mắc về điểm danh tuần trước.', hours: 12, user: 'Học viên 18', uncertain: false, reason: 'Hỏi về điểm số.', messages: [['Học viên 18', 'Làm sao để biết mình đã được chấm điểm chuyên cần tuần trước hay chưa ạ?']] },
  { id: 20, channel: 'hỗ-trợ-chung', title: 'Hỏi chính sách nộp muộn', summary: 'Học viên hỏi bị trừ điểm không khi nộp muộn do cúp điện.', hours: 1, user: 'Học viên 20', uncertain: false, reason: 'Hỏi chính sách, cần BTC trả lời.', messages: [['Học viên 20', 'Cho e hỏi nộp muộn deadline 1 tiếng do cúp điện có bị trừ điểm ko ạ?']] }
];
// Explicit fixture groups: no AI clustering in the CP2 mock.
initialQuestions.forEach(q => {
  q.sources = [{ id: q.id + '-1', userId: q.user, user: q.user, channel: q.channel, hours: q.hours, messages: q.messages }];
});
const freshQuestions = () => initialQuestions.map(q => ({ ...q, done: false, sources: q.sources.map(source => ({ ...source, done: false, replies: [], draft: '', expanded: false })) }));
const peopleCount = q => new Set(q.sources.map(source => source.userId)).size;
let questions = freshQuestions();
let currentView = 'report';
let currentFilter = 'overdue';
let toastTimer;
let generating = false;
const $ = selector => document.querySelector(selector);
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function toast(message) {
  clearTimeout(toastTimer);
  $('#toast').textContent = message;
  $('#toast').hidden = false;
  toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 3200);
}

function render() {
  const pending = questions.filter(q => !q.done);
  const done = questions.filter(q => q.done);
  $('#pending-stat').textContent = pending.length;
  $('#overdue-stat').textContent = pending.filter(q => q.hours > 4).length;
  $('#uncertain-stat').textContent = pending.filter(q => q.uncertain).length;
  $('#done-stat').textContent = done.length;
  $('#resolved-count').textContent = done.length;
  document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === currentView));
  document.querySelectorAll('[data-filter]').forEach(button => button.classList.toggle('selected', button.dataset.filter === currentFilter));
  const titles = { report: 'Bản tin cuối ngày', resolved: 'Câu hỏi đã xử lý', guide: 'Hướng dẫn sử dụng' };
  $('#breadcrumb').textContent = 'daily-report';
  $('#page-title').innerHTML = `${titles[currentView]}<span>.</span>`;
  $('#page-subtitle').textContent = { report: 'Những câu hỏi cần bạn, gói gọn trong một bản tin.', resolved: 'Những câu hỏi bạn đã kiểm tra và xác nhận xử lý.', guide: 'Đi từ bản tin đến câu hỏi cần hỗ trợ, trong vài thao tác.' }[currentView];
  $('#report-content').hidden = currentView === 'guide';
  $('#guide-content').hidden = currentView !== 'guide';
  $('#generate').hidden = currentView !== 'report';
  $('.tabs').hidden = currentView === 'resolved';
  $('#list-title').textContent = currentView === 'resolved' ? 'Đã được TA xác nhận' : 'Câu hỏi cần chú ý';
  $('#list-caption').textContent = currentView === 'resolved' ? 'Có thể đưa câu hỏi về đang chờ nếu đánh dấu nhầm.' : 'Ưu tiên câu hỏi chờ lâu nhất.';
  const term = $('#search').value.trim().toLocaleLowerCase('vi');
  const filtered = questions.filter(q => (currentView === 'resolved' ? q.done : !q.done))
    .filter(q => currentView === 'resolved' || currentFilter === 'all' || (currentFilter === 'overdue' ? q.hours > 4 : q.uncertain))
    .filter(q => `${q.title} ${q.channel} ${q.summary} ${q.sources.map(source => source.channel + ' ' + source.user + ' ' + source.messages.map(message => message[1]).join(' ')).join(' ')}`.toLocaleLowerCase('vi').includes(term))
    .sort((a, b) => b.hours - a.hours);
  $('#question-list').innerHTML = filtered.length ? filtered.map(q => `<article class="question"><div class="question-meta"><span class="channel"># ${escapeHtml(q.channel)}</span><span class="tag ${q.done ? 'done' : ''}">${q.done ? '✓ Đã xử lý' : `◷ Chờ ${q.hours} giờ`}</span>${q.uncertain && !q.done ? '<span class="tag uncertain">Cần kiểm tra</span>' : ''}</div><h3>${escapeHtml(q.title)}</h3><p>${escapeHtml(q.summary)}</p><div class="question-bottom"><span class="student"><span class="student-icon">HV</span>${peopleCount(q)} người hỏi · ${q.sources.length} tin nhắn · ${q.sources.filter(source => !source.done).length} chưa xử lý</span><button class="text-button" data-detail="${q.id}">Xem chi tiết <span aria-hidden="true">↗</span></button></div></article>`).join('') : `<div class="empty"><strong>${term ? 'Không tìm thấy câu hỏi' : currentView === 'resolved' ? 'Chưa có câu hỏi đã xử lý' : 'Không còn câu hỏi trong bộ lọc này'}</strong>${term ? 'Thử từ khóa khác hoặc xóa nội dung tìm kiếm.' : currentView === 'resolved' ? 'Câu hỏi bạn đánh dấu đã xử lý sẽ xuất hiện ở đây.' : 'Bạn có thể chọn Tất cả để kiểm tra những câu hỏi khác.'}</div>`;
}

function openDetail(id) {
  const q = questions.find(item => item.id === id);
  const remaining = q.sources.filter(source => !source.done).length;
  $('#detail-content').innerHTML = `<h2>${escapeHtml(q.title)}</h2><p>${escapeHtml(q.summary)}</p>
    <div class="group-summary"><strong>${peopleCount(q)} người hỏi cùng nội dung</strong><span>${q.sources.length} tin nhắn · ${new Set(q.sources.map(source => source.channel)).size} kênh · ${remaining} tin chưa xử lý</span></div>
    <p class="group-note">Một người hỏi nhiều lần chỉ tính là một người. Nhóm nội dung này được gán sẵn để demo, chưa do AI phân loại.</p>
    <div class="reason"><strong>Vì sao được gom nhóm?</strong><br>Các câu hỏi trong nhóm cùng đề cập: ${escapeHtml(q.title)}. TA cần đọc từng hội thoại để kiểm tra ngữ cảnh trước khi hỗ trợ.</div>
    <h3 class="sources-title">Các câu hỏi gốc (${q.sources.length})</h3>
    ${q.sources.map(source => `<article class="source-card"><div class="source-header"><strong>${escapeHtml(source.user)}</strong><span class="tag ${source.done ? 'done' : ''}">${source.done ? '✓ Đã xác nhận giải đáp' : source.replies.length ? 'Đã trả lời · chờ xác nhận' : 'Chờ ' + source.hours + ' giờ'}</span></div><span class="channel"># ${escapeHtml(source.channel)}</span><p>${escapeHtml(source.messages[0][1])}</p><details data-thread="${source.id}" ${source.expanded ? 'open' : ''}><summary>Xem hội thoại và trả lời (mock)</summary><div class="conversation">${source.messages.map(([author, message]) => `<div class="message"><b>${escapeHtml(author)}</b><p>${escapeHtml(message)}</p></div>`).join('')}${source.replies.map(reply => `<div class="message ta-reply"><b>Bạn · TA <span class="bot-label">GIẢ LẬP</span></b><time>${escapeHtml(reply.time)}</time><p>${escapeHtml(reply.text)}</p></div>`).join('')}<p class="source-note">Trả lời ${escapeHtml(source.user)} tại #${escapeHtml(source.channel)}. Nội dung chỉ hiển thị trong mock, không gửi lên Discord.</p><form data-reply="${source.id}"><label for="reply-${source.id}">Câu trả lời của bạn</label><textarea id="reply-${source.id}" rows="3" maxlength="2000" required placeholder="Nhập hướng dẫn hỗ trợ học viên…" ${source.done ? 'disabled' : ''}>${escapeHtml(source.draft)}</textarea><button class="button primary" type="submit" ${source.done ? 'disabled' : ''}>Gửi trả lời (giả lập)</button></form></div></details><button class="button source-done" data-source="${source.id}" ${!source.done && !source.replies.length ? 'disabled' : ''}>${source.done ? 'Đưa câu này về đang chờ' : '✓ Xác nhận câu này đã giải đáp'}</button>${!source.replies.length ? '<p class="reply-hint">Mở hội thoại và gửi câu trả lời trước khi xác nhận.</p>' : ''}</article>`).join('')}
    <p class="group-note">Chỉ xác nhận sau khi bạn hoặc người khác đã giải đáp. Nhóm chỉ chuyển sang Đã xử lý khi tất cả câu hỏi gốc đã được xác nhận.</p>`;
  document.querySelectorAll('[data-thread]').forEach(details => details.addEventListener('toggle', () => {
    q.sources.find(source => source.id === details.dataset.thread).expanded = details.open;
  }));
  document.querySelectorAll('[data-reply]').forEach(form => {
    const source = q.sources.find(item => item.id === form.dataset.reply);
    const input = form.querySelector('textarea');
    input.addEventListener('input', () => {
      source.draft = input.value;
      input.setCustomValidity('');
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (source.done) return;
      const text = input.value.trim();
      if (!text) {
        input.setCustomValidity('Vui lòng nhập câu trả lời, không chỉ khoảng trắng.');
        input.reportValidity();
        return;
      }
      source.replies.push({ text, time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) });
      source.draft = '';
      source.expanded = true;
      openDetail(id);
      document.querySelector(`[data-source="${source.id}"]`).focus();
      toast('Đã gửi trả lời giả lập. Kiểm tra nội dung rồi xác nhận đã giải đáp.');
    });
  });
  document.querySelectorAll('[data-source]').forEach(button => button.addEventListener('click', () => {
    const source = q.sources.find(item => item.id === button.dataset.source);
    if (!source.done && !source.replies.length) return;
    source.done = !source.done;
    q.done = q.sources.every(item => item.done);
    render();
    openDetail(id);
    toast(source.done ? 'Đã xác nhận riêng câu hỏi này.' : 'Đã đưa câu hỏi này về đang chờ.');
  }));
  if (!$('#detail-dialog').open) $('#detail-dialog').showModal();
}

document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {
  currentView = button.dataset.view;
  $('#search').value = '';
  render();
}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  currentFilter = button.dataset.filter;
  render();
}));
$('#search').addEventListener('input', render);
$('#question-list').addEventListener('click', event => {
  const button = event.target.closest('[data-detail]');
  if (button) openDetail(Number(button.dataset.detail));
});
$('#close-dialog').addEventListener('click', () => $('#detail-dialog').close());
$('#detail-dialog').addEventListener('click', event => {
  if (event.target === $('#detail-dialog')) {
    const rect = event.target.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.target.close();
  }
});
$('#generate').addEventListener('click', async () => {
  if (generating) return;
  generating = true;
  $('#generate').disabled = true;
  $('#generate').textContent = '◌ Đang tổng hợp (giả lập)…';
  await new Promise(resolve => setTimeout(resolve, 1100));
  generating = false;
  $('#generate').disabled = false;
  $('#generate').textContent = '✦ Tạo lại bản tin';
  render();
  toast('Đã làm mới bản tin mẫu. Chưa có lời gọi AI thật.');
});
$('#reset').addEventListener('click', () => {
  questions = freshQuestions();
  currentView = 'report';
  currentFilter = 'overdue';
  $('#search').value = '';
  render();
  toast('Đã đặt lại dữ liệu demo.');
});

const mockForm = $('#mock-question-form');
if (mockForm) {
  mockForm.addEventListener('submit', event => {
    event.preventDefault();
    const input = $('#mock-question-input');
    const text = input.value.trim();
    if (!text) return;
    
    const newId = Date.now();
    const newQ = {
      id: newId,
      channel: 'tạo-thủ-công',
      title: 'Câu hỏi giả lập mới',
      summary: text.length > 50 ? text.substring(0, 50) + '...' : text,
      hours: 1, // Set to 1 hour so it shows up in the pending list
      user: 'Khách',
      uncertain: false,
      reason: 'Được tạo thủ công từ giao diện giả lập.',
      messages: [['Khách', text]],
      done: false
    };
    
    newQ.sources = [{ 
      id: newId + '-1', 
      userId: newQ.user, 
      user: newQ.user, 
      channel: newQ.channel, 
      hours: newQ.hours, 
      messages: newQ.messages, 
      done: false, 
      replies: [], 
      draft: '', 
      expanded: false 
    }];
    
    questions.unshift(newQ);
    input.value = '';
    
    // Switch to report view and "all" filter to make sure the user sees it
    currentView = 'report';
    currentFilter = 'all';
    
    render();
    toast('Đã thêm câu hỏi giả lập vào hệ thống!');
  });
}

render();
