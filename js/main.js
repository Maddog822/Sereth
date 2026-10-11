/* ==========================================================================
   THE REALM OF SERETH - main.js
   Loads the data files, builds the header, and draws each page from the
   templates in js/schemas.js. You rarely need to edit this file; content
   lives in /data and page layouts live in js/schemas.js.
   ========================================================================== */
(function () {
  'use strict';

  /* ======================================================================
     1. SETTINGS YOU MAY WANT TO EDIT
     ====================================================================== */

  // Every data file the site loads. Adding a new data file? List it here.
  const DATA_FILES = [
    'data/world.js',
    'data/nations.js',
    'data/factions.js',
    'data/npcs.js',
    'data/gods.js',
    'data/locations.js',
    'data/arcs.js',
    'data/events.js'
  ];

  // The "DM view" button reveals secret entries and notes. This hides things
  // from casual players, but it is NOT security: anyone can read the files in
  // your repository. Keep truly dangerous spoilers out of public repos.
  const SHOW_DM_TOGGLE = true;

  /* ======================================================================
     2. SETUP
     ====================================================================== */

  window.SERETH = window.SERETH || {};
  window.SERETH_PAGES = window.SERETH_PAGES || {};

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  const params = new URLSearchParams(location.search);
  if (params.get('dm') === '1') store.set('sereth-dm', '1');
  if (params.get('dm') === '0') store.set('sereth-dm', '0');

  const DM = store.get('sereth-dm') === '1';
  let SCHEMAS = {};
  const INDEX = {};   // id -> { type, entry, blob }

  const $ = (sel, el) => (el || document).querySelector(sel);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const isVisible = entry => DM || !entry.secret;

  function entryUrl(hit) {
    return SCHEMAS[hit.type].file + '?id=' + encodeURIComponent(hit.entry.id);
  }

  /* ======================================================================
     3. TEXT HELPERS ([[links]], **bold**, paragraphs)
     ====================================================================== */

  function inline(raw) {
    let h = esc(raw);
    h = h.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/gi, (m, id, label) => {
      const hit = INDEX[id.toLowerCase()];
      if (!hit || !isVisible(hit.entry)) return label || 'unknown';
      return '<a class="xref" href="' + entryUrl(hit) + '">' + (label || esc(hit.entry.name)) + '</a>';
    });
    h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return h;
  }

  function rich(raw) {
    return String(raw).split(/\n\s*\n/).map(p => '<p>' + inline(p.trim()) + '</p>').join('');
  }

  function formatYear(y, approx) {
    const cal = (SERETH.world && SERETH.world.calendar) || {};
    const pos = cal.positive || 'ES';
    const neg = cal.negative || 'BES';
    const s = y < 0 ? Math.abs(y).toLocaleString() + ' ' + neg : pos + ' ' + y.toLocaleString();
    return approx ? '~' + s : s;
  }

  function linkChips(ids) {
    const out = ids.map(id => {
      const hit = INDEX[String(id).toLowerCase()];
      if (!hit) return '<span class="chip">' + esc(id) + '</span>';
      if (!isVisible(hit.entry)) return '';
      return '<a class="chip" href="' + entryUrl(hit) + '">' + esc(hit.entry.name) + '</a>';
    }).join('');
    return '<div class="chips">' + out + '</div>';
  }

  function tableHTML(rows, cols) {
    const head = '<tr>' + cols.map(c => '<th>' + esc(c.label) + '</th>').join('') + '</tr>';
    const body = rows.map(r =>
      '<tr>' + cols.map(c => '<td>' + inline(r[c.key] == null ? '' : r[c.key]) + '</td>').join('') + '</tr>'
    ).join('');
    return '<div class="table-wrap"><table><thead>' + head + '</thead><tbody>' + body + '</tbody></table></div>';
  }

  /* ======================================================================
     4. INDEX (used by links, search and "Mentioned in")
     ====================================================================== */

  function buildIndex() {
    Object.keys(SCHEMAS).forEach(type => {
      (SERETH[type] || []).forEach(entry => {
        const id = String(entry.id || '').toLowerCase();
        if (!id) { console.warn('[Sereth] An entry in ' + type + ' has no id:', entry); return; }
        if (INDEX[id]) console.warn('[Sereth] Duplicate id "' + id + '" in ' + type);
        const pub = Object.assign({}, entry);
        delete pub.dm; delete pub.questions;
        INDEX[id] = { type, entry, blob: JSON.stringify(pub).toLowerCase() };
      });
    });
  }

  /* ======================================================================
     5. HEADER, FOOTER, SEARCH
     ====================================================================== */

  function renderChrome() {
    const page = document.body.dataset.page;
    const world = SERETH.world || { name: 'The Realm of Sereth' };
    const nav = [{ label: 'Home', href: 'index.html', page: 'home' }]
      .concat(Object.keys(SCHEMAS).map(k => ({ label: SCHEMAS[k].plural, href: SCHEMAS[k].file, page: k })))
      .concat([{ label: 'Timeline', href: 'timeline.html', page: 'timeline' }]);

    const dmBtn = SHOW_DM_TOGGLE
      ? '<button class="btn' + (DM ? ' on' : '') + '" id="dm-toggle" type="button" aria-pressed="' + DM + '">DM view</button>'
      : '';

    const header = $('#site-header');
    if (header) {
      header.className = 'site-header';
      header.innerHTML =
        (DM ? '<div class="dm-banner">DM view is on. Secret entries and notes are visible. <a href="#" id="dm-off">Turn off</a></div>' : '') +
        '<div class="header-inner">' +
          '<a class="brand" href="index.html">' + esc(world.name) + '</a>' +
          '<button class="btn menu-btn" id="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
          '<nav class="site-nav" id="site-nav" aria-label="Main">' +
            nav.map(n => '<a href="' + n.href + '"' + (n.page === page ? ' aria-current="page"' : '') + '>' + esc(n.label) + '</a>').join('') +
          '</nav>' +
          '<div class="tools">' +
            '<div class="search-wrap"><input type="search" id="search" placeholder="Search the realm" aria-label="Search" autocomplete="off">' +
            '<ul class="search-results" id="search-results" hidden></ul></div>' +
            dmBtn +
          '</div>' +
        '</div>';
    }
    const footer = $('#site-footer');
    if (footer) {
      footer.className = 'site-footer';
      footer.textContent = world.name + (world.footer ? ' · ' + world.footer : '');
    }

    const menuBtn = $('#menu-btn');
    if (menuBtn) menuBtn.addEventListener('click', () => {
      const open = $('#site-nav').classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });

    const setDm = on => { store.set('sereth-dm', on ? '1' : '0'); location.reload(); };
    const dmToggle = $('#dm-toggle');
    if (dmToggle) dmToggle.addEventListener('click', () => setDm(!DM));
    const dmOff = $('#dm-off');
    if (dmOff) dmOff.addEventListener('click', e => { e.preventDefault(); setDm(false); });

    setupSearch();
  }

  function setupSearch() {
    const input = $('#search'), box = $('#search-results');
    if (!input) return;
    const run = () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) { box.hidden = true; return; }
      const hits = Object.keys(INDEX).map(id => INDEX[id]).filter(h => {
        if (!isVisible(h.entry)) return false;
        const e = h.entry;
        const hay = [e.name, e.tagline, (e.tags || []).join(' '), (e.aliases || []).join(' ')].join(' ').toLowerCase();
        return hay.indexOf(q) !== -1;
      }).slice(0, 8);
      box.innerHTML = hits.length
        ? hits.map(h => '<li><a href="' + entryUrl(h) + '"><span>' + esc(h.entry.name) + '</span><span class="kind">' + esc(SCHEMAS[h.type].singular) + '</span></a></li>').join('')
        : '<li class="dim" style="padding:.4rem .6rem">No matches</li>';
      box.hidden = false;
    };
    input.addEventListener('input', run);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') { const a = $('a', box); if (a) location.href = a.href; }
      if (e.key === 'Escape') { box.hidden = true; }
    });
    document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) box.hidden = true; });
  }

  /* ======================================================================
     6. ENTRY PAGES (detail view)
     ====================================================================== */

  function fieldHTML(entry, f) {
    if (f.dm && !DM) return '';
    const v = entry[f.key];
    const empty = v == null || v === '' || (Array.isArray(v) && v.length === 0);
    if (empty && !DM) return '';
    const cls = (f.dm ? ' dm-only' : '') + (empty ? ' empty' : '');
    const label = esc(f.label) + (f.dm ? ' <span class="dm-tag">DM</span>' : '');
    let body;
    if (empty) body = '<span class="dim">Not written yet</span>';
    else if (f.type === 'list') body = '<ul>' + v.map(x => '<li>' + inline(x) + '</li>').join('') + '</ul>';
    else if (f.type === 'links') body = linkChips(v);
    else if (f.type === 'pill') body = '<span class="pill" data-v="' + esc(String(v).toLowerCase()) + '">' + esc(v) + '</span>';
    else if (f.type === 'table') body = tableHTML(v, f.cols);
    else body = rich(v);
    return '<div class="field' + cls + '"><dt>' + label + '</dt><dd>' + body + '</dd></div>';
  }

  function sectionHTML(entry, sec, idx) {
    if (sec.dm && !DM) return null;
    const filled = sec.fields.filter(f => {
      if (f.dm && !DM) return false;
      const v = entry[f.key];
      return !(v == null || v === '' || (Array.isArray(v) && v.length === 0));
    }).length;
    if (!filled && !DM) return null;
    const dmTag = sec.dm ? ' <span class="dm-tag">DM</span>' : '';
    const id = 'sec-' + idx;
    const inner = filled || sec.dm
      ? '<dl class="fields">' + sec.fields.map(f => fieldHTML(entry, f)).join('') + '</dl>'
      : '<p class="dim">Nothing written yet.</p>';
    return { id, title: sec.title, html: '<section id="' + id + '"><h2>' + esc(sec.title) + dmTag + '</h2>' + inner + '</section>' };
  }

  function renderDetail(type, id) {
    const schema = SCHEMAS[type];
    const app = $('#app');
    const hit = INDEX[String(id).toLowerCase()];
    if (!hit || hit.type !== type || !isVisible(hit.entry)) {
      document.title = 'Not found · ' + SERETH.world.name;
      app.innerHTML = '<div class="container"><p class="crumb"><a href="' + schema.file + '">← All ' + esc(schema.plural) + '</a></p>' +
        '<div class="notice" style="margin-top:1rem">That entry could not be found.</div></div>';
      return;
    }
    const e = hit.entry;
    document.title = e.name + ' · ' + SERETH.world.name;

    const secs = schema.sections.map((s, i) => sectionHTML(e, s, i)).filter(Boolean);
    const toc = secs.length > 1
      ? '<aside class="toc" aria-label="On this page"><h4>On this page</h4>' +
        secs.map(s => '<a href="#' + s.id + '">' + esc(s.title) + '</a>').join('') + '</aside>'
      : '<div class="toc"></div>';

    const mentions = Object.keys(INDEX).map(k => INDEX[k]).filter(h =>
      h.entry !== e && isVisible(h.entry) && h.blob.indexOf('[[' + String(e.id).toLowerCase()) !== -1);
    const backlinks = mentions.length
      ? '<div class="backlinks"><h3>Mentioned in</h3>' + linkChips(mentions.map(h => h.entry.id)) + '</div>'
      : '';

    const tags = (e.tags || []).map(t => '<span class="chip">' + esc(t) + '</span>').join('');
    app.innerHTML =
      '<div class="container">' +
        '<p class="crumb"><a href="' + schema.file + '">← All ' + esc(schema.plural) + '</a></p>' +
        '<header class="page-head" style="margin-top:.75rem">' +
          '<h1>' + esc(e.name) + (e.secret ? ' <span class="dm-tag">HIDDEN FROM PLAYERS</span>' : '') + '</h1>' +
          (e.tagline ? '<p class="tagline">' + esc(e.tagline) + '</p>' : '') +
          (tags ? '<div class="chips">' + tags + '</div>' : '') +
        '</header>' +
        '<div class="detail">' + toc +
          '<div class="detail-main">' +
            (e.image ? '<img class="hero-img" src="' + esc(e.image) + '" alt="' + esc(e.name) + '">' : '') +
            (e.summary ? '<div class="summary">' + rich(e.summary) + '</div>' : '') +
            secs.map(s => s.html).join('') +
            backlinks +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* ======================================================================
     7. LIST PAGES
     ====================================================================== */

  function renderList(type) {
    const schema = SCHEMAS[type];
    const app = $('#app');
    document.title = schema.plural + ' · ' + SERETH.world.name;
    const items = (SERETH[type] || []).filter(isVisible)
      .slice().sort((a, b) => String(a.name).localeCompare(String(b.name)));

    const fk = schema.filterBy && schema.filterBy.key;
    const asArr = v => Array.isArray(v) ? v : (v ? [v] : []);
const values = fk ? Array.from(new Set(items.flatMap(i => asArr(i[fk])))).sort() : [];

    app.innerHTML =
      '<div class="container">' +
        '<header class="page-head"><h1>' + esc(schema.plural) + '</h1><p class="tagline">' + esc(schema.blurb) + '</p></header>' +
        '<div class="filters">' +
          '<input type="text" id="list-filter" placeholder="Filter ' + esc(schema.plural.toLowerCase()) + '" aria-label="Filter">' +
          (values.length > 1
            ? '<div class="chips" id="list-chips"><button class="btn on" type="button" data-v="">All</button>' +
              values.map(v => '<button class="btn" type="button" data-v="' + esc(v) + '">' + esc(v) + '</button>').join('') + '</div>'
            : '') +
        '</div>' +
        '<div class="grid" id="list-grid"></div>' +
        '<p class="notice" id="list-empty" hidden>Nothing here yet.</p>' +
      '</div>';

    let chipVal = '';
    const draw = () => {
      const q = $('#list-filter').value.trim().toLowerCase();
      const shown = items.filter(i => {
        if (chipVal && !asArr(i[fk]).includes(chipVal)) return false;
        if (!q) return true;
        return [i.name, i.tagline, (i.tags || []).join(' '), (i.aliases || []).join(' ')].join(' ').toLowerCase().indexOf(q) !== -1;
      });
      $('#list-grid').innerHTML = shown.map(i => {
        const meta = (schema.cardMeta || []).map(k => i[k]).filter(v => typeof v === 'string' && v)
          .map(v => '<span class="chip">' + esc(v) + '</span>').join('');
        return '<a class="card" href="' + schema.file + '?id=' + encodeURIComponent(i.id) + '">' +
          (i.image ? '<img class="thumb" src="' + esc(i.image) + '" alt="">' : '') +
          '<h3>' + esc(i.name) + (i.secret ? ' <span class="dm-tag">DM</span>' : '') + '</h3>' +
          (i.tagline ? '<p>' + esc(i.tagline) + '</p>' : '') +
          (meta ? '<div class="chips">' + meta + '</div>' : '') +
          '</a>';
      }).join('');
      $('#list-empty').hidden = shown.length > 0;
    };
    $('#list-filter').addEventListener('input', draw);
    const chips = $('#list-chips');
    if (chips) chips.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      chipVal = b.dataset.v;
      chips.querySelectorAll('.btn').forEach(x => x.classList.toggle('on', x === b));
      draw();
    });
    draw();
  }

  /* ======================================================================
     8. HOME PAGE
     ====================================================================== */

  function renderHome() {
    const w = SERETH.world;
    const app = $('#app');
    document.title = w.name;
    const cards = Object.keys(SCHEMAS).map(k => {
      const n = (SERETH[k] || []).filter(isVisible).length;
      return '<a class="card" href="' + SCHEMAS[k].file + '"><h3>' + esc(SCHEMAS[k].plural) + '</h3><p>' + esc(SCHEMAS[k].blurb) + '</p>' +
        '<span class="count">' + n + (n === 1 ? ' entry' : ' entries') + '</span></a>';
    }).join('') +
      '<a class="card" href="timeline.html"><h3>Timeline</h3><p>The history of the realm, from the age of giants to today.</p>' +
      '<span class="count">' + (SERETH.events || []).filter(isVisible).length + ' events</span></a>';

    const lore = (w.lore || []).filter(isVisible).map((l, i) =>
      '<details class="lore"' + (i === 0 ? ' open' : '') + '><summary>' + esc(l.title) + (l.secret ? ' <span class="dm-tag">DM</span>' : '') + '</summary>' + rich(l.text) + '</details>'
    ).join('');

    const map = w.mapImage
      ? '<div class="map-box"><img src="' + esc(w.mapImage) + '" alt="Map of ' + esc(w.name) + '"></div>'
      : '<div class="map-box"><div class="map-placeholder"><p>The map is not drawn yet.<br>When it is ready, put the image in /images and set <code>mapImage</code> in data/world.js.</p></div></div>';

    app.innerHTML =
      '<div class="container">' +
        '<section class="hero"><h1>' + esc(w.name) + '</h1>' +
          '<p class="tagline">' + esc(w.tagline || '') + '</p>' +
          '<div class="intro">' + (w.intro || []).map(p => '<p>' + inline(p) + '</p>').join('') + '</div></section>' +
        '<h2 class="section-title">Explore</h2><div class="grid">' + cards + '</div>' +
        '<h2 class="section-title">The World</h2>' + map +
        (lore ? '<h2 class="section-title">Lore</h2>' + lore : '') +
      '</div>';
  }

  /* ======================================================================
     9. START
     ====================================================================== */

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error('Could not load ' + src));
      document.head.appendChild(s);
    });
  }

  function boot() {
    SCHEMAS = window.SCHEMAS;
    buildIndex();
    window.SERETH_API = { esc, inline, rich, isVisible, formatYear, linkChips, entryUrl, INDEX, DM };
    renderChrome();

    const page = document.body.dataset.page;
    if (page === 'home') renderHome();
    else if (SCHEMAS[page]) {
      const id = params.get('id');
      if (id) renderDetail(page, id); else renderList(page);
    } else if (window.SERETH_PAGES[page]) window.SERETH_PAGES[page](window.SERETH_API);
  }

  function showError(err) {
    const app = $('#app');
    if (app) app.innerHTML = '<div class="container"><div class="notice"><strong>Something did not load.</strong><br>' + esc(err.message) +
      '<br>Check the file name in the DATA_FILES list at the top of js/main.js, and look for typos in that data file.</div></div>';
    console.error(err);
  }

  Promise.all(['js/schemas.js'].concat(DATA_FILES).map(loadScript)).then(boot).catch(showError);
})();
