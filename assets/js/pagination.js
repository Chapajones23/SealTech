/**
 * ================================================================
 * SEALTECH — BLOG.JS
 * Maelezo  : Hifadhidata ya makala, utekelezaji wa upangaji,
 *             na ujenzi wa kadi za blogu kwa kurasa zote.
 * ================================================================
 */

// ================================================================
// HIFADHIDATA YA MAKALA — Array ya vitu vya blogu
// Kila kitu kina taarifa kamili ya makala moja
// ================================================================
let BLOG_POSTS = [];

async function loadBlogPosts() {
  if (Array.isArray(BLOG_POSTS) && BLOG_POSTS.length) return BLOG_POSTS;
  const response = await fetch('data/blog-posts.json');
  if (!response.ok) throw new Error('Failed to load blog posts');
  BLOG_POSTS = await response.json();
  return BLOG_POSTS;
}


// ================================================================
// ZANA ZA MSAIDIZI — Helper functions za jumla
// ================================================================

/**
 * Badilisha tarehe kutoka "2026-06-15" hadi "June 15, 2026"
 * @param {string} dateStr - Tarehe katika muundo wa ISO
 * @returns {string} Tarehe iliyosomeka vizuri
 */
function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Panga makala kulingana na tarehe ya kuchapishwa
 * @param {Array} posts - Orodha ya makala
 * @param {string} order - "newest" au "oldest"
 * @returns {Array} Makala zilizopangwa upya
 */
function sortPosts(posts, order = 'newest') {
  // Nakili array ili tusiathiri asili
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.publishDate);
    const dateB = new Date(b.publishDate);
    // "newest" inamaanisha tarehe kubwa kwanza
    return order === 'newest' ? dateB - dateA : dateA - dateB;
  });
}

/**
 * Pata makala 3 mpya zaidi kwa ajili ya sehemu ya landing page
 * @returns {Array} Makala 3 za hivi karibuni
 */
function getLatestPosts(count = 3) {
  return sortPosts(BLOG_POSTS, 'newest').slice(0, count);
}

/**
 * Pata makala moja kwa kutumia slug yake
 * @param {string} slug - Slug ya makala
 * @returns {Object|null} Makala au null
 */
function getPostBySlug(slug) {
  return BLOG_POSTS.find(post => post.slug === slug) || null;
}

/**
 * Pata makala zinazohusiana (bila makala ya sasa)
 * @param {string} currentSlug - Slug ya makala ya sasa
 * @param {number} count - Idadi ya makala zinazohusiana
 * @returns {Array} Makala zinazohusiana
 */
function getRelatedPosts(currentSlug, count = 3) {
  return sortPosts(BLOG_POSTS, 'newest')
    .filter(post => post.slug !== currentSlug)
    .slice(0, count);
}

/**
 * Tengeneza mwandishi wa avatar (initials)
 * @param {Object} post - Kitu cha makala
 * @returns {string} HTML ya avatar
 */
function buildAuthorAvatar(post) {
  return `<div class="author-avatar" style="background:linear-gradient(135deg,${post.authorColor},${post.authorColor}99)">${post.authorInitials}</div>`;
}

// ================================================================
// UJENZI WA KADI — Build blog card HTML
// ================================================================

/**
 * Jenga HTML ya kadi moja ya blogu
 * @param {Object} post  - Kitu cha makala
 * @param {boolean} featured - Je, ni kadi kubwa (featured)?
 * @returns {string} HTML ya kadi
 */
function buildBlogCard(post, featured = false) {
  const dateFormatted = formatDate(post.publishDate);

  // Picha ya makala — gradient ya rangi yenye ikoni
  const imageHtml = `
    <div class="blog-card-image" style="background:${post.imageGradient}">
      <div class="blog-card-image-icon">${post.imageIcon}</div>
      <div class="blog-card-category-tag" style="border-color:rgba(255,255,255,0.3);color:#fff">
        ${post.category}
      </div>
    </div>`;

  // Muundo wa kadi
  return `
    <article class="blog-card${featured ? ' blog-card--featured' : ''}" data-date="${post.publishDate}">
      <a href="post.html?slug=${post.slug}" class="blog-card-image-link" aria-label="Soma makala: ${post.title}">
        ${imageHtml}
      </a>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          ${buildAuthorAvatar(post)}
          <div class="blog-card-meta-text">
            <span class="blog-card-author">${post.author}</span>
            <span class="blog-card-date">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M5 2v2M11 2v2M2 7h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              ${dateFormatted}
            </span>
          </div>
          <span class="blog-card-read-time">${post.readTime}</span>
        </div>

        <h3 class="blog-card-title">
          <a href="post.html?slug=${post.slug}">${post.title}</a>
        </h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>

        <div class="blog-card-footer">
          <div class="blog-card-tags">
            ${post.tags.slice(0, 2).map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
          </div>
          <a href="post.html?slug=${post.slug}" class="blog-card-read-more">
            Read more
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
    </article>`;
}

