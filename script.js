/**
 * SEALTECH — JAVASCRIPT KUU
 * Maelezo: Uhuishaji na mwingiliano wa ukurasa wa SealTech
 * Lugha ya maelezo: Kiswahili
 */

// ================================================================
// KUSUBIRI UKURASA UPAKIWE — DOMContentLoaded
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Anzisha kazi zote kuu
  initNavbar();
  initScrollAnimations();
  initCodeTyper();
  initCounters();
  initHamburger();
});

// ================================================================
// NAVBAR — Uhuishaji wa navbar wakati wa kusogeza ukurasa
// ================================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Ongeza class ya "scrolled" pale ukurasa unaposogezwa chini zaidi ya 50px
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

// ================================================================
// HAMBURGER MENU — Menyu ya simu ndogo
// ================================================================
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    // Fungua au funga menyu
    const isOpen = navLinks.classList.toggle('mobile-open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Funga menyu pale mtumiaji anapobonyeza nje
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('mobile-open');
      hamburger.classList.remove('open');
    }
  });

  // Funga menyu pale kiungo kinapobonyezwa
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      hamburger.classList.remove('open');
    });
  });
}

// ================================================================
// SCROLL ANIMATIONS — Vitu vinavyoonekana polepole wakati wa kusogeza
// ================================================================
function initScrollAnimations() {
  // Pata vitu vyote vinavyohitaji uhuishaji
  const animatedElements = document.querySelectorAll('[data-animate]');

  if (!animatedElements.length) return;

  // Sanidi IntersectionObserver — chombo kinachofuatilia vitu vinavyoingia skrini
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-delay') || '0');

        // Subiri muda kidogo kabla ya kuonyesha
        setTimeout(() => {
          el.classList.add('animated');
        }, delay);

        // Acha kufuatilia kipengele baada ya kuonekana
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.15,       // Onyesha pale 15% ya kipengele inaingia skrini
    rootMargin: '0px 0px -60px 0px'  // Pindua kidogo mapema
  });

  // Fuatilia kila kipengele
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// ================================================================
// CODE TYPER — Athari ya kuandika msimbo polepole
// ================================================================
function initCodeTyper() {
  const codeEl = document.getElementById('codeTyper');
  if (!codeEl) return;

  // Msimbo wa mfano wenye rangi za kisintaksia
  // Kila kipande kina aina yake na rangi yake
  const codeLines = [
    { text: '#!/bin/bash', class: 'tok-comment' },
    { text: '# SealTech Deployment Pipeline v2.1', class: 'tok-comment' },
    { text: '', class: '' },
    { text: 'set -euo pipefail', class: 'tok-keyword' },
    { text: '', class: '' },
    { text: 'APP_NAME="sealtech-api"', class: 'tok-variable' },
    { text: 'REGISTRY="registry.sealtech.io"', class: 'tok-variable' },
    { text: 'TAG=$(git rev-parse --short HEAD)', class: 'tok-variable' },
    { text: '', class: '' },
    { text: 'echo "🚀 Building $APP_NAME:$TAG..."', class: 'tok-string' },
    { text: '', class: '' },
    { text: 'docker build \\', class: 'tok-keyword' },
    { text: '  --tag $REGISTRY/$APP_NAME:$TAG \\', class: 'tok-variable' },
    { text: '  --build-arg NODE_ENV=production \\', class: 'tok-variable' },
    { text: '  --cache-from $REGISTRY/$APP_NAME:latest .', class: 'tok-string' },
    { text: '', class: '' },
    { text: 'docker push $REGISTRY/$APP_NAME:$TAG', class: 'tok-function' },
    { text: '', class: '' },
    { text: 'kubectl set image deployment/$APP_NAME \\', class: 'tok-keyword' },
    { text: '  app=$REGISTRY/$APP_NAME:$TAG', class: 'tok-variable' },
    { text: '', class: '' },
    { text: 'echo "✅ Deployed successfully!"', class: 'tok-string' },
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let currentSpan = null;
  let isTyping = false;

  // Futa yote na anzisha upya kila wakati chombo kinapoingia skrini
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !isTyping) {
      isTyping = true;
      typeNextChar();
      observer.disconnect();
    }
  }, { threshold: 0.3 });

  observer.observe(codeEl.closest('.code-window') || codeEl);

  // Kazi ya kuandika herufi moja moja
  function typeNextChar() {
    // Angalia kama tumemaliza mistari yote
    if (lineIndex >= codeLines.length) {
      isTyping = false;
      return;
    }

    const line = codeLines[lineIndex];

    // Mstari tupu — ongeza tu nafasi mpya
    if (line.text === '') {
      const br = document.createTextNode('\n');
      codeEl.appendChild(br);
      lineIndex++;
      charIndex = 0;
      currentSpan = null;
      setTimeout(typeNextChar, 50);
      return;
    }

    // Unda span mpya kwa mstari mpya
    if (charIndex === 0) {
      currentSpan = document.createElement('span');
      if (line.class) currentSpan.className = line.class;
      codeEl.appendChild(currentSpan);
    }

    // Ongeza herufi inayofuata
    if (charIndex < line.text.length) {
      currentSpan.textContent += line.text[charIndex];
      charIndex++;

      // Kasi tofauti kwa aina tofauti za herufi
      const char = line.text[charIndex - 1];
      let delay = 35;
      if (char === ' ') delay = 15;
      if (char === '\n') delay = 100;
      if (Math.random() < 0.1) delay += 50; // Kumbuka kidogo bila mpangilio

      setTimeout(typeNextChar, delay);
    } else {
      // Mstari umeisha — anza mstari mpya
      const br = document.createTextNode('\n');
      codeEl.appendChild(br);
      lineIndex++;
      charIndex = 0;
      currentSpan = null;
      setTimeout(typeNextChar, 80); // Pumzika kati ya mistari
    }
  }
}

