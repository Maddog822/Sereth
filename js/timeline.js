/* ==========================================================================
   THE REALM OF SERETH - timeline.js
   The interactive timeline. Events come from data/events.js; categories,
   eras and the calendar names come from data/world.js.

   Two views:
     Track - events laid out by year in one lane per category. Use the zoom
             slider, click a category to hide it, click an event for details.
     List  - the same events as a simple top-to-bottom list (better on phones).
   ========================================================================== */
(function () {
  'use strict';

  window.SERETH_PAGES = window.SERETH_PAGES || {};

  window.SERETH_PAGES.timeline = function (api) {
    const { esc, rich, isVisible, formatYear, linkChips } = api;
    const world = SERETH.world;
    const cats = world.timelineCategories || {};
    const eras = world.eras || [];
    const app = document.getElementById('app');
    document.title = 'Timeline · ' + world.name;

    /* ---------- layout constants (edit to taste) ---------- */
    const LANE_LABEL_W = 120;   // width of the sticky category label
    const RULER_H = 44;         // height of the year ruler
    const ROW_H = 28;           // height of one row of events inside a lane
    const LANE_PAD = 12;        // padding at the top and bottom of a lane
    const END_PAD = 80;         // empty space after the last year

    const events = (SERETH.events || []).filter(isVisible).slice().sort((a, b) => a.year - b.year);
    const state = {
      view: window.innerWidth < 700 ? 'list' : 'track',
      zoom: 0.5,
      shown: new Set(Object.keys(cats)),
      selected: (location.hash.match(/^#ev-(.+)$/) || [])[1] || null
    };
    if (state.selected && !events.some(e => e.id === state.selected)) state.selected = null;

    app.innerHTML =
      '<div class="container">' +
        '<header class="page-head"><h1>Timeline</h1>' +
        '<p class="tagline">' + esc(world.timelineIntro || 'The history of the realm.') + '</p></header>' +
        '<div class="tl-controls">' +
          '<div class="chips" id="tl-cats"></div>' +
          '<label class="zoom" id="tl-zoom-wrap">Zoom <input type="range" id="tl-zoom" min="0.1" max="3" step="0.05" value="' + state.zoom + '"></label>' +
          '<div class="seg" role="group" aria-label="View">' +
            '<button class="btn" type="button" data-view="track">Track</button>' +
            '<button class="btn" type="button" data-view="list">List</button>' +
          '</div>' +
        '</div>' +
        '<div id="tl-body"></div>' +
        '<article class="tl-detail" id="tl-detail" aria-live="polite"></article>' +
      '</div>';

    const $ = s => document.querySelector(s);

    /* ---------- category chips ---------- */
    function drawCats() {
      $('#tl-cats').innerHTML = Object.keys(cats).map(k =>
        '<button class="btn" type="button" data-cat="' + k + '" style="--c:' + cats[k].color + '" aria-pressed="' + state.shown.has(k) + '">' +
        esc(cats[k].label) + '</button>').join('');
    }

    /* ---------- the track view ---------- */
    function drawTrack() {
      const list = events.filter(e => state.shown.has(e.category));
      const years = events.map(e => e.year).concat([0]);
      if (world.currentYear != null) years.push(world.currentYear);
      const minY = Math.floor((Math.min.apply(null, years) - 100) / 100) * 100;
      const maxY = Math.ceil((Math.max.apply(null, years) + 100) / 100) * 100;
      const z = state.zoom;
      const x = y => LANE_LABEL_W + (y - minY) * z;
      const width = Math.round(x(maxY) + END_PAD);

      // Ruler ticks: pick the smallest "nice" step that leaves at least 80px between labels.
      const steps = [10, 20, 25, 50, 100, 200, 250, 500, 1000];
      const step = steps.find(s => s * z >= 80) || 1000;
      let ticks = '';
      for (let y = Math.ceil(minY / step) * step; y <= maxY; y += step) {
        ticks += '<div class="tl-tick" style="left:' + x(y) + 'px">' + esc(formatYear(y)) + '</div>';
      }

      // Era bands along the top of the ruler.
      const eraHtml = eras.map(er => {
        const from = Math.max(er.from == null ? minY : er.from, minY);
        const to = Math.min(er.to == null ? maxY : er.to, maxY);
        return '<div class="tl-era" style="left:' + x(from) + 'px;width:' + Math.max(0, (to - from) * z) + 'px">' + esc(er.name) + '</div>';
      }).join('');

      // Lanes: one per visible category, events stacked into rows so labels don't overlap.
      let top = RULER_H;
      let lanesHtml = '';
      let evHtml = '';
      Object.keys(cats).filter(k => state.shown.has(k)).forEach(k => {
        const inLane = list.filter(e => e.category === k);
        const rowEnds = [];
        const placed = inLane.map(e => {
          const px = x(e.year);
          const w = Math.min(200, e.title.length * 7 + 34);
          let r = rowEnds.findIndex(end => end <= px - 6);
          if (r === -1) { r = rowEnds.length; rowEnds.push(0); }
          rowEnds[r] = px + w;
          return { e, px, r };
        });
        const rows = Math.max(1, rowEnds.length);
        const h = LANE_PAD * 2 + rows * ROW_H + 8;
        lanesHtml += '<div class="tl-lane" style="top:' + top + 'px;height:' + h + 'px;width:' + width + 'px;--c:' + cats[k].color + '">' +
          '<span class="tl-lane-label">' + esc(cats[k].label) + '</span></div>';
        placed.forEach(p => {
          evHtml += '<button class="tl-ev' + (p.e.approx ? ' approx' : '') + (p.e.id === state.selected ? ' sel' : '') + '" type="button" data-id="' + esc(p.e.id) +
            '" style="left:' + p.px + 'px;top:' + (top + LANE_PAD + p.r * ROW_H + 18) + 'px;--c:' + cats[k].color + '"' +
            ' aria-label="' + esc(formatYear(p.e.year, p.e.approx) + ': ' + p.e.title) + '">' +
            '<i class="dot"></i><span>' + esc(p.e.title) + '</span></button>';
        });
        top += h;
      });
      if (!lanesHtml) { top += 60; lanesHtml = '<p class="dim" style="position:absolute;left:16px;top:' + (RULER_H + 16) + 'px">Turn on at least one category above.</p>'; }

      const now = world.currentYear != null
        ? '<div class="tl-now" style="left:' + x(world.currentYear) + 'px;height:' + (top - RULER_H) + 'px"><span>' + esc(world.currentYearLabel || 'Present day') + '</span></div>'
        : '';

      $('#tl-body').innerHTML =
        '<div class="tl-scroll" id="tl-scroll"><div class="tl-canvas" style="width:' + width + 'px;height:' + (top + 12) + 'px">' +
        '<div class="tl-ruler" style="width:' + width + 'px">' + eraHtml + ticks + '</div>' + lanesHtml + now + evHtml +
        '</div></div>' +
        '<p class="dim" style="font-size:.85rem;margin-top:.5rem">Hollow dots are approximate dates. Scroll sideways to travel through time.</p>';
    }

    /* ---------- the list view ---------- */
    function drawList() {
      const list = events.filter(e => state.shown.has(e.category));
      $('#tl-body').innerHTML = list.length
        ? '<ol class="tl-list">' + list.map(e => {
            const c = cats[e.category] || { label: e.category, color: 'var(--accent)' };
            return '<li id="ev-' + esc(e.id) + '" style="--c:' + c.color + '">' +
              '<div class="yr">' + esc(formatYear(e.year, e.approx)) + '</div>' +
              '<div><h3>' + esc(e.title) + (e.secret ? ' <span class="dm-tag">DM</span>' : '') + '</h3>' +
              '<div class="chips" style="margin-bottom:.5rem"><span class="chip cat-chip">' + esc(c.label) + '</span></div>' +
              rich(e.summary || '') + (e.links && e.links.length ? linkChips(e.links) : '') + '</div></li>';
          }).join('') + '</ol>'
        : '<p class="notice">Turn on at least one category above.</p>';
    }

    /* ---------- detail panel (track view) ---------- */
    function drawDetail() {
      const box = $('#tl-detail');
      if (state.view === 'list') { box.hidden = true; return; }
      box.hidden = false;
      const e = events.find(x => x.id === state.selected);
      if (!e) {
        box.innerHTML = '<p class="dim">Select an event on the track to read about it.</p>';
        return;
      }
      const c = cats[e.category] || { label: e.category, color: 'var(--accent)' };
      box.innerHTML =
        '<div class="when" style="--c:' + c.color + '"><strong>' + esc(formatYear(e.year, e.approx)) + '</strong>' +
        '<span class="chip cat-chip">' + esc(c.label) + '</span>' +
        (e.secret ? '<span class="dm-tag">DM</span>' : '') + '</div>' +
        '<h2>' + esc(e.title) + '</h2>' + rich(e.summary || '') +
        (e.links && e.links.length ? linkChips(e.links) : '');
    }

    /* ---------- draw everything ---------- */
    function draw() {
      drawCats();
      document.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('on', b.dataset.view === state.view));
      $('#tl-zoom-wrap').hidden = state.view !== 'track';
      if (state.view === 'track') drawTrack(); else drawList();
      drawDetail();
    }

    $('#tl-cats').addEventListener('click', ev => {
      const b = ev.target.closest('[data-cat]'); if (!b) return;
      const k = b.dataset.cat;
      if (state.shown.has(k)) state.shown.delete(k); else state.shown.add(k);
      draw();
    });
    $('#tl-zoom').addEventListener('input', ev => {
      const sc = $('#tl-scroll');
      const before = sc ? sc.scrollLeft / state.zoom : 0;   // keep roughly the same place in view
      state.zoom = parseFloat(ev.target.value);
      drawTrack();
      const sc2 = $('#tl-scroll'); if (sc2) sc2.scrollLeft = before * state.zoom;
    });
    document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => { state.view = b.dataset.view; draw(); }));
    $('#tl-body').addEventListener('click', ev => {
      const b = ev.target.closest('.tl-ev'); if (!b) return;
      state.selected = b.dataset.id;
      try { history.replaceState(null, '', '#ev-' + state.selected); } catch (e) { /* ignore */ }
      document.querySelectorAll('.tl-ev').forEach(x => x.classList.toggle('sel', x === b));
      drawDetail();
    });

    draw();
  };
})();