// ================================================================
// SEHEMU YA LANDING PAGE — "Latest Insights" section
// Inatekelezwa kwenye index.html tu
// ================================================================

/**
 * Jenga na ingiza sehemu ya "Latest Insights" kwenye landing page
 * Inaitwa mara moja baada ya DOM kupakia
 */
function renderLatestInsights() {
  // Tafuta mahali pa kuingiza sehemu — kabla ya CTA section
  const ctaSection = document.getElementById('contact');
  if (!ctaSection) return;

  const latestPosts = getLatestPosts(3);

  // Jenga HTML ya kadi tatu
  const cardsHtml = latestPosts
    .map(post => buildBlogCard(post))
    .join('');

  // Jenga sehemu nzima
  const sectionHtml = `
    <!-- ============================================================
         LATEST INSIGHTS — Makala mpya ya blogu kwenye landing page
    ============================================================ -->
    <section class="latest-insights" id="blog">
      <div class="container">
        <div class="section-header" data-animate="fade-up">
          <p class="section-eyebrow">From the Blog</p>
          <h2 class="section-title">Latest <span class="gradient-text">Insights</span></h2>
          <p class="section-desc">Deep dives, practical guides, and engineering wisdom from the SealTech team.</p>
        </div>

        <!-- Gridi ya kadi tatu za makala mpya -->
        <div class="blog-grid blog-grid--landing" id="latestPostsGrid">
          ${cardsHtml}
        </div>

        <!-- Kitufe cha kuona makala zote -->
        <div class="blog-view-all" data-animate="fade-up">
          <a href="blog.html" class="btn-outline btn-lg">
            View All Articles
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>`;

  // Ingiza sehemu kabla ya CTA
  ctaSection.insertAdjacentHTML('beforebegin', sectionHtml);

  // Anzisha uhuishaji kwa vipengele vipya
  if (typeof initScrollAnimations === 'function') {
    initScrollAnimations();
  }
}

// ================================================================
// BLOG PAGE RENDERER — Tekeleza blog.html (na Pagination)
// ================================================================

/**
 * Tekeleza ukurasa kamili wa blogu:
 *   • Upangaji wa makala (newest / oldest)
 *   • Ukurasa 6 kwa kurasa moja (POSTS_PER_PAGE)
 *   • Ujenzi wa pagination UI kwa nguvu
 *   • Uhuishaji laini wa gridi na pagination
 */
