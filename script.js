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
  initThemeToggle();
  initNavbar();
  initScrollAnimations();
  initCodeTyper();
  initCounters();
  initHamburger();
  initStartProjectModal();
});

// ================================================================
// THEME TOGGLE — Badilisha Light/Dark mode na kuhifadhi chaguo
// ================================================================
const THEME_STORAGE_KEY = 'sealtech-theme-mode';
const THEME_MODES = ['system', 'light', 'dark'];

function getPreferredThemeMode() {
  try {
    const storedMode = localStorage.getItem(THEME_STORAGE_KEY);
    if (THEME_MODES.includes(storedMode)) return storedMode;
  } catch (_error) {
    // Endelea na "system" ikiwa localStorage imezuiwa
  }
  return 'system';
}

function resolveTheme(mode) {
  if (mode === 'light' || mode === 'dark') return mode;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getNextThemeMode(currentMode) {
  const currentIndex = THEME_MODES.indexOf(currentMode);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  return THEME_MODES[(safeIndex + 1) % THEME_MODES.length];
}

function applyThemeMode(mode) {
  const safeMode = THEME_MODES.includes(mode) ? mode : 'system';
  const resolvedTheme = resolveTheme(safeMode);

  document.documentElement.setAttribute('data-theme', resolvedTheme);
  document.documentElement.setAttribute('data-theme-mode', safeMode);

  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const modeLabels = {
    system: 'System',
    light: 'Light',
    dark: 'Dark'
  };
  const modeIcons = {
    system: '<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="9" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M7 16h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    light: '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3.5" stroke="currentColor" stroke-width="1.6"/><path d="M10 2.5v2.1M10 15.4v2.1M17.5 10h-2.1M4.6 10H2.5M15.3 4.7l-1.5 1.5M6.2 13.8l-1.5 1.5M15.3 15.3l-1.5-1.5M6.2 6.2L4.7 4.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    dark: '<svg viewBox="0 0 20 20" fill="none"><path d="M12.8 2.8a7.2 7.2 0 1 0 4.4 10.6A6.1 6.1 0 0 1 12.8 2.8z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  const label = toggle.querySelector('.theme-toggle-label');
  if (label) label.textContent = modeLabels[safeMode];
  const icon = toggle.querySelector('.theme-toggle-icon');
  if (icon) icon.innerHTML = modeIcons[safeMode];

  toggle.setAttribute('data-mode', safeMode);
  toggle.setAttribute('aria-label', `Theme mode: ${modeLabels[safeMode]}. Click to switch mode.`);
}

function initThemeToggle() {
  applyThemeMode(getPreferredThemeMode());

  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const syncWithSystem = () => {
    if (document.documentElement.getAttribute('data-theme-mode') === 'system') {
      applyThemeMode('system');
    }
  };
  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', syncWithSystem);
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(syncWithSystem);
  }

  toggle.addEventListener('click', () => {
    const currentMode = document.documentElement.getAttribute('data-theme-mode') || 'system';
    const nextMode = getNextThemeMode(currentMode);
    applyThemeMode(nextMode);
    try {
      if (nextMode === 'system') {
        localStorage.removeItem(THEME_STORAGE_KEY);
      } else {
        localStorage.setItem(THEME_STORAGE_KEY, nextMode);
      }
    } catch (_error) {
      // Ukishindwa kuhifadhi, bado mode ibadilike kwenye session hii
    }
  });
}

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
// START PROJECT MODAL — Fungua/funga fomu inayoelea
// ================================================================
function initStartProjectModal() {
  const allModals = document.querySelectorAll('.project-modal');
  if (!allModals.length) return;

  const syncBodyLock = () => {
    const hasOpenModal = Array.from(allModals).some(modal => modal.classList.contains('is-open'));
    document.body.classList.toggle('modal-open', hasOpenModal);
  };

  const closeOthers = (currentModal) => {
    allModals.forEach(modal => {
      if (modal !== currentModal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  };

  const bindModal = ({ modalId, closeId, formId, messageId, triggerSelector, firstInputId, successBuilder }) => {
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeId);
    const form = document.getElementById(formId);
    const message = document.getElementById(messageId);
    const triggers = document.querySelectorAll(triggerSelector);
    const firstInput = document.getElementById(firstInputId);

    if (!modal || !closeBtn || !form || !message || !triggers.length) return;

    const setOpen = (open) => {
      if (open) closeOthers(modal);
      modal.classList.toggle('is-open', open);
      modal.setAttribute('aria-hidden', String(!open));
      if (open && firstInput) {
        setTimeout(() => firstInput.focus(), 30);
      }
      syncBodyLock();
    };

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        setOpen(true);
      });
    });

    closeBtn.addEventListener('click', () => setOpen(false));

    modal.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement && event.target.dataset.modalClose === 'true') {
        setOpen(false);
      }
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = firstInput?.value?.trim() || 'there';
      message.textContent = successBuilder(name);
      form.reset();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        setOpen(false);
      }
    });
  };

  bindModal({
    modalId: 'projectModal',
    closeId: 'projectModalClose',
    formId: 'projectModalForm',
    messageId: 'projectModalMessage',
    triggerSelector: '[data-open-project-form="true"]',
    firstInputId: 'modalFullName',
    successBuilder: (name) => `Thanks ${name}. Your project request was submitted.`
  });

  bindModal({
    modalId: 'callModal',
    closeId: 'callModalClose',
    formId: 'callModalForm',
    messageId: 'callModalMessage',
    triggerSelector: '[data-open-call-form="true"]',
    firstInputId: 'callFullName',
    successBuilder: (name) => `Thanks ${name}. Your call request was submitted.`
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

  // Ongeza CSS kwa maumbo yanayoelea,.
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
// CONSOLE MESSAGE — Ujumbe kwa wasanidi wanaokagua console.
// ================================================================
console.log('%c 🦭 SealTech ', 'background: linear-gradient(135deg, #2563EB, #06B6D4); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: bold;');
console.log('%c Built with passion by the SealTech engineering team ', 'color: #2563EB; font-size: 12px;');
console.log('%c Interested in working with us? hello@sealtech.io ', 'color: #64748B; font-size: 11px;');



/**
 * ================================================================
 * CONTACT.JS — SealTech Contact Page JavaScript
 * ================================================================
 *
 * Inashughulikia:
 *   1. Ramani ya Leaflet.js (Dar es Salaam — OpenStreetMap)
 *   2. Validation ya fomu na uhuishaji wa mafanikio
 *   3. Kihesabu cha herufi za textarea
 *
 * Kutekelezwa: Baada ya DOM kupakia (DOMContentLoaded)
 * ================================================================
 */

'use strict';

// ================================================================
// USANIDI WA RAMANI — Badilisha hapa kwa koordineti zako
// ================================================================
/**
 * ⚠️  HARIRI: Badilisha nambari hizi na koordineti sahihi za ofisi yako.
 *
 *   Jinsi ya kupata koordineti:
 *   1. Fungua maps.google.com
 *   2. Bonyeza-kulia kwenye eneo lako
 *   3. Chagua "What's here?" — koordineti zitaonekana
 *
 *   Mifano ya Dar es Salaam:
 *     CBD (Kivukoni):   lat = -6.8161, lng = 39.2894
 *     Kinondoni:        lat = -6.7924, lng = 39.2083
 *     Msasani / Slipway: lat = -6.7630, lng = 39.2760
 *     Mikocheni:        lat = -6.7710, lng = 39.2370
 *     Kijitonyama:      lat = -6.778713193401908, lng = 39.239894083063476
 */
const MAP_CONFIG = {
  lat:   -6.778713193401908,    // ← HARIRI: Latitudo yako (kaskazini/kusini)
  lng:   39.239894083063476,    // ← HARIRI: Longitudo yako (mashariki/magharibi)
  zoom:  15,         // ← Zoom level (10=mbali, 18=karibu sana)
  label: 'SealTech HQ — Dar es Salaam, Tanzania'  // ← HARIRI: Jina linaloonekana kwenye popup
};


// ================================================================
// KUANZA — Pakia kila kitu baada ya DOM kuwa tayari
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  initContactForm();
  initCharCounter();
});