// ================================================================
// COUNTER ANIMATION — Nambari zinazohesabu
// ================================================================
function initCounters() {
  const statNums = document.querySelectorAll('.stat-num');
  if (!statNums.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => observer.observe(el));
}

// Hesabu nambari polepole hadi thamani yake
function animateCounter(el) {
  const originalText = el.textContent.trim();

  // Toa nambari kutoka kwa maandishi (k.m. "120+" → 120, "98%" → 98)
  const numMatch = originalText.match(/\d+/);
  if (!numMatch) return;

  const target = parseInt(numMatch[0]);
  const prefix = '';
  const suffix = originalText.replace(/\d+/, '');

  let current = 0;
  const duration = 1500; // ms
  const steps = 50;
  const increment = target / steps;
  const interval = duration / steps;

  // Anza kuhesabu
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, interval);
}

// ================================================================
// SMOOTH SCROLL — Usogezaji laini kwa viungo vya ndani
// ================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    // Hesabu nafasi ya navbar
    const navbar = document.getElementById('navbar');
    const navHeight = navbar ? navbar.offsetHeight : 80;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
  });
});

// ================================================================
// MICRO-INTERACTIONS — Mwingiliano mdogo wa kuchekesha
// ================================================================

// Ongeza athari ya ripple kwenye vitufe vyote vya msingi
document.querySelectorAll('.btn-primary, .btn-white').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Unda duara la ripple mahali ambapo mtumiaji alibonyeza
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255,255,255,0.3);
      transform: translate(-50%, -50%);
      animation: rippleEffect 0.6s ease-out forwards;
      pointer-events: none;
      z-index: 10;
    `;

    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);

    // Futa ripple baada ya muda
    setTimeout(() => ripple.remove(), 700);
  });
});

// Ongeza CSS kwa ripple kama haipo tayari
if (!document.getElementById('rippleStyle')) {
  const style = document.createElement('style');
  style.id = 'rippleStyle';
  style.textContent = `
    @keyframes rippleEffect {
      to {
        width: 300px;
        height: 300px;
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// ================================================================
// PARALLAX KIDOGO — Uhuishaji wa mandharinyuma
// ================================================================
function initParallax() {
  const blobs = document.querySelectorAll('.blob');
  if (!blobs.length) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Sogeza kila blob kwa kasi tofauti
        blobs.forEach((blob, i) => {
          const speed = 0.05 + (i * 0.03);
          blob.style.transform = `translateY(${scrollY * speed}px)`;
        });

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// Anzisha parallax
initParallax();

// ================================================================
// ACTIVE NAV LINK — Onyesha sehemu iliyopo skrini kwenye menyu
// ================================================================
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        // Ondoa hali ya sasa kutoka kwa viungo vyote
        navLinks.forEach(link => link.classList.remove('active'));

        // Ongeza hali ya sasa kwa kiungo kinachofanana
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, {
    threshold: 0.4,
    rootMargin: '-100px 0px -40% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

// Ongeza hali ya "active" kwa CSS
const activeStyle = document.createElement('style');
activeStyle.textContent = `
  .nav-links a.active {
    color: var(--primary) !important;
  }
  .nav-links a.active::after {
    transform: translateX(-50%) scaleX(1) !important;
  }
`;
document.head.appendChild(activeStyle);

initActiveNavLinks();

// ================================================================
// TECH BADGES HOVER — Kusimamisha mzunguko kwa kila badge
// ================================================================
const techTrack = document.getElementById('techTrack');
if (techTrack) {
  techTrack.addEventListener('mouseenter', () => {
    techTrack.style.animationPlayState = 'paused';
  });

  techTrack.addEventListener('mouseleave', () => {
    techTrack.style.animationPlayState = 'running';
  });
}

// ================================================================
// PORTFOLIO CARDS — Kuingiliana kwa kadi za portfolio
// ================================================================
document.querySelectorAll('.portfolio-card').forEach(card => {
  const overlay = card.querySelector('.portfolio-overlay');
  const btn = card.querySelector('.overlay-btn');

  if (!overlay || !btn) return;

  // Hakikisha kitufe kina uhuishaji mzuri zaidi
  card.addEventListener('mouseenter', () => {
    btn.style.transitionDelay = '0.05s';
  });

  card.addEventListener('mouseleave', () => {
    btn.style.transitionDelay = '0s';
  });
});

// ================================================================
// FLOATING SHAPES — Maumbo yanayoelea kwenye hero
// ================================================================
function createFloatingShapes() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  // Unda maumbo madogo yanayoelea
  const shapes = [
    { size: 6, top: '20%', left: '10%', delay: 0, duration: 8 },
    { size: 4, top: '60%', left: '85%', delay: 2, duration: 10 },
    { size: 8, top: '80%', left: '20%', delay: 1, duration: 7 },
    { size: 5, top: '35%', left: '75%', delay: 3, duration: 9 },
    { size: 3, top: '15%', left: '60%', delay: 0.5, duration: 11 },
  ];

  shapes.forEach(s => {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: absolute;
      width: ${s.size}px;
      height: ${s.size}px;
      top: ${s.top};
      left: ${s.left};
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(37,99,235,0.4), rgba(6,182,212,0.3));
      animation: shapeDrift ${s.duration}s ease-in-out infinite ${s.delay}s;
      pointer-events: none;
      z-index: 0;
    `;
    heroBg.appendChild(dot);
  });

  // Ongeza CSS kwa maumbo yanayoelea
  if (!document.getElementById('shapeStyle')) {
    const style = document.createElement('style');
    style.id = 'shapeStyle';
    style.textContent = `
      @keyframes shapeDrift {
        0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
        25% { transform: translate(15px, -20px) rotate(90deg); opacity: 0.8; }
        50% { transform: translate(-10px, 15px) rotate(180deg); opacity: 0.4; }
        75% { transform: translate(20px, 5px) rotate(270deg); opacity: 0.7; }
      }
    `;
    document.head.appendChild(style);
  }
}

createFloatingShapes();

// ================================================================
// CONSOLE MESSAGE — Ujumbe kwa wasanidi wanaokagua console
// ================================================================
console.log('%c 🦭 SealTech ', 'background: linear-gradient(135deg, #2563EB, #06B6D4); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: bold;');
console.log('%c Built with passion by the SealTech engineering team ', 'color: #2563EB; font-size: 12px;');
console.log('%c Interested in working with us? hello@sealtech.io ', 'color: #64748B; font-size: 11px;');
