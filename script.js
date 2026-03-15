/* ============================================================
   MOHAMED NIHAL — PORTFOLIO SCRIPTS
   File: script.js
   ============================================================ */

/* ─── CUSTOM CURSOR ──────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';

  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';

  requestAnimationFrame(animateCursor);
}

animateCursor();

/* Cursor grow effect on interactive elements */
document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width   = '20px';
    cursor.style.height  = '20px';
    cursor.style.opacity = '0.5';
    ring.style.width     = '52px';
    ring.style.height    = '52px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width   = '12px';
    cursor.style.height  = '12px';
    cursor.style.opacity = '1';
    ring.style.width     = '36px';
    ring.style.height    = '36px';
  });
});

/* ─── NAVBAR — SCROLL BEHAVIOUR ─────────────────────────── */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ─── HAMBURGER MENU ─────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* Close menu when any nav link is clicked */
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/* ─── SCROLL REVEAL ──────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ─── SKILL BAR ANIMATION ────────────────────────────────── */
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const pct  = entry.target.dataset.pct;
      const fill = entry.target.querySelector('.skill-bar-fill');
      fill.style.width = pct + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-bar-item').forEach(el => {
  barObserver.observe(el);
});

/* ─── CONTACT FORM ───────────────────────────────────────── */
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const note = document.getElementById('formNote');
  const btn  = this.querySelector('.form-submit');
  const form = this;

  btn.textContent  = 'Sending...';
  btn.disabled     = true;
  note.textContent = '';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      note.style.color = 'var(--accent)';
      note.textContent = "✓ Message sent! I'll get back to you within 24 hours.";
      form.reset();
    } else {
      note.style.color = '#ff6b6b';
      note.textContent = '✗ Something went wrong. Please email me directly.';
    }
  } catch (error) {
    note.style.color = '#ff6b6b';
    note.textContent = '✗ Network error. Please try again.';
  }

  btn.textContent = 'Send Message →';
  btn.disabled    = false;
});
