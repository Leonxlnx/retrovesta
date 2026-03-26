// App logic — render, filter, search
const SEV = ['instant','common','subtle'];
const SEVC = ['i','c','s'];
const SEVL = ['Instant','Common','Subtle'];

let filter = 'all', catFilter = 'all', query = '';

function render() {
  const m = document.getElementById('m');
  const q = query.toLowerCase();
  let html = '', total = 0, counts = [0,0,0];

  for (const cat of DATA) {
    const items = cat.items.filter(it => {
      if (filter !== 'all' && SEV[it[0]] !== filter) return false;
      if (catFilter !== 'all' && cat.cat !== catFilter) return false;
      if (q && !it[1].toLowerCase().includes(q) && !it[2].toLowerCase().includes(q) && !cat.cat.toLowerCase().includes(q)) return false;
      return true;
    });
    if (!items.length) continue;

    html += `<section class="cs"><div class="ch"><span class="ct">${cat.cat}</span><span class="cc">${items.length} tell${items.length!==1?'s':''}</span></div><div class="tg">`;

    for (const it of items) {
      const [sev, name, desc, pType, pCfg] = it;
      const preview = mkPreview(pType, pCfg);
      const nameH = q ? hl(name, q) : name;
      const descH = q ? hl(desc, q) : desc;
      html += `<div class="ti"><div class="sp ${SEVC[sev]}"></div><div class="tb"><div class="tn">${nameH}</div><div class="td">${descH}</div></div><div class="tp">${preview}</div></div>`;
      counts[sev]++;
      total++;
    }
    html += `</div></section>`;
  }

  if (!total) html = `<div class="empty"><p>No tells match your search.</p></div>`;
  m.innerHTML = html;

  document.getElementById('sT').textContent = total;
  document.getElementById('sI').textContent = counts[0];
  document.getElementById('sC').textContent = counts[1];
  document.getElementById('sS').textContent = counts[2];
  document.getElementById('rC').textContent = `Showing ${total} of 200 tells`;
}

function hl(text, q) {
  if (!q) return text;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

// Category filter pills
function buildCatFilters() {
  const cR = document.getElementById('cR');
  const cats = DATA.map(d => d.cat);
  let h = '<span class="fs"></span><button class="fb a" data-c="all">All Categories</button>';
  for (const c of cats) h += `<button class="fb" data-c="${c}">${c.split(' & ')[0]}</button>`;
  cR.innerHTML = h;
  cR.querySelectorAll('.fb').forEach(b => b.addEventListener('click', () => {
    catFilter = b.dataset.c === 'all' ? 'all' : b.dataset.c;
    cR.querySelectorAll('.fb').forEach(x => x.classList.remove('a'));
    b.classList.add('a');
    render();
  }));
}

// Severity filters
document.getElementById('fR').querySelectorAll('.fb[data-f]').forEach(b => {
  b.addEventListener('click', () => {
    filter = b.dataset.f;
    document.getElementById('fR').querySelectorAll('.fb[data-f]').forEach(x => {
      x.classList.remove('a','ar','ay','ag');
    });
    if (filter === 'all') b.classList.add('a');
    else if (filter === 'instant') b.classList.add('ar');
    else if (filter === 'common') b.classList.add('ay');
    else b.classList.add('ag');
    render();
  });
});

// Search
const si = document.getElementById('q');
si.addEventListener('input', e => { query = e.target.value; render(); });
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement !== si) { e.preventDefault(); si.focus(); }
  if (e.key === 'Escape') { si.value = ''; query = ''; si.blur(); render(); }
});

buildCatFilters();
render();
