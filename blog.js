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
const BLOG_POSTS = [
  {
    id: 1,
    title: "How to Build Scalable Web Applications in 2026",
    slug: "scalable-web-applications",
    author: "Michael Chapa",
    authorRole: "CEO & Full-Stack Developer",
    authorInitials: "MC",
    authorColor: "#2563EB",
    publishDate: "2026-06-15",
    category: "Engineering",
    categoryColor: "#2563EB",
    readTime: "8 min read",
    excerpt: "Discover the architectural patterns and technology choices that allow modern web applications to handle millions of users without breaking a sweat.",
    content: `
      <p>Building scalable web applications is one of the most important challenges facing software engineers today. As user bases grow from hundreds to millions, the architectural decisions made early on can either propel a product forward or bring it grinding to a halt.</p>

      <h2>The Foundation: Stateless Architecture</h2>
      <p>The first principle of scalability is statelessness. When your application servers hold no session state, you can add or remove instances freely without affecting user experience. Every request should carry all the information needed to process it — typically through JWT tokens or similar mechanisms.</p>
      <p>This approach allows horizontal scaling: instead of upgrading a single server (vertical scaling), you simply add more servers to a load balancer pool. Cloud providers like AWS make this trivial with auto-scaling groups that respond to traffic patterns automatically.</p>

      <h2>Database Strategies That Scale</h2>
      <p>Your database is almost always the first bottleneck. The strategies we use at SealTech include read replicas for distributing query load, connection pooling with tools like PgBouncer, and aggressive use of caching layers (Redis) to keep hot data out of the database entirely.</p>
      <p>For write-heavy workloads, consider CQRS (Command Query Responsibility Segregation) — separating your read and write models allows each to be optimized independently. Event sourcing pairs beautifully with CQRS and gives you an immutable audit log for free.</p>

      <h2>Caching as a First-Class Citizen</h2>
      <p>A well-designed caching strategy can reduce database load by 80–95%. We recommend a multi-tier approach: in-process caching for ultra-hot data, Redis for distributed caching across application instances, and CDN caching for static assets and API responses where appropriate.</p>
      <p>The key insight is that cache invalidation — knowing when to discard stale data — is the hard part. Design your data mutation patterns first, then derive your invalidation strategy from them.</p>

      <h2>Asynchronous Processing</h2>
      <p>Not every operation needs to happen synchronously within the HTTP request lifecycle. Tasks like sending emails, processing uploads, generating reports, and syncing third-party systems should all be handled by background workers consuming from a message queue (RabbitMQ, SQS, or Kafka for high throughput).</p>
      <p>This pattern dramatically improves API response times and system resilience — if a downstream service is slow, your queue absorbs the pressure rather than cascading failures back to users.</p>

      <h2>Observability From Day One</h2>
      <p>You cannot optimize what you cannot measure. Instrument your application with structured logging, distributed tracing (OpenTelemetry), and metrics from the very beginning. Tools like Grafana, Datadog, or AWS CloudWatch give you the visibility to identify bottlenecks before they become incidents.</p>

      <h2>Conclusion</h2>
      <p>Scalability is not a feature you add later — it is a discipline you practice from the first line of code. Start stateless, cache aggressively, process asynchronously, and measure everything. These principles have served SealTech and our clients well across dozens of production systems.</p>
    `,
    image: null,
    imageGradient: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #0E7490 100%)",
    imageIcon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect x="8" y="8" width="16" height="16" rx="3" fill="rgba(255,255,255,0.3)"/><rect x="32" y="8" width="16" height="16" rx="3" fill="rgba(255,255,255,0.2)"/><rect x="8" y="32" width="16" height="16" rx="3" fill="rgba(255,255,255,0.2)"/><rect x="32" y="32" width="16" height="16" rx="3" fill="rgba(255,255,255,0.3)"/><path d="M20 16h16M28 8v40" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-dasharray="3 3"/></svg>`,
    tags: ["Architecture", "Node.js", "AWS", "Performance"]
  },
  {
    id: 2,
    title: "Flutter vs React Native: Which to Choose in 2026",
    slug: "flutter-vs-react-native-2026",
    author: "Lusajo JOB",
    authorRole: "CFO & Payment Integration Engineer",
    authorInitials: "LJ",
    authorColor: "#7C3AED",
    publishDate: "2026-05-28",
    category: "Mobile",
    categoryColor: "#7C3AED",
    readTime: "6 min read",
    excerpt: "An honest, battle-tested comparison of the two dominant cross-platform mobile frameworks — from DX and performance to ecosystem maturity and hiring.",
    content: `
      <p>Every client who comes to SealTech with a mobile project eventually asks the same question: Flutter or React Native? After shipping dozens of apps on both platforms, here is our honest, unfiltered take heading into 2026.</p>

      <h2>The State of Play</h2>
      <p>Flutter, backed by Google and written in Dart, has matured dramatically. React Native, backed by Meta and written in JavaScript/TypeScript, has undergone a fundamental re-architecture with the New Architecture (JSI, Fabric, and TurboModules) now stable and widely deployed.</p>
      <p>Both frameworks are production-ready. The question is which is right for your specific context.</p>

      <h2>Performance: Flutter Wins Narrowly</h2>
      <p>Flutter renders using its own Skia/Impeller engine, meaning it never touches native UI widgets. This gives it highly consistent 60/120fps performance across devices, with no JavaScript bridge overhead. For animation-heavy or graphics-intensive applications, Flutter is the clear choice.</p>
      <p>React Native's New Architecture closes much of the performance gap with JSI (JavaScript Interface), which allows synchronous, direct calls between JS and native code. For the vast majority of business applications, both frameworks deliver performance that is indistinguishable to end users.</p>

      <h2>Developer Experience: React Native Wins</h2>
      <p>If your team knows JavaScript or TypeScript, React Native is immediately productive. The ecosystem is vast — any npm package is potentially available, and web developers can transfer skills directly. Fast Refresh is excellent.</p>
      <p>Flutter's Dart is approachable, but it is an additional language to learn. The upside is that Dart's strong typing and null safety catch entire classes of bugs at compile time. Hot reload in Flutter is also exceptional.</p>

      <h2>Ecosystem and Plugins</h2>
      <p>React Native has a larger plugin ecosystem by virtue of npm, but plugin quality is inconsistent. Flutter's pub.dev ecosystem is smaller but generally higher quality, with many first-party packages maintained directly by Google.</p>

      <h2>Our Recommendation</h2>
      <p>Choose Flutter if you are building a consumer-facing app with complex animations, custom UI, or if you want to target mobile, web, and desktop from a single codebase. Choose React Native if your team is JS-native, you need deep third-party SDK integration, or you are extending an existing web product.</p>
      <p>At SealTech, we default to Flutter for greenfield mobile projects and React Native when extending existing React web applications.</p>
    `,
    image: null,
    imageGradient: "linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #2563EB 100%)",
    imageIcon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect x="10" y="8" width="16" height="40" rx="3" fill="rgba(255,255,255,0.25)"/><rect x="30" y="8" width="16" height="40" rx="3" fill="rgba(255,255,255,0.15)"/><path d="M18 20h0M38 20h0" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round"/><circle cx="18" cy="44" r="2" fill="rgba(255,255,255,0.5)"/><circle cx="38" cy="44" r="2" fill="rgba(255,255,255,0.5)"/></svg>`,
    tags: ["Flutter", "React Native", "Mobile", "iOS", "Android"]
  },
  {
    id: 3,
    title: "CI/CD Pipelines with Docker and GitHub Actions",
    slug: "cicd-docker-github-actions",
    author: "Alfred Kalinga",
    authorRole: "COO & Cloud Engineer",
    authorInitials: "AK",
    authorColor: "#06B6D4",
    publishDate: "2026-05-10",
    category: "DevOps",
    categoryColor: "#0891B2",
    readTime: "10 min read",
    excerpt: "A step-by-step guide to building a production-grade CI/CD pipeline using Docker containers and GitHub Actions — from code push to live deployment in under 5 minutes.",
    content: `
      <p>Shipping software fast and reliably is a competitive advantage. A well-designed CI/CD pipeline turns the question "is this safe to deploy?" from a nerve-racking judgment call into a boring, automated fact. Here is how we build them at SealTech.</p>

      <h2>The Pipeline Philosophy</h2>
      <p>A CI/CD pipeline should do three things: verify that the code works (CI), package it consistently (Docker), and deliver it reliably (CD). Every step should be fast, deterministic, and self-documenting through the pipeline configuration itself.</p>

      <h2>Step 1: Containerise Everything</h2>
      <p>Docker is the foundation. A well-written Dockerfile produces an immutable artifact that will behave identically in development, staging, and production. Use multi-stage builds to separate build dependencies from runtime — a typical Node.js image goes from 1.2GB to under 150MB with a proper multi-stage setup.</p>
      <pre><code># Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]</code></pre>

      <h2>Step 2: GitHub Actions Workflow</h2>
      <p>GitHub Actions is our preferred CI platform for its tight Git integration and generous free tier. A typical SealTech pipeline has three jobs running in sequence: test, build, and deploy.</p>
      <p>The test job runs in parallel across Node.js versions, runs unit tests, integration tests, and a Lighthouse audit. The build job only runs on main branch pushes, building and pushing the Docker image to a container registry. The deploy job uses kubectl to perform a rolling update with zero downtime.</p>

      <h2>Step 3: Environment-Specific Deployments</h2>
      <p>We use GitHub Environments to gate deployments. Pushes to develop auto-deploy to staging. Pushes to main require a passing staging run and a manual approval step before production deployment. Secrets are stored in GitHub's encrypted secrets store and injected as environment variables at runtime, never baked into images.</p>

      <h2>Step 4: Rollback Strategy</h2>
      <p>Kubernetes makes rollbacks trivial: every Deployment revision is retained and a single kubectl rollout undo command reverts to the previous version within seconds. We also tag every Docker image with the Git SHA, so images are permanently traceable to the exact commit that produced them.</p>

      <h2>Results We've Seen</h2>
      <p>Clients who adopt this pipeline typically see deployment frequency increase from weekly to multiple times per day, mean time to recovery drop from hours to minutes, and developer confidence increase substantially because every deployment is identical and reversible.</p>
    `,
    image: null,
    imageGradient: "linear-gradient(135deg, #0C4A6E 0%, #0891B2 50%, #0D9488 100%)",
    imageIcon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect x="12" y="20" width="32" height="20" rx="3" fill="rgba(255,255,255,0.2)"/><path d="M16 30h8M16 34h5" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round"/><circle cx="38" cy="14" r="5" fill="rgba(255,255,255,0.25)"/><path d="M28 10v10M38 20v6" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/></svg>`,
    tags: ["Docker", "GitHub Actions", "CI/CD", "Kubernetes", "DevOps"]
  },
  {
    id: 4,
    title: "Designing APIs That Developers Actually Love",
    slug: "api-design-best-practices",
    author: "Michael Chapa",
    authorRole: "CEO & Full-Stack Developer",
    authorInitials: "AK",
    authorColor: "#2563EB",
    publishDate: "2026-04-22",
    category: "Engineering",
    categoryColor: "#2563EB",
    readTime: "7 min read",
    excerpt: "Good API design is product design. Explore the principles, patterns, and practical techniques that separate APIs developers rave about from ones they dread.",
    content: `<p>Full article content for API design best practices...</p>`,
    image: null,
    imageGradient: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 50%, #7C3AED 100%)",
    imageIcon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M14 28h6l4-10 6 20 4-14 4 8 4-4" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    tags: ["API", "REST", "GraphQL", "Developer Experience"]
  },
  {
    id: 5,
    title: "The SealTech Guide to Code Review Culture",
    slug: "code-review-culture",
    author: "Alfred Kalinga",
    authorRole: "COO & Cloud Engineer",
    authorInitials: "DM",
    authorColor: "#06B6D4",
    publishDate: "2026-03-18",
    category: "Culture",
    categoryColor: "#10B981",
    readTime: "5 min read",
    excerpt: "How we transformed code review from a bottleneck into one of the most effective learning and quality tools in our engineering toolkit.",
    content: `<p>Full article content for code review culture...</p>`,
    image: null,
    imageGradient: "linear-gradient(135deg, #064E3B 0%, #059669 50%, #0891B2 100%)",
    imageIcon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="22" r="8" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/><path d="M14 42c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/><path d="M34 30l4 4-4 4" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    tags: ["Culture", "Code Review", "Team", "Best Practices"]
  },
  {
    id: 6,
    title: "Laravel 11 vs Django 5: A 2026 Comparison",
    slug: "laravel-vs-django-2026",
    author: "Lusajo JOB",
    authorRole: "CFO & Payment Integration Engineer",
    authorInitials: "FN",
    authorColor: "#7C3AED",
    publishDate: "2026-02-05",
    category: "Engineering",
    categoryColor: "#2563EB",
    readTime: "9 min read",
    excerpt: "PHP or Python for your next backend? We put Laravel 11 and Django 5 through their paces across performance, DX, ecosystem, and scalability.",
    content: `<p>Full article content for Laravel vs Django comparison...</p>`,
    image: null,
    imageGradient: "linear-gradient(135deg, #7F1D1D 0%, #DC2626 40%, #EA580C 100%)",
    imageIcon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect x="8" y="16" width="18" height="24" rx="3" fill="rgba(255,255,255,0.25)"/><rect x="30" y="16" width="18" height="24" rx="3" fill="rgba(255,255,255,0.15)"/><path d="M26 28h4" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round"/></svg>`,
    tags: ["Laravel", "Django", "PHP", "Python", "Backend"]
  },
  {
  id: 7,
  title: "Building AI Features Into Modern Web Applications",
  slug: "ai-features-web-applications",
  author: "Michael Chapa",
  authorRole: "CEO & Full-Stack Developer",
  authorInitials: "MC",
  authorColor: "#2563EB",
  publishDate: "2026-01-20",
  category: "AI",
  categoryColor: "#6366F1",
  readTime: "7 min read",
  excerpt: "Artificial intelligence is rapidly becoming a standard feature in modern applications. Here's how to integrate AI capabilities into real-world products.",
  content: `<p>Full article content about integrating AI into web platforms...</p>`,
  image: null,
  imageGradient: "linear-gradient(135deg, #312E81 0%, #6366F1 50%, #06B6D4 100%)",
  imageIcon: "",
  tags: ["AI", "Machine Learning", "Web Apps"]
},

{
  id: 8,
  title: "Microservices vs Monolith: What We Recommend for Startups",
  slug: "microservices-vs-monolith",
  author: "Michael Chapa",
  authorRole: "CEO & Full-Stack Developer",
  authorInitials: "MC",
  authorColor: "#2563EB",
  publishDate: "2025-12-18",
  category: "Architecture",
  categoryColor: "#2563EB",
  readTime: "8 min read",
  excerpt: "Should your startup begin with microservices or a monolithic architecture? We break down the tradeoffs.",
  content: `<p>Full article content discussing architecture choices...</p>`,
  image: null,
  imageGradient: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 60%, #06B6D4 100%)",
  imageIcon: "",
  tags: ["Microservices", "Architecture", "Startups"]
},

{
  id: 9,
  title: "Modern Authentication Systems: OAuth, JWT and Beyond",
  slug: "modern-authentication-systems",
  author: "Michael Chapa",
  authorRole: "CEO & Full-Stack Developer",
  authorInitials: "MC",
  authorColor: "#2563EB",
  publishDate: "2025-11-14",
  category: "Security",
  categoryColor: "#DC2626",
  readTime: "6 min read",
  excerpt: "Authentication is the backbone of any secure application. Learn the modern patterns used by top tech companies.",
  content: `<p>Full article about authentication systems...</p>`,
  image: null,
  imageGradient: "linear-gradient(135deg, #7F1D1D 0%, #DC2626 60%, #F97316 100%)",
  imageIcon: "",
  tags: ["Security", "OAuth", "JWT"]
},

{
  id: 10,
  title: "Serverless Architecture Explained for Developers",
  slug: "serverless-architecture-explained",
  author: "Michael Chapa",
  authorRole: "CEO & Full-Stack Developer",
  authorInitials: "MC",
  authorColor: "#2563EB",
  publishDate: "2025-10-08",
  category: "Cloud",
  categoryColor: "#0891B2",
  readTime: "7 min read",
  excerpt: "Serverless platforms like AWS Lambda are changing how we build backend systems.",
  content: `<p>Full article discussing serverless architecture...</p>`,
  image: null,
  imageGradient: "linear-gradient(135deg, #0C4A6E 0%, #0891B2 50%, #22D3EE 100%)",
  imageIcon: "",
  tags: ["Serverless", "AWS", "Cloud"]
},

{
  id: 11,
  title: "The Future of Web Development in 2027",
  slug: "future-of-web-development",
  author: "Michael Chapa",
  authorRole: "CEO & Full-Stack Developer",
  authorInitials: "MC",
  authorColor: "#2563EB",
  publishDate: "2025-09-20",
  category: "Technology",
  categoryColor: "#6366F1",
  readTime: "5 min read",
  excerpt: "Web development is evolving rapidly. Here are the technologies we believe will dominate the next few years.",
  content: `<p>Future trends in web development...</p>`,
  image: null,
  imageGradient: "linear-gradient(135deg, #312E81 0%, #6366F1 60%, #22D3EE 100%)",
  imageIcon: "",
  tags: ["Future Tech", "Web Development"]
},

{
  id: 12,
  title: "Scaling Databases for High Traffic Applications",
  slug: "scaling-databases",
  author: "Michael Chapa",
  authorRole: "CEO & Full-Stack Developer",
  authorInitials: "MC",
  authorColor: "#2563EB",
  publishDate: "2025-08-10",
  category: "Engineering",
  categoryColor: "#2563EB",
  readTime: "9 min read",
  excerpt: "Databases often become the bottleneck of scaling systems. Here's how we solve that problem.",
  content: `<p>Full article about database scaling strategies...</p>`,
  image: null,
  imageGradient: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 60%, #22D3EE 100%)",
  imageIcon: "",
  tags: ["Databases", "Scaling", "Performance"]
},

{
  id: 13,
  title: "Why Developer Experience Matters for Product Success",
  slug: "developer-experience",
  author: "Michael Chapa",
  authorRole: "CEO & Full-Stack Developer",
  authorInitials: "MC",
  authorColor: "#2563EB",
  publishDate: "2025-07-02",
  category: "Engineering",
  categoryColor: "#2563EB",
  readTime: "6 min read",
  excerpt: "Developer experience (DX) is now a competitive advantage for modern technology companies.",
  content: `<p>Article discussing developer experience...</p>`,
  image: null,
  imageGradient: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #0EA5E9 100%)",
  imageIcon: "",
  tags: ["DX", "Engineering Culture"]
},

{
  id: 14,
  title: "Edge Computing and the Next Generation Internet",
  slug: "edge-computing-internet",
  author: "Michael Chapa",
  authorRole: "CEO & Full-Stack Developer",
  authorInitials: "MC",
  authorColor: "#2563EB",
  publishDate: "2025-06-12",
  category: "Cloud",
  categoryColor: "#0891B2",
  readTime: "7 min read",
  excerpt: "Edge computing is reshaping how applications are delivered globally.",
  content: `<p>Full article about edge computing...</p>`,
  image: null,
  imageGradient: "linear-gradient(135deg, #0C4A6E 0%, #0891B2 50%, #0EA5E9 100%)",
  imageIcon: "",
  tags: ["Edge Computing", "Cloud"]
},
{
  id: 15,
  title: "The Importance of API Documentation",
  slug: "api-documentation",
  author: "Michael Chapa",
  authorRole: "CEO & Full-Stack Developer",
  authorInitials: "MC",
  authorColor: "#2563EB",
  publishDate: "2025-05-09",
  category: "Engineering",
  categoryColor: "#2563EB",
  readTime: "5 min read",
  excerpt: "Great documentation can determine whether developers adopt or abandon your API.",
  content: `<p>Article about writing great API documentation...</p>`,
  image: null,
  imageGradient: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #22D3EE 100%)",
  imageIcon: "",
  tags: ["API", "Documentation"]
},
{
  id: 16,
  title: "How Startups Should Approach Technology Stacks",
  slug: "startup-technology-stack",
  author: "Michael Chapa",
  authorRole: "CEO & Full-Stack Developer",
  authorInitials: "MC",
  authorColor: "#2563EB",
  publishDate: "2025-04-01",
  category: "Startups",
  categoryColor: "#10B981",
  readTime: "6 min read",
  excerpt: "Choosing the right technology stack early can save startups thousands of development hours.",
  content: `<p>Full article about startup technology stacks...</p>`,
  image: null,
  imageGradient: "linear-gradient(135deg, #065F46 0%, #10B981 60%, #06B6D4 100%)",
  imageIcon: "",
  tags: ["Startups", "Tech Stack"]
}
];

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
// BLOG PAGE RENDERER — Tekeleza blog.html
// ================================================================