function renderBlogPage() {

  // ── Vipengele vya DOM ────────────────────────────────────────────
  const grid        = document.getElementById('blogGrid');
  const paginationEl= document.getElementById('pagination');
  const sortSelect  = document.getElementById('sortSelect');
  const postCount   = document.getElementById('postCount');

  // Ikiwa gridi haipo, acha — ukurasa huu si blog.html
  if (!grid) return;

  // ── Mipangilio ya pagination ─────────────────────────────────────
  const POSTS_PER_PAGE = 6;   // Idadi ya makala kwa kila ukurasa
  let currentPage  = 1;       // Ukurasa wa sasa — huanza na 1
  let currentSort  = 'newest';// Mpangilio wa chaguo-msingi
  let sortedPosts  = [];      // Orodha iliyopangwa — inasasishwa kila wakati

  // ── HESABU — Idadi ya kurasa zinazohitajika ──────────────────────
  /**
   * Rudisha idadi ya kurasa zote kulingana na makala zilizopo
   * @returns {number} Idadi ya kurasa
   */
  function totalPages() {
    return Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  }

  // ── PATA MAKALA ZA UKURASA HUU ───────────────────────────────────
  /**
   * Chagua makala tu za ukurasa wa sasa
   * Mfano: ukurasa 2, makala 7–12 (index 6–11)
   * @param {number} page - Nambari ya ukurasa (inaanza na 1)
   * @returns {Array} Makala za ukurasa huo
   */
  function getPagePosts(page) {
    const start = (page - 1) * POSTS_PER_PAGE;  // Index ya kwanza
    const end   = start + POSTS_PER_PAGE;        // Index ya mwisho (si ya kujumuisha)
    return sortedPosts.slice(start, end);
  }

  // ── CHORA GRIDI ──────────────────────────────────────────────────
  /**
   * Chora makala za ukurasa wa sasa ndani ya gridi
   * Inaonyesha uhuishaji wa kutoweka → kuonekana
   * @param {boolean} animate - Fanya uhuishaji au la (chaguo-msingi: true)
   */
  function renderGrid(animate = true) {
    const pagePosts = getPagePosts(currentPage);

    // Sasisha kaunti ya makala kwenye toolbar
    if (postCount) {
      const total = sortedPosts.length;
      const start = (currentPage - 1) * POSTS_PER_PAGE + 1;
      const end   = Math.min(currentPage * POSTS_PER_PAGE, total);
      // Onyesha: "Showing 1–6 of 6 articles"
      postCount.textContent = total > POSTS_PER_PAGE
        ? `Showing ${start}–${end} of ${total} articles`
        : `${total} article${total !== 1 ? 's' : ''}`;
    }

    if (animate) {
      // Hatua 1: Ficha gridi ya sasa
      grid.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
      grid.style.opacity    = '0';
      grid.style.transform  = 'translateY(14px)';

      setTimeout(() => {
        // Hatua 2: Jaza maudhui mapya
        grid.innerHTML = pagePosts.map(post => buildBlogCard(post)).join('');
        // Hatua 3: Onyesha tena
        grid.style.opacity   = '1';
        grid.style.transform = 'translateY(0)';
      }, 220);

    } else {
      // Chora mara moja bila uhuishaji (mara ya kwanza)
      grid.innerHTML = pagePosts.map(post => buildBlogCard(post)).join('');
      grid.style.opacity   = '1';
      grid.style.transform = 'translateY(0)';
    }
  }

  // ── JENGA PAGINATION ─────────────────────────────────────────────
  /**
   * Jenga na onyesha vitufe vya pagination chini ya gridi
   * Inaunda vitufe: « Prev  1  2  3 ...  Next »
   *
   * Mantiki ya nambari za kurasa:
   *   • Daima onyesha ukurasa wa kwanza na wa mwisho
   *   • Onyesha ukurasa wa sasa + 1 kila upande
   *   • Onyesha "…" pale penye pengo la kurasa
   */
  function renderPagination() {
    if (!paginationEl) return;

    const total   = totalPages();
    const current = currentPage;

    // Ikiwa kurasa moja tu — ficha pagination kabisa
    if (total <= 1) {
      paginationEl.innerHTML = '';
      paginationEl.style.display = 'none';
      return;
    }

    paginationEl.style.display = 'flex';

    // ── Hesabu ni kurasa zipi zinaonekana kama nambari ──────────────
    // Algorithm: onyesha window ya nambari 5 karibu na ukurasa wa sasa
    const pageNumbers = buildPageNumbers(current, total);

    // ── Jenga HTML ya vitufe vyote ──────────────────────────────────
    let html = '';

    // Kitufe cha PREVIOUS
    html += `
      <button
        class="pgn-btn pgn-prev ${current === 1 ? 'pgn-btn--disabled' : ''}"
        data-action="prev"
        aria-label="Previous page"
        ${current === 1 ? 'disabled aria-disabled="true"' : ''}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 4L6 8l4 4" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Prev</span>
      </button>`;

    // Nambari za kurasa na dots
    pageNumbers.forEach(item => {
      if (item === '…') {
        // Alama ya mkato — haitabonyezwa
        html += `<span class="pgn-dots" aria-hidden="true">…</span>`;
      } else {
        const isActive = item === current;
        html += `
          <button
            class="pgn-btn pgn-page ${isActive ? 'pgn-btn--active' : ''}"
            data-action="page"
            data-page="${item}"
            aria-label="Go to page ${item}"
            aria-current="${isActive ? 'page' : 'false'}"
          >${item}</button>`;
      }
    });

    // Kitufe cha NEXT
    html += `
      <button
        class="pgn-btn pgn-next ${current === total ? 'pgn-btn--disabled' : ''}"
        data-action="next"
        aria-label="Next page"
        ${current === total ? 'disabled aria-disabled="true"' : ''}
      >
        <span>Next</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>`;

    // Weka HTML iliyoundwa ndani ya container
    paginationEl.innerHTML = html;

    // ── Weka wasikilizaji wa click kwa vitufe vyote ─────────────────
    paginationEl.querySelectorAll('.pgn-btn:not([disabled])').forEach(btn => {
      btn.addEventListener('click', handlePaginationClick);
    });

    // ── Weka kuchelewa kwa uhuishaji kwa kila kitufe ─────────────────
    // Kila kitufe kinaonekana baada ya kingine (stagger effect)
    paginationEl.querySelectorAll('.pgn-btn, .pgn-dots').forEach((el, i) => {
      el.style.animationDelay = `${i * 40}ms`;
    });
  } // ── Mwisho wa renderPagination ──

  // ── SIMAMIA KUBONYEZA KITUFE ─────────────────────────────────────
  /**
   * Simamia kubonyeza kitufe chochote cha pagination
   * Inabadilisha currentPage na kuchora upya gridi + pagination
   * @param {MouseEvent} e - Tukio la kubonyeza
   */
  function handlePaginationClick(e) {
    const btn    = e.currentTarget;
    const action = btn.getAttribute('data-action');
    const total  = totalPages();

    let newPage = currentPage;

    if (action === 'prev' && currentPage > 1) {
      newPage = currentPage - 1;
    } else if (action === 'next' && currentPage < total) {
      newPage = currentPage + 1;
    } else if (action === 'page') {
      newPage = parseInt(btn.getAttribute('data-page'), 10);
    }

    // Ikiwa ukurasa haujabadilika, usifanye kitu
    if (newPage === currentPage) return;

    // Badilisha ukurasa wa sasa
    currentPage = newPage;

    // Sogeza juu hadi gridi (bila usogezaji mzito wa ukurasa wote)
    scrollToGrid();

    // Chora upya gridi na pagination
    renderGrid(true);
    renderPagination();
  }

  // ── JENGA ORODHA YA NAMBARI ZA KURASA ───────────────────────────
  /**
   * Tengeneza orodha ya vitu vya kuonyeshwa katika pagination
   * Inajumuisha nambari za kurasa na "…" ambapo kuna pengo
   *
   * Mifano:
   *   total=5, current=3  →  [1, 2, 3, 4, 5]
   *   total=10, current=1 →  [1, 2, 3, '…', 10]
   *   total=10, current=5 →  [1, '…', 4, 5, 6, '…', 10]
   *   total=10, current=9 →  [1, '…', 8, 9, 10]
   *
   * @param {number} current - Ukurasa wa sasa
   * @param {number} total   - Jumla ya kurasa
   * @returns {Array} Orodha ya nambari au '…'
   */
  function buildPageNumbers(current, total) {
    // Ikiwa kurasa 7 au chini — onyesha zote bila mkato
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages = [];

    // Ukurasa wa kwanza daima unaonekana
    pages.push(1);

    // Hesabu kiwango cha mwanzo na mwisho karibu na sasa
    const rangeStart = Math.max(2, current - 1);
    const rangeEnd   = Math.min(total - 1, current + 1);

    // Onyesha "…" kati ya 1 na mwanzo wa kiwango
    if (rangeStart > 2) pages.push('…');

    // Ongeza kurasa ndani ya kiwango
    for (let p = rangeStart; p <= rangeEnd; p++) {
      pages.push(p);
    }

    // Onyesha "…" kati ya mwisho wa kiwango na ukurasa wa mwisho
    if (rangeEnd < total - 1) pages.push('…');

    // Ukurasa wa mwisho daima unaonekana
    pages.push(total);

    return pages;
  }

  // ── SOGEZA JUU HADI GRIDI ────────────────────────────────────────
  /**
   * Sogeza ukurasa juu hadi sehemu ya gridi ya makala
   * Inazingatia urefu wa navbar iliyonaswa
   */
  function scrollToGrid() {
    const toolbar = document.querySelector('.blog-toolbar');
    const target  = toolbar || grid;
    const offset  = 80; // Nafasi ya ziada chini ya navbar

    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  // ── UPANGAJI UPYA — Sort dropdown ────────────────────────────────
  /**
   * Sikiliza mabadiliko ya dropdown ya mpangilio
   * Inapanga makala upya na kurudia ukurasa wa kwanza
   */
  function applySort(order) {
    currentSort = order;
    currentPage = 1; // Rudia mwanzo baada ya kubadilisha mpangilio
    sortedPosts = sortPosts(BLOG_POSTS, currentSort);
    renderGrid(true);
    renderPagination();
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => applySort(e.target.value));
  }

  // ── ANZISHA — Pakia ukurasa wa kwanza ────────────────────────────
  // Panga makala kwa mara ya kwanza (newest kwanza)
  sortedPosts = sortPosts(BLOG_POSTS, currentSort);

  // Chora gridi bila uhuishaji (mara ya kwanza ya kupakia)
  renderGrid(false);

  // Chora pagination
  renderPagination();
}


