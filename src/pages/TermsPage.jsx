import { Link } from "../components/Link.jsx";

const SECTIONS = [
  {
    num: "01",
    title: "Acceptance of terms",
    body: "By accessing or using SealTech services you agree to these terms. If you do not agree, do not use our services.",
  },
  {
    num: "02",
    title: "Services",
    body: "SealTech provides software development, consulting, and related digital services under separate statements of work or service agreements.",
  },
  {
    num: "03",
    title: "Intellectual property",
    body: "Upon full payment, custom work product belongs to the client. SealTech retains ownership of general tools, libraries, and frameworks used in delivery.",
  },
  {
    num: "04",
    title: "Payment",
    body: "Invoices are due within 30 days unless otherwise agreed. Late payments accrue interest at 1.5% per month.",
  },
  {
    num: "05",
    title: "Confidentiality",
    body: "Both parties agree to protect each other's confidential information and not disclose it to third parties without consent.",
  },
  {
    num: "06",
    title: "Limitation of liability",
    body: "SealTech's liability is capped at the fees paid in the three months preceding the claim. We are not liable for indirect or consequential damages.",
  },
  {
    num: "07",
    title: "Termination",
    body: "Either party may terminate an engagement with 30 days written notice. Work completed to the termination date is billable.",
  },
  {
    num: "08",
    title: "Governing law",
    body: "These terms are governed by the laws of the United Republic of Tanzania. Disputes are resolved in courts of Dar es Salaam.",
  },
];

export function TermsPage() {
  return (
    <main data-page="terms">
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
            <span aria-current="page">Terms of Service</span>
          </nav>
          <div className="about-hero-grid">
            <div className="about-hero-left" data-animate="fade-up">
              <p className="section-eyebrow">Legal</p>
              <h1 className="about-title">Terms of Service</h1>
              <p className="about-sub">
                These terms govern your use of SealTech services and websites. We've kept them
                straightforward and human-readable.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-num">Plain</span>
                  <span className="about-stat-label">Language terms</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                  <span className="about-stat-num">Fair</span>
                  <span className="about-stat-label">Policies</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                  <span className="about-stat-num">Updated</span>
                  <span className="about-stat-label">March 2026</span>
                </div>
              </div>
            </div>
            <div className="about-hero-right" data-animate="fade-left">
              <div className="about-mission-card">
                <div className="about-mission-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3>Clear agreements</h3>
                  <p>We write contracts that both parties can actually understand and stand behind.</p>
                </div>
              </div>
              <div className="about-mission-card">
                <div className="about-mission-icon cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3>Your rights protected</h3>
                  <p>You own what you pay for. IP transfer is clear and unconditional on payment.</p>
                </div>
              </div>
              <div className="about-trust-badge">
                <div className="about-trust-dot" />
                <span>Questions: legal@sealtech.co.tz</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="about-values" id="terms">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">The details</p>
            <h2 className="section-title">Terms & <span className="gradient-text">conditions</span></h2>
            <p className="section-desc">Effective date: March 2026. These terms apply to all SealTech engagements unless superseded by a signed agreement.</p>
          </div>
          <div className="values-grid">
            {SECTIONS.map(({ num, title, body }, i) => (
              <article className="value-card" data-animate="fade-up" data-delay={i * 100} key={num}>
                <div className="value-card-num">{num}</div>
                <h4>{title}</h4>
                <p>{body}</p>
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
            <div className="cta-badge">Have questions?</div>
            <h2 className="cta-title">Need to talk through the terms?</h2>
            <p className="cta-desc">Reach out and we'll clarify anything before you commit.</p>
            <div className="cta-buttons">
              <a href="mailto:legal@sealtech.co.tz" className="btn-white">legal@sealtech.co.tz</a>
              <Link href="/privacy.html" className="btn-outline-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