/**
 * Tekeleza ukurasa wa blogu (blog.html)
 * Inaonyesha makala zote na udhibiti wa kupanga
 */
function renderBlogPage() {
  const grid = document.getElementById('blogGrid');
  const sortSelect = document.getElementById('sortSelect');
  const postCount = document.getElementById('postCount');
  if (!grid) return;

  // Hali ya sasa ya mpangilio — "newest" kwa chaguo-msingi
  let currentSort = 'newest';

  /**
   * Chora upya gridi ya makala
   * Inaitwa wakati wowote mpangilio unabadilika
   */
  function renderGrid() {
    const sorted = sortPosts(BLOG_POSTS, currentSort);

    // Onyesha idadi ya makala
    if (postCount) {
      postCount.textContent = `${sorted.length} article${sorted.length !== 1 ? 's' : ''}`;
    }

    // Panga uhuishaji wa kutoweka kabla ya kubadilisha
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(12px)';
    grid.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

    setTimeout(() => {
      // Weka HTML mpya baada ya kutoweka
      grid.innerHTML = sorted.map(post => buildBlogCard(post)).join('');

      // Onyesha tena kwa uhuishaji
      grid.style.opacity = '1';
      grid.style.transform = 'translateY(0)';
    }, 220);
  }

  // Sikiliza mabadiliko ya dropdown ya mpangilio
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderGrid();
    });
  }

  // Chora mara ya kwanza ukipakia ukurasa
  renderGrid();
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
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.getAttribute('data-page');

  if (page === 'home') {
    // Tekeleza sehemu ya makala kwenye landing page
    renderLatestInsights();
  } else if (page === 'blog') {
    // Tekeleza ukurasa kamili wa blogu
    renderBlogPage();
  } else if (page === 'post') {
    // Tekeleza ukurasa wa makala moja
    renderPostPage();
  }
});
