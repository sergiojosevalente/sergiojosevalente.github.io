// Small enhancements only: the page works without JavaScript.
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  // Theme: auto (system) until the visitor picks one.
  var themeBtn = document.getElementById('theme');
  function isDark() {
    var t = root.dataset.theme;
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  themeBtn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Mobile menu.
  var menu = document.getElementById('menu');
  var menuBtn = document.getElementById('menu-btn');
  menuBtn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Nav border, back-to-top button.
  var nav = document.querySelector('.nav');
  var toTop = document.getElementById('to-top');
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle('scrolled', y > 8);
    toTop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal sections as they scroll into view, and highlight the menu item.
  var reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveal.forEach(function (el) { io.observe(el); });

    var links = {};
    menu.querySelectorAll('a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = links[en.target.id];
        if (a && en.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove('active'); });
          a.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) spy.observe(s);
    });
  } else {
    reveal.forEach(function (el) { el.classList.add('in'); });
  }

  // Project filter; "All" shows the first few until "Show all" is pressed.
  var chips = document.querySelectorAll('.filters .chip');
  var cards = document.querySelectorAll('#project-list .card');
  var moreBtn = document.getElementById('more-projects');
  var FIRST = 9;
  var filter = 'all';
  var expanded = false;
  function applyFilter() {
    var shown = 0;
    var total = 0;
    cards.forEach(function (card) {
      var match = filter === 'all' || card.dataset.kind === filter;
      if (match) total++;
      var visible = match && (expanded || filter !== 'all' || shown < FIRST);
      if (visible) shown++;
      card.hidden = !visible;
      if (visible) card.classList.add('in');
    });
    moreBtn.parentElement.hidden = filter !== 'all' || expanded || total <= FIRST;
    moreBtn.textContent = window.i18n ? window.i18n.t('Show all {n} projects', { n: total }) : 'Show all ' + total + ' projects';
  }
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      filter = chip.dataset.filter;
      chips.forEach(function (c) { c.classList.toggle('active', c === chip); });
      applyFilter();
    });
  });
  moreBtn.addEventListener('click', function () {
    expanded = true;
    applyFilter();
  });
  applyFilter();
  document.addEventListener('langchange', applyFilter);

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