// ================================================================
// 1. RAMANI YA DAR ES SALAAM — Leaflet.js + OpenStreetMap
// ================================================================
/**
 * Anzisha ramani ya mwingiliano kwenye div#contactMap
 * Inatumia Leaflet.js na tiles za bure za OpenStreetMap.
 * Hakuna API key inayohitajika.
 */
function initMap() {
  const mapEl = document.getElementById('contactMap');

  // Ikiwa kipengele hakipo au Leaflet haijapakiwa, acha
  if (!mapEl || typeof L === 'undefined') {
    console.warn('Contact map: mapEl or Leaflet not found');
    return;
  }

  // ── Unda ramani ──────────────────────────────────────────────
  const map = L.map('contactMap', {
    center:          [MAP_CONFIG.lat, MAP_CONFIG.lng],
    zoom:            MAP_CONFIG.zoom,
    scrollWheelZoom: false,    // Zuia kusogeza kwa gurudumu — vizuri kwa mobile
    zoomControl:     true,
    attributionControl: true,
  });

  // ── Ongeza tiles za OpenStreetMap ────────────────────────────
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  // ── Unda alama ya mahali (custom marker ya SealTech) ──────────
  // Inatumia divIcon badala ya picha ili iwe rahisi kubadilisha
  const markerIcon = L.divIcon({
    className: '', // Ondoa class za chaguo-msingi za Leaflet
    html: `
      <div style="
        position: relative;
        width: 44px;
        height: 44px;
      ">
        <!-- Mwili wa alama (teardrop shape) -->
        <div style="
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid #ffffff;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.5);
          position: absolute;
          top: 0; left: 0;
        "></div>
        <!-- Doa nyeupe ndogo katikati -->
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -60%);
          width: 10px;
          height: 10px;
          background: #ffffff;
          border-radius: 50%;
        "></div>
      </div>`,
    iconSize:    [44, 44],    // Ukubwa wa ikoni
    iconAnchor:  [22, 44],    // Sehemu ya ikoni inayoonyesha mahali halisi
    popupAnchor: [0, -50],    // Wapi popup inaonekana
  });

  // ── Weka alama kwenye ramani ──────────────────────────────────
  const marker = L.marker([MAP_CONFIG.lat, MAP_CONFIG.lng], { icon: markerIcon })
    .addTo(map);

  // ── Popup inaonekana ukibonyeza alama ────────────────────────
  marker.bindPopup(`
    <div style="
      font-family: 'Syne', sans-serif;
      padding: 8px 4px;
      min-width: 200px;
    ">
      <strong style="
        display: block;
        font-size: 0.9rem;
        color: #0F172A;
        margin-bottom: 4px;
      ">${MAP_CONFIG.label}</strong>
      <span style="
        font-size: 0.78rem;
        color: #64748B;
        font-family: 'DM Sans', sans-serif;
      ">Click for directions →</span>
    </div>
  `, {
    maxWidth: 240,
    className: 'sealtech-popup',
  });

  // Fungua popup mara ya kwanza moja kwa moja
  marker.openPopup();

  // ── Sasisisha kiungo cha "Get Directions" ─────────────────────
  // Inabadilisha URL ya Google Maps na koordineti sahihi
  const dirLink = document.getElementById('mapDirectionsLink');
  if (dirLink) {
    dirLink.href = `https://www.google.com/maps/search/?api=1&query=${MAP_CONFIG.lat},${MAP_CONFIG.lng}`;
  }

  // ── Rekebisha ukubwa baada ya ms 600 ─────────────────────────
  // Inahitajika kwa sababu ramani inaweza kupakia kabla ya
  // kontena kuwa na ukubwa sahihi (lazy render issue)
  setTimeout(() => map.invalidateSize(), 600);

  // Pia rekebisha ukubwa ukubwa ukubwa wakati dirisha linapobadilika
  window.addEventListener('resize', () => {
    clearTimeout(window._mapResizeTimer);
    window._mapResizeTimer = setTimeout(() => map.invalidateSize(), 300);
  });
}


