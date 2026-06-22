
let currentRole = null;

function openRole(role) {
  currentRole = role;
  document.getElementById('role-selector').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  const labels = {customer:'👤 Pengguna',admin:'🛡️ Admin',driver:'🛵 Driver',mitra:'🏪 Mitra'};
  const titles = {customer:'Smart Laundry',admin:'Admin Panel',driver:'Driver App',mitra:'Mitra Laundry'};
  document.getElementById('role-label').textContent = labels[role];
  document.getElementById('app-title').textContent = titles[role];
  document.querySelectorAll('#app > div > div').forEach(el=>el.classList.add('hidden'));
  if(role==='customer'){
    document.getElementById('customer-app').classList.remove('hidden');
    showCustPage('home');
  } else if(role==='admin'){
    document.getElementById('admin-app').classList.remove('hidden');
    document.getElementById('admin-dashboard').classList.remove('hidden');
  } else if(role==='driver'){
    document.getElementById('driver-app').classList.remove('hidden');
    showPage('driver-dashboard');
  } else if(role==='mitra'){
    document.getElementById('mitra-app').classList.remove('hidden');
    showPage('mitra-dashboard');
  }
}

function goBack() {
  document.getElementById('role-selector').style.display = 'flex';
  document.getElementById('app').style.display = 'none';
  ['customer-app','admin-app','driver-app','mitra-app'].forEach(id=>{
    document.getElementById(id).classList.add('hidden');
  });
}

function showPage(id) {
  const parent = document.getElementById(id).closest('#customer-app,#admin-app,#driver-app,#mitra-app');
  if(parent) {
    parent.querySelectorAll(':scope > div').forEach(el=>{
      if(!el.classList.contains('bottom-nav')&&!el.id.includes('nav')) el.classList.add('hidden');
    });
  }
  document.getElementById(id).classList.remove('hidden');
}

function showCustPage(page) {
  const pages = ['home','orders','rating','profile'];
  pages.forEach(p=>{
    const el = document.getElementById('cust-'+p);
    if(el) el.classList.add('hidden');
  });
  const navMap = {home:'nav-home',orders:'nav-orders',rating:'nav-rating',profile:'nav-profile'};
  document.querySelectorAll('#cust-nav .nav-item').forEach(el=>el.classList.remove('active'));
  if(navMap[page]) {
    const navEl = document.getElementById(navMap[page]);
    if(navEl) navEl.classList.add('active');
  }
  document.getElementById('cust-'+page).classList.remove('hidden');
}

function showAdminPage(tab) {
  ['dashboard','pengguna','pesanan','komplain','laporan'].forEach(t=>{
    const el = document.getElementById('admin-content-'+t);
    if(el) el.classList.add('hidden');
    const btn = document.getElementById('atab-'+t);
    if(btn){btn.className='btn btn-outline btn-sm';btn.style.whiteSpace='nowrap';btn.style.marginTop='0';}
  });
  document.getElementById('admin-content-'+tab).classList.remove('hidden');
  const activeBtn = document.getElementById('atab-'+tab);
  if(activeBtn){activeBtn.className='btn btn-primary btn-sm';activeBtn.style.whiteSpace='nowrap';activeBtn.style.marginTop='0';}
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.opacity = '1';
  setTimeout(()=>t.style.opacity='0', 2500);
}

function sendChatMsg(role) {
  const input = document.getElementById('chat-input-'+role);
  const msg = input.value.trim();
  if(!msg) return;
  const container = input.closest('.page-content').querySelector('.chat-messages');
  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble msg-out';
  bubble.innerHTML = `<div>${msg}</div><div class="msg-time">${new Date().toLocaleTimeString('id',{hour:'2-digit',minute:'2-digit'})} ✓</div>`;
  container.appendChild(bubble);
  input.value = '';
  container.scrollTop = container.scrollHeight;
}

function quickMsg(role, msg) {
  document.getElementById('chat-input-'+role).value = msg;
  sendChatMsg(role);
}

function setRating(type, val) {
  const stars = document.querySelectorAll('#stars-'+type+' span');
  stars.forEach((s,i)=>{
    s.classList.toggle('filled', i<val);
  });
  showToast('Rating '+(type==='laundry'?'laundry':'kurir')+': '+val+'⭐');
}

function updateStatus(btn, status) {
  document.querySelectorAll('.status-btn').forEach(b=>{
    b.style.background='';b.style.color='';b.style.borderColor='';
  });
  btn.style.background = 'var(--blue)';
  btn.style.color = '#fff';
  btn.style.borderColor = 'var(--blue)';
  showToast('Status: '+status+' ✅');
}

// Animate bars
setTimeout(()=>{
  document.querySelectorAll('.bar').forEach((b,i)=>{
    b.style.transition = 'height 0.8s ease '+i*0.1+'s';
  });
},100);
