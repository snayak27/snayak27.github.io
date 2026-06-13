/* ============================================================
   SAP LANDSCAPE — SHARED JS
   Mobile nav, scroll-reveal, active-link, stagger.
   No dependencies. Loads on every page.
   ============================================================ */
(function () {
  'use strict';

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
    // base stagger so a freshly loaded grid cascades in
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

  function init() { initNav(); initActiveLink(); initReveal(); initTips(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