// ================================================================
// POST PAGE RENDERER — Tekeleza post.html
// ================================================================

/**
 * Tekeleza ukurasa wa makala moja (post.html)
 * Inasoma slug kutoka URL na kuonyesha makala inayofaa
 */
function renderPostPage() {
  // Soma slug kutoka URL: post.html?slug=scalable-web-applications
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');

  const container = document.getElementById('postContent');
  if (!container) return;

  // Ikiwa hakuna slug, onyesha kosa
  if (!slug) {
    container.innerHTML = `
      <div class="post-error">
        <h2>Article not found</h2>
        <p>The article you're looking for doesn't exist.</p>
        <a href="blog.html" class="btn-primary">Back to Blog</a>
      </div>`;
    return;
  }

  // Tafuta makala kwa slug
  const post = getPostBySlug(slug);

  if (!post) {
    container.innerHTML = `
      <div class="post-error">
        <h2>Article not found</h2>
        <p>We couldn't find an article with that URL.</p>
        <a href="blog.html" class="btn-primary">Back to Blog</a>
      </div>`;
    return;
  }

  // Badilisha kichwa cha tab
  document.title = `${post.title} — SealTech Insights`;

  // Sasisisha meta ya SEO ikiwa ipo
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', post.excerpt);

  // Jenga muundo wa ukurasa wa makala
  container.innerHTML = `
    <!-- Kichwa cha makala -->
    <header class="post-header" data-animate="fade-up">
      <div class="post-breadcrumb">
        <a href="index.html">Home</a>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M5 8h6M9 5l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        <a href="blog.html">Blog</a>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M5 8h6M9 5l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        <span>${post.category}</span>
      </div>

      <div class="post-category-badge" style="background:${post.categoryColor}15;color:${post.categoryColor};border-color:${post.categoryColor}30">
        ${post.category}
      </div>
      <h1 class="post-title">${post.title}</h1>
      <p class="post-excerpt">${post.excerpt}</p>

      <!-- Taarifa ya mwandishi na tarehe -->
      <div class="post-meta-row">
        <div class="post-author-info">
          ${buildAuthorAvatar(post)}
          <div>
            <div class="post-author-name">${post.author}</div>
            <div class="post-author-role">${post.authorRole}</div>
          </div>
        </div>
        <div class="post-meta-details">
          <span class="post-meta-item">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M5 2v2M11 2v2M2 7h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            ${formatDate(post.publishDate)}
          </span>
          <span class="post-meta-item">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M8 5v3l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            ${post.readTime}
          </span>
        </div>
      </div>
    </header>

    <!-- Picha kuu ya makala -->
    <div class="post-featured-image" data-animate="fade-up" style="background:${post.imageGradient}">
      <div class="post-featured-image-icon">${post.imageIcon}</div>
    </div>

    <!-- Maudhui ya makala -->
    <div class="post-body" data-animate="fade-up">
      <div class="post-content-inner">
        ${post.content}
      </div>

      <!-- Tags za makala -->
      <div class="post-tags">
        <span class="post-tags-label">Tags:</span>
        ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
      </div>

      <!-- Mgawanyiko na kitufe cha kushiriki -->
      <div class="post-share">
        <span>Share this article:</span>
        <div class="post-share-buttons">
          <button class="share-btn" onclick="sharePost('twitter')">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M18 3.5a8.38 8.38 0 01-2.4.66 4.19 4.19 0 001.84-2.31c-.81.48-1.71.83-2.66 1.02A4.18 4.18 0 009.32 8.5a11.86 11.86 0 01-8.6-4.36 4.18 4.18 0 001.3 5.58 4.16 4.16 0 01-1.89-.52v.05a4.18 4.18 0 003.35 4.1 4.2 4.2 0 01-1.89.07 4.18 4.18 0 003.9 2.9A8.38 8.38 0 012 17.54a11.82 11.82 0 006.4 1.87c7.68 0 11.88-6.36 11.88-11.88l-.01-.54A8.5 8.5 0 0018 3.5z" stroke="currentColor" stroke-width="1.2"/></svg>
            Twitter
          </button>
          <button class="share-btn" onclick="sharePost('linkedin')">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M6 9v5M6 7v.5M10 14v-3a2 2 0 014 0v3M10 9v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            LinkedIn
          </button>
          <button class="share-btn" onclick="copyPostLink()">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M8 4H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3M12 2h6v6M10 10L18 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Copy Link
          </button>
        </div>
      </div>
    </div>`;

  // Tekeleza sehemu ya makala zinazohusiana
  renderRelatedPosts(slug);

  // Anzisha uhuishaji kwa maudhui mapya
  if (typeof initScrollAnimations === 'function') {
    setTimeout(initScrollAnimations, 100);
  }

  // Anzisha usomaji wa maendeleo (progress bar)
  initReadingProgress();
}