// ================================================================
// 2. VALIDATION YA FOMU — Angalia mashamba kabla ya kutuma
// ================================================================
/**
 * Anzisha mfumo wa validation kwa fomu ya mawasiliano.
 *
 * Inashughulikia:
 *   - Mashamba yaliyoachwa wazi (required fields)
 *   - Muundo sahihi wa barua pepe
 *   - Urefu wa chini wa ujumbe (herufi 20)
 *   - Spinner ya kupakia baada ya kutuma
 *   - Kuonyesha ujumbe wa mafanikio
 *   - Kuondoa makosa wakati mtumiaji anaandika
 */
function initContactForm() {
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const successEl = document.getElementById('formSuccess');

  // Ikiwa fomu haipo, acha (si kurasa hii)
  if (!form) return;

  // ── Sikiliza kutumwa kwa fomu ─────────────────────────────────
  form.addEventListener('submit', handleFormSubmit);

  // ── Ondoa makosa mtumiaji anapoandika ────────────────────────
  form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => {
    el.addEventListener('input',  () => clearFieldError(el));
    el.addEventListener('change', () => clearFieldError(el));
  });

  /**
   * Simamia kutumwa kwa fomu
   * @param {SubmitEvent} e
   */
  function handleFormSubmit(e) {
    e.preventDefault();

    // Futa makosa yote ya zamani kabla ya kuangalia upya
    clearAllErrors();

    // Pata vipengele vya mashamba
    const nameEl    = document.getElementById('fullName');
    const emailEl   = document.getElementById('email');
    const projectEl = document.getElementById('projectType');
    const msgEl     = document.getElementById('message');

    let isValid = true;

    // ── Angalia jina ──────────────────────────────────────────
    if (!nameEl.value.trim()) {
      showFieldError(nameEl, 'fullNameError', 'Please enter your full name.');
      isValid = false;
    }

    // ── Angalia barua pepe ────────────────────────────────────
    if (!emailEl.value.trim()) {
      showFieldError(emailEl, 'emailError', 'Please enter your email address.');
      isValid = false;
    } else if (!isValidEmail(emailEl.value.trim())) {
      showFieldError(emailEl, 'emailError', 'Please enter a valid email address (e.g. you@example.com).');
      isValid = false;
    }

    // ── Angalia aina ya mradi ─────────────────────────────────
    if (!projectEl.value) {
      showFieldError(projectEl, 'projectTypeError', 'Please select a project type.');
      isValid = false;
    }

    // ── Angalia ujumbe ────────────────────────────────────────
    if (!msgEl.value.trim()) {
      showFieldError(msgEl, 'messageError', 'Please tell us about your project.');
      isValid = false;
    } else if (msgEl.value.trim().length < 20) {
      showFieldError(msgEl, 'messageError', 'Please provide at least 20 characters.');
      isValid = false;
    }

    // Ikiwa kuna makosa, simama hapa — sogeza juu ya kosa la kwanza
    if (!isValid) {
      const firstError = form.querySelector('.form-input.is-error, .form-select.is-error, .form-textarea.is-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
      return;
    }

    // ── Onyesha spinner ya kupakia ────────────────────────────
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="animation:spin 0.8s linear infinite;flex-shrink:0">
        <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.3)" stroke-width="2.5"/>
        <path d="M12 3a9 9 0 019 9" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
      Sending…`;

    // ── Iga kutuma (2 sekunde) ─────────────────────────────────
    // TODO: Badilisha na fetch() kwa backend yako halisi:
    //   fetch('/api/contact', { method: 'POST', body: new FormData(form) })
    //   .then(r => r.json()).then(showSuccess).catch(showNetworkError);
    setTimeout(() => {
      form.style.opacity = '0';
      form.style.transform = 'translateY(-10px)';
      form.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

      setTimeout(() => {
        form.style.display = 'none';
        successEl.style.display = 'block';
        successEl.style.animation = 'pgnFadeIn 0.4s ease both';
      }, 300);
    }, 2000);
  }
}

/**
 * Onyesha kosa chini ya shamba maalum
 * @param {HTMLElement} input   - Kipengele cha fomu kilichokosea
 * @param {string}      errorId - ID ya span ya kosa
 * @param {string}      message - Ujumbe wa kosa kwa mtumiaji
 */
function showFieldError(input, errorId, message) {
  input.classList.add('is-error');
  const errorEl = document.getElementById(errorId);
  if (errorEl) errorEl.textContent = message;
}

/**
 * Ondoa hali ya kosa kutoka kipengele kimoja
 * @param {HTMLElement} input - Kipengele cha fomu
 */
function clearFieldError(input) {
  input.classList.remove('is-error');
}

/**
 * Futa makosa yote kwenye fomu
 */
function clearAllErrors() {
  document.querySelectorAll('.form-input.is-error, .form-select.is-error, .form-textarea.is-error').forEach(el => {
    el.classList.remove('is-error');
  });
  document.querySelectorAll('.form-error').forEach(el => {
    el.textContent = '';
  });
}

/**
 * Angalia muundo sahihi wa barua pepe
 * @param {string} email - Barua pepe kuangalia
 * @returns {boolean} true ikiwa ni sahihi
 */
function isValidEmail(email) {
  // Regex rahisi lakini inayofanya kazi vizuri
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}


// ================================================================
// 3. KIHESABU CHA HERUFI — Onyesha herufi zilizoandikwa
// ================================================================
/**
 * Hesabu na onyesha idadi ya herufi kwenye textarea ya ujumbe.
 * Rangi inabadilika kulingana na ukaribu wa kikomo:
 *   0–70%  → muted (kawaida)
 *   70–90% → orange (onyo)
 *   90%+   → red (kikomo karibu)
 */
function initCharCounter() {
  const textarea  = document.getElementById('message');
  const counterEl = document.getElementById('charCount');
  const MAX_CHARS = 1000;

  if (!textarea || !counterEl) return;

  // Weka ukomo wa juu wa herufi
  textarea.setAttribute('maxlength', MAX_CHARS);

  textarea.addEventListener('input', () => {
    const len = textarea.value.length;
    counterEl.textContent = len;

    // Badilisha rangi kulingana na uwiano wa herufi
    if (len > MAX_CHARS * 0.9) {
      counterEl.style.color = '#EF4444';      // Nyekundu — karibu sana na kikomo
    } else if (len > MAX_CHARS * 0.7) {
      counterEl.style.color = '#F59E0B';      // Orange — karibu
    } else {
      counterEl.style.color = 'var(--text-muted)'; // Kawaida
    }
  });
}