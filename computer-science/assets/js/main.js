/* ============================================================
   SAP LANDSCAPE — SHARED JS
   Mobile nav, scroll-reveal, active-link, tooltips,
   + v2: reading progress, dark-mode toggle, site-wide search,
         last-updated stamp.
   No dependencies. Loads on every page.
   ============================================================ */
(function () {
  'use strict';

  /* ── Resolve the assets base dir from this script's own src ──
     Works at any folder depth (root, /products/, /by-role/ …). */
  function assetsBase() {
    var s = document.querySelector('script[src$="main.js"]');
    if (!s) return 'assets/';
    return s.src.replace(/js\/main\.js.*$/, ''); // → .../assets/
  }

  /* ── Mobile nav toggle ── */
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var links  = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    // close on link click (mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* ── Active nav link based on current path ── */
  function initActiveLink() {
    var path = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '');
    document.querySelectorAll('.nav-links a[data-section]').forEach(function (a) {
      var sec = a.getAttribute('data-section');
      if (sec && path.indexOf(sec) !== -1) a.classList.add('active');
    });
  }

  /* ── Scroll reveal + stagger for cards ── */
  function initReveal() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (c, i) {
      c.style.animationDelay = (Math.min(i, 12) * 0.05) + 's';
    });
    if (reduce || !('IntersectionObserver' in window)) return;

    var targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.animation = 'fadeUp 0.6s var(--ease) both';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (t) { t.style.opacity = '0'; io.observe(t); });
  }

  /* ── Mobile tap support for tooltips ── */
  function initTips() {
    document.querySelectorAll('.term').forEach(function (t) {
      t.addEventListener('click', function (e) {
        e.stopPropagation();
        document.querySelectorAll('.term.tapped').forEach(function (o) { if (o !== t) o.classList.remove('tapped'); });
        t.classList.toggle('tapped');
      });
    });
    document.addEventListener('click', function () {
      document.querySelectorAll('.term.tapped').forEach(function (o) { o.classList.remove('tapped'); });
    });
  }

  /* ── Reading progress bar ── */
  function initProgress() {
    var bar = document.createElement('div');
    bar.className = 'read-progress';
    document.body.appendChild(bar);
    var ticking = false;
    function update() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop || document.body.scrollTop) / max * 100 : 0;
      bar.style.width = pct + '%';
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ── Dark-mode toggle (the no-FOUC inline head script set the
        initial state; here we just build the button + wire it) ── */
  function applyTheme(t) {
    if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
  }
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  function buildThemeBtn() {
    var btn = document.createElement('button');
    btn.className = 'nav-btn theme-btn';
    btn.type = 'button';
    function paint() {
      var dark = currentTheme() === 'dark';
      btn.innerHTML = dark ? '☀️' : '🌙';
      btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('title', dark ? 'Light mode' : 'Dark mode');
    }
    paint();
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('cs-theme', next); } catch (e) {}
      paint();
    });
    return btn;
  }

  /* ── Site-wide search overlay ── */
  var SEARCH = { idx: null, loaded: false, overlay: null, input: null, results: null, hits: [], active: -1, base: '' };

  function buildSearchBtn() {
    var btn = document.createElement('button');
    btn.className = 'nav-btn search-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Search the guide');
    btn.innerHTML = '🔍 <span class="lbl">Search</span> <span class="kbd">/</span>';
    btn.addEventListener('click', openSearch);
    return btn;
  }

  function buildOverlay() {
    var ov = document.createElement('div');
    ov.className = 'search-overlay';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.setAttribute('aria-label', 'Search the Computer Science guide');
    ov.innerHTML =
      '<div class="search-panel">' +
        '<input class="search-input" type="text" placeholder="Search every page — floors, machines, ideas…" aria-label="Search">' +
        '<div class="search-results"></div>' +
        '<div class="search-foot"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> open</span><span><kbd>esc</kbd> close</span></div>' +
      '</div>';
    document.body.appendChild(ov);
    SEARCH.overlay = ov;
    SEARCH.input = ov.querySelector('.search-input');
    SEARCH.results = ov.querySelector('.search-results');

    ov.addEventListener('click', function (e) { if (e.target === ov) closeSearch(); });
    SEARCH.input.addEventListener('input', runSearch);
    SEARCH.input.addEventListener('keydown', onSearchKey);
  }

  function loadIndex(cb) {
    if (SEARCH.loaded) { cb(); return; }
    fetch(SEARCH.base + 'search-index.json')
      .then(function (r) { return r.json(); })
      .then(function (data) { SEARCH.idx = data; SEARCH.loaded = true; cb(); })
      .catch(function () { SEARCH.idx = []; SEARCH.loaded = true; cb(); });
  }

  function openSearch() {
    if (!SEARCH.overlay) buildOverlay();
    SEARCH.overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    loadIndex(function () { SEARCH.input.focus(); runSearch(); });
  }
  function closeSearch() {
    if (!SEARCH.overlay) return;
    SEARCH.overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function runSearch() {
    var q = (SEARCH.input.value || '').toLowerCase().trim();
    var items = SEARCH.idx || [];
    var matches;
    if (!q) {
      matches = items.slice(0, 8);
    } else {
      matches = items.map(function (it) {
        var hay = (it.t + ' ' + it.d + ' ' + (it.k || '') + ' ' + it.c).toLowerCase();
        var score = 0, pos = hay.indexOf(q);
        if (pos !== -1) score = (it.t.toLowerCase().indexOf(q) !== -1 ? 100 : 30) - pos * 0.01;
        return { it: it, score: score };
      }).filter(function (m) { return m.score > 0; })
        .sort(function (a, b) { return b.score - a.score; })
        .slice(0, 12).map(function (m) { return m.it; });
    }
    SEARCH.hits = matches; SEARCH.active = -1;
    render(q);
  }

  function render(q) {
    var html = '';
    if (!SEARCH.hits.length) {
      html = '<div class="search-empty">No pages match “' + esc(q) + '”. Try “transistor”, “transformer”, or “GPU”.</div>';
    } else {
      SEARCH.hits.forEach(function (it, i) {
        html += '<a class="search-hit" href="' + SEARCH.base.replace(/assets\/$/, '') + it.u + '" data-i="' + i + '">' +
          '<span class="ht">' + esc(it.t) + '</span><span class="hc">' + esc(it.c) + '</span>' +
          '<span class="hd">' + esc(it.d) + '</span></a>';
      });
    }
    SEARCH.results.innerHTML = html;
    SEARCH.results.querySelectorAll('.search-hit').forEach(function (a) {
      a.addEventListener('mousemove', function () { setActive(+a.getAttribute('data-i')); });
    });
  }

  function setActive(i) {
    SEARCH.active = i;
    SEARCH.results.querySelectorAll('.search-hit').forEach(function (a, j) {
      a.classList.toggle('active', j === i);
    });
  }

  function onSearchKey(e) {
    if (e.key === 'Escape') { closeSearch(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(Math.min(SEARCH.active + 1, SEARCH.hits.length - 1)); scrollActive(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(Math.max(SEARCH.active - 1, 0)); scrollActive(); }
    else if (e.key === 'Enter') {
      var i = SEARCH.active >= 0 ? SEARCH.active : 0;
      var a = SEARCH.results.querySelector('.search-hit[data-i="' + i + '"]');
      if (a) window.location.href = a.getAttribute('href');
    }
  }
  function scrollActive() {
    var a = SEARCH.results.querySelector('.search-hit.active');
    if (a) a.scrollIntoView({ block: 'nearest' });
  }
  function esc(s) { return (s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function initSearch() {
    SEARCH.base = assetsBase();
    var inner = document.querySelector('.nav-inner');
    if (!inner) return;
    var util = document.createElement('div');
    util.className = 'nav-util';
    util.appendChild(buildSearchBtn());
    util.appendChild(buildThemeBtn());
    inner.appendChild(util);
    // global shortcut: "/" opens search (unless typing in a field)
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ''))) {
        e.preventDefault(); openSearch();
      }
    });
  }

  /* ── Last-updated stamp into footer ── */
  function initStamp() {
    var note = document.querySelector('.footer-note');
    if (!note || note.querySelector('.last-updated')) return;
    var span = document.createElement('span');
    span.className = 'last-updated';
    span.textContent = 'Last reviewed: June 2026';
    note.appendChild(document.createElement('br'));
    note.appendChild(span);
  }

  function init() {
    initNav(); initActiveLink(); initReveal(); initTips();
    initProgress(); initSearch(); initStamp();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