// ================================================================
// RELATED POSTS — Makala zinazohusiana chini ya makala
// ================================================================

/**
 * Jenga na onyesha makala zinazohusiana
 * @param {string} currentSlug - Slug ya makala ya sasa (isiingizwe)
 */
function renderRelatedPosts(currentSlug) {
  const container = document.getElementById('relatedPostsGrid');
  if (!container) return;

  const related = getRelatedPosts(currentSlug, 3);

  if (related.length === 0) {
    document.getElementById('relatedSection').style.display = 'none';
    return;
  }

  container.innerHTML = related.map(post => buildBlogCard(post)).join('');
}

// ================================================================
// KITUFE CHA KUSHIRIKI — Share functionality
// ================================================================

/**
 * Shiriki makala kwenye mitandao ya kijamii
 * @param {string} platform - "twitter" au "linkedin"
 */
function sharePost(platform) {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);

  // Tengeneza URL ya kushiriki kulingana na jukwaa
  const urls = {
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
  };

  if (urls[platform]) {
    window.open(urls[platform], '_blank', 'width=600,height=450');
  }
}

/**
 * Nakili kiungo cha makala kwenye clipboard
 */
function copyPostLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    // Onyesha arifa ya mafanikio
    showToast('Link copied to clipboard!');
  }).catch(() => {
    // Njia mbadala kwa vivinjari vikongwe
    const input = document.createElement('input');
    input.value = window.location.href;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast('Link copied!');
  });
}

