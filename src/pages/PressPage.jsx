import { Link } from "../components/Link.jsx";

const PRESS_ITEMS = [
  {
    outlet: "TechCabal",
    date: "March 2026",
    headline: "SealTech is quietly building the software backbone for East Africa's SME sector",
    url: "#",
  },
  {
    outlet: "Disrupt Africa",
    date: "January 2026",
    headline: "Tanzanian software studio SealTech closes year with 30+ enterprise deployments",
    url: "#",
  },
  {
    outlet: "IT News Africa",
    date: "November 2025",
    headline: "How SealTech's cloud-first approach is transforming local business operations",
    url: "#",
  },
];

const FACTS = [
  { num: "2021", label: "Founded" },
  { num: "30+", label: "Products shipped" },
  { num: "3", label: "Team members" },
  { num: "Tanzania", label: "Headquartered" },
];

export function PressPage() {
  return (
    <main data-page="press">
      <header className="about-hero">
        <div className="about-hero-bg">
          <div className="blob blob-1" style={{ opacity: 0.35 }} />
          <div className="blob blob-2" style={{ opacity: 0.25 }} />
          <div className="grid-overlay" />
        </div>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M5 8h6M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span aria-current="page">Press</span>
          </nav>
          <div className="about-hero-grid">
            <div className="about-hero-left" data-animate="fade-up">
              <p className="section-eyebrow">Media & press</p>
              <h1 className="about-title">SealTech in the news.</h1>
              <p className="about-sub">
                Press resources, media coverage, and company facts for journalists and
                media partners. For interview requests, email press@sealtech.co.tz.
              </p>
              <div className="about-stats">
                {FACTS.map(({ num, label }) => (
                  <div className="about-stat" key={label}>
                    <span className="about-stat-num">{num}</span>
                    <span className="about-stat-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-hero-right" data-animate="fade-left">
              <div className="about-mission-card">
                <div className="about-mission-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3>Press kit</h3>
                  <p>Logos, brand guidelines, and company bio available on request.</p>
                </div>
              </div>
              <div className="about-mission-card">
                <div className="about-mission-icon cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3>Media enquiries</h3>
                  <p>We respond to press requests within one business day.</p>
                </div>
              </div>
              <div className="about-trust-badge">
                <div className="about-trust-dot" />
                <span>press@sealtech.co.tz</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="about-values" id="coverage">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">Media coverage</p>
            <h2 className="section-title">Recent <span className="gradient-text">press</span></h2>
          </div>
          <div className="values-grid">
            {PRESS_ITEMS.map(({ outlet, date, headline, url }, i) => (
              <article className="value-card" data-animate="fade-up" data-delay={i * 120} key={headline}>
                <div className="value-card-num">{outlet}</div>
                <h4>
                  <a href={url} style={{ color: "inherit", textDecoration: "none" }}>
                    {headline}
                  </a>
                </h4>
                <p style={{ opacity: 0.55, fontSize: "0.85rem", marginTop: "0.5rem" }}>{date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg">
          <div className="cta-blob cta-blob-1" />
          <div className="cta-blob cta-blob-2" />
        </div>
        <div className="container">
          <div className="cta-content" data-animate="fade-up">
            <div className="cta-badge">Media enquiries</div>
            <h2 className="cta-title">Want to cover SealTech?</h2>
            <p className="cta-desc">We welcome interviews, guest articles, and speaking opportunities.</p>
            <div className="cta-buttons">
              <a href="mailto:press@sealtech.co.tz" className="btn-white">press@sealtech.co.tz</a>
              <Link href="/about" className="btn-outline-white">About us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
