/* Shared behavior for ORA inner pages */
const $ = id => document.getElementById(id);

function initAmbientCanvas() {
  const canvas = $('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let particles = [];
  const mouse = { x: -1000, y: -1000 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(60, Math.floor(width * height / 16000));
    particles = Array.from({ length: count }, () => new Particle(true));
  }

  class Particle {
    constructor(initial) {
      this.reset(initial);
    }

    reset(initial) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.r = Math.random() * 1.5 + 0.3;
      this.alpha = 0;
      this.maxAlpha = Math.random() * 0.4 + 0.05;
      this.life = 0;
      this.maxLife = Math.random() * 300 + 150;
    }

    update() {
      this.life++;
      const progress = this.life / this.maxLife;
      this.alpha = progress < 0.1
        ? (progress / 0.1) * this.maxAlpha
        : progress > 0.85
          ? ((1 - progress) / 0.15) * this.maxAlpha
          : this.maxAlpha;

      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance > 0 && distance < 80) {
        const force = (80 - distance) / 80 * 0.4;
        this.vx += (dx / distance) * force;
        this.vy += (dy / distance) * force;
      }

      this.vx *= 0.98;
      this.vy *= 0.98;
      this.x += this.vx;
      this.y += this.vy;
      if (this.life >= this.maxLife) this.reset(false);
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${this.alpha})`;
      ctx.fill();
    }
  }

  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('mousemove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  function frame() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(frame);
  }
  frame();
}

function closeMenu() {
  const menu = $('menu-trigger');
  const links = $('nav-links');
  if (!menu || !links) return;
  menu.classList.remove('active');
  menu.setAttribute('aria-expanded', 'false');
  links.classList.remove('open');
  document.body.classList.remove('menu-open');
}

function initNavigation() {
  window.addEventListener('scroll', () => {
    const navbar = $('navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  document.addEventListener('click', event => {
    const trigger = event.target.closest('#menu-trigger');
    if (trigger) {
      const open = trigger.classList.toggle('active');
      $('nav-links')?.classList.toggle('open', open);
      trigger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
      return;
    }
    if (event.target.closest('#nav-links a')) closeMenu();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initTheme() {
  if (localStorage.getItem('ora-theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  $('theme-toggle')?.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('ora-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('ora-theme', 'light');
    }
  });
}

let toastTimer;
function showToast(text) {
  const toast = $('toast');
  const toastText = $('toast-text');
  if (!toast || !toastText) return;
  toastText.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}
window.showToast = showToast;

function initBackToTop() {
  const topBtn = $('back-to-top');
  if (!topBtn) return;
  window.addEventListener('scroll', () => {
    topBtn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initContactForm() {
  const submit = $('submit-btn');
  if (!submit) return;

  submit.addEventListener('click', () => {
    const fname = $('fname')?.value.trim() || '';
    const lname = $('lname')?.value.trim() || '';
    const email = $('email')?.value.trim() || '';
    const phone = $('phone')?.value.trim() || '';
    const interest = $('interest')?.value.trim() || '';
    const message = $('message')?.value.trim() || '';
    const isAr = document.documentElement.lang === 'ar';

    if (!fname || !message) {
      showToast(isAr ? 'يرجى ملء اسمك ورسالتك' : 'Please fill your name and message');
      return;
    }

    let text = isAr ? '*أورا - استفسار جديد*\n\n' : '*ORA - New Inquiry*\n\n';
    text += isAr ? `الاسم: ${fname} ${lname}\n` : `Name: ${fname} ${lname}\n`;
    if (email) text += isAr ? `البريد الإلكتروني: ${email}\n` : `Email: ${email}\n`;
    if (phone) text += isAr ? `الهاتف: ${phone}\n` : `Phone: ${phone}\n`;
    if (interest) text += isAr ? `الاهتمام: ${interest}\n` : `Interest: ${interest}\n`;
    text += isAr ? `\nالرسالة:\n${message}` : `\nMessage:\n${message}`;

    window.open(`https://wa.me/201005311879?text=${encodeURIComponent(text)}`, '_blank');
    showToast(isAr ? 'يتم فتح واتساب...' : 'Opening WhatsApp...');
  });
}

initTheme();
initAmbientCanvas();
initNavigation();
initReveal();
initBackToTop();
initContactForm();