/**
 * Onyesha arifa ndogo chini ya skrini
 * @param {string} message - Ujumbe wa kuonyesha
 */
function showToast(message) {
  // Ondoa toasts zilizopo
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  document.body.appendChild(toast);

  // Ionyeshe
  requestAnimationFrame(() => {
    toast.classList.add('toast-visible');
  });

  // Iondoe baada ya sekunde 3
  setTimeout(() => {
    toast.classList.remove('toast-visible');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ================================================================
// READING PROGRESS — Mstari wa maendeleo ya kusoma
// ================================================================

/**
 * Onyesha mstari wa maendeleo juu ya ukurasa wakati wa kusoma
 * Inatekelezwa kwenye post.html pekee
 */
function initReadingProgress() {
  // Unda mstari wa maendeleo
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress-bar';
  document.body.prepend(progressBar);

  // Hesabu asilimia ya kusoma wakati wa kusogeza
  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  }, { passive: true });
}

// ================================================================
// KICHOCHEO — Amua ni ukurasa gani na utekeleze kazi inayofaa
// ================================================================

document.addEventListener('DOMContentLoaded', async () => {
  const page = document.body.getAttribute('data-page');

  try {
    await loadBlogPosts();

    if (page === 'home') {
      renderLatestInsights();
    } else if (page === 'blog') {
      renderBlogPage();
    } else if (page === 'post') {
      renderPostPage();
    }
  } catch (error) {
    console.error('Failed to initialise blog data:', error);
  }
});
