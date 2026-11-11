/* Root River Hardwoods — site behaviour (no dependencies) */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     Smart topbar
     - At the top it sits in the page flow and scrolls away with the content.
     - Scrolling up re-reveals it, sliding down into a fixed (sticky) position.
     - Scrolling down again slides it back out.
     - Small movements (a tap, a thumb wobble) are ignored: the direction has
       to be held for a few pixels before the bar reacts.
     ------------------------------------------------------------------------ */
  var header = document.querySelector('.site-header');
  if (header) {
    var TOLERANCE_UP = 10;   // px of continuous upward scroll before revealing
    var TOLERANCE_DOWN = 16; // px of continuous downward scroll before hiding
    var state = 'top';       // 'top' | 'pinned' | 'hidden'
    var lastY = Math.max(0, window.scrollY);
    var travel = 0;          // signed distance scrolled in the current direction
    var ticking = false;

    var setState = function (next, animate) {
      if (next === state) return;
      if (!animate) header.classList.add('no-anim');
      header.classList.toggle('is-fixed', next !== 'top');
      header.classList.toggle('is-hidden', next === 'hidden');
      state = next;
      if (!animate) {
        void header.offsetHeight; // commit the jump before re-enabling transitions
        header.classList.remove('no-anim');
      }
    };

    var update = function () {
      ticking = false;
      var y = Math.max(0, window.scrollY); // ignore iOS rubber-band overscroll
      var dy = y - lastY;
      lastY = y;

      // Back at the very top: return to the in-flow bar. On the home page the
      // background colour fades out here via its CSS transition.
      if (y <= 1) {
        travel = 0;
        setState('top', true);
        return;
      }

      // In flow: let it scroll away naturally. Once it is fully off-screen,
      // swap it (invisibly) to the fixed+hidden state so it can slide back in.
      if (state === 'top') {
        if (y >= header.offsetHeight) setState('hidden', false);
        return;
      }

      // Keep the bar while its menu is open.
      if (header.classList.contains('is-open')) return;

      if (dy === 0) return;
      if ((dy > 0) !== (travel > 0)) travel = 0; // direction changed: restart
      travel += dy;

      if (state === 'hidden' && travel <= -TOLERANCE_UP) {
        setState('pinned', true);
        travel = 0;
      } else if (state === 'pinned' && travel >= TOLERANCE_DOWN) {
        setState('hidden', true);
        travel = 0;
      }
    };

    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });

    // Keyboard users tabbing into a hidden bar should see it.
    header.addEventListener('focusin', function () {
      if (state === 'hidden') setState('pinned', true);
    });

    update();

    /* Mobile menu */
    var toggle = header.querySelector('.menu-toggle');
    if (toggle) {
      var setOpen = function (open) {
        header.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      };
      toggle.addEventListener('click', function () {
        setOpen(!header.classList.contains('is-open'));
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && header.classList.contains('is-open')) {
          setOpen(false);
          toggle.focus();
        }
      });
      header.querySelectorAll('.nav a').forEach(function (link) {
        link.addEventListener('click', function () { setOpen(false); });
      });
    }
  }

  /* ------------------------------------------------------------------------
     Slideshows — gentle crossfade, staggered so neighbours don't flip together
     ------------------------------------------------------------------------ */
  document.querySelectorAll('[data-slideshow]').forEach(function (show, index) {
    var slides = show.querySelectorAll('.slideshow__slide');
    if (slides.length < 2 || reduceMotion) return;
    var current = 0;
    slides.forEach(function (s, i) { if (s.classList.contains('is-active')) current = i; });

    var advance = function () {
      if (document.hidden) return;
      slides[current].classList.remove('is-active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('is-active');
    };
    window.setTimeout(function () {
      window.setInterval(advance, 5000);
    }, index * 1300);
  });
})();
