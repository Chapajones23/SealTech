import { Link } from "../components/Link.jsx";

const POLICIES = [
  {
    num: "01",
    title: "Information we collect",
    body: "Contact details (name, email, phone), business info, usage analytics, device and log data, and any data you provide through forms or support.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5 4 9 8 10 4-1 8-5 8-10V6l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "How we use it",
    body: "To provide and improve services, respond to inquiries, secure our systems, comply with law, and send product updates you opt into.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 7h14M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7v12a2 2 0 002 2h6a2 2 0 002-2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    iconStyle: { background: "rgba(124,58,237,0.08)", color: "#7C3AED" },
  },
  {
    num: "03",
    title: "Sharing",
    body: "We do not sell personal data. We share with vetted processors (cloud, analytics, support) under data protection agreements.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 15l4 4 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    iconStyle: { background: "rgba(16,185,129,0.08)", color: "#059669" },
  },
  {
    num: "04",
    title: "Retention",
    body: "We keep data only as long as necessary for the purpose collected or to meet legal and accounting requirements.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    iconStyle: { background: "rgba(245,158,11,0.1)", color: "#c2410c" },
  },
  {
    num: "05",
    title: "Security",
    body: "Encryption in transit and at rest, role-based access, least privilege, MFA for admins, and regular security reviews.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Your rights",
    body: "Access, correct, delete, or export your data where applicable. Opt out of marketing anytime via unsubscribe links.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    iconStyle: { background: "rgba(37,99,235,0.12)", color: "#2563EB" },
  },
];

const FAQS = [
  {
    q: "Do you use cookies?",
    a: "Yes, for essential site functionality and anonymized analytics. You can control cookies through your browser settings.",
  },
  {
    q: "Where is data stored?",
    a: "Primarily in AWS/GCP regions closest to our customers, with backups encrypted and access-controlled.",
  },
  {
    q: "How to contact the DPO?",
    a: "Email privacy@sealtech.co.tz for any privacy requests or concerns.",
  },
  {
    q: "Do you process data for clients?",
    a: "Yes, as a processor under contract. We only handle data according to client instructions and applicable law.",
  },
];

export function PrivacyPage() {
  return (
    <main data-page="privacy">
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
            <span aria-current="page">Privacy Policy</span>
          </nav>

          <div className="about-hero-grid">
            <div className="about-hero-left" data-animate="fade-up">
              <p className="section-eyebrow">Privacy first</p>
              <h1 className="about-title">We respect your data and your users.</h1>
              <p className="about-sub">
                This policy explains what we collect, why we collect it, and how we protect it
                across SealTech products, sites, and services.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-num">Transparent</span>
                  <span className="about-stat-label">Plain-language policy</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                  <span className="about-stat-num">Security-led</span>
                  <span className="about-stat-label">Encryption & access controls</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                  <span className="about-stat-num">Updated</span>
                  <span className="about-stat-label">Effective: March 19, 2026</span>
                </div>
              </div>
            </div>

            <div className="about-hero-right" data-animate="fade-left">
              <div className="about-mission-card">
                <div className="about-mission-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3>Your controls</h3>
                  <p>We honor access, correction, and deletion requests where applicable law allows.</p>
                </div>
              </div>
              <div className="about-mission-card">
                <div className="about-mission-icon cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3>Security</h3>
                  <p>Data encrypted in transit and at rest; least-privilege access; regular reviews.</p>
                </div>
              </div>
              <div className="about-trust-badge">
                <div className="about-trust-dot" />
                <span>Contact: privacy@sealtech.co.tz</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="about-values" id="policy">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">The details</p>
            <h2 className="section-title">
              Privacy <span className="gradient-text">Policy</span>
            </h2>
            <p className="section-desc">
              How we handle personal data for visitors, customers, and end users of our products.
            </p>
          </div>

          <div className="values-grid">
            {POLICIES.map(({ num, title, body, icon, iconStyle }, index) => (
              <article
                className="value-card"
                data-animate="fade-up"
                data-delay={index * 120}
                key={num}
              >
                <div className="value-card-num">{num}</div>
                <div className="value-card-icon" style={iconStyle}>{icon}</div>
                <h4>{title}</h4>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section" id="faq">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">
              Common <span className="gradient-text">questions</span>
            </h2>
          </div>
          <div className="why-grid">
            {FAQS.map(({ q, a }, index) => (
              <div
                className="why-card"
                data-animate="fade-up"
                data-delay={index * 120}
                key={q}
              >
                <div className="why-num">Q{index + 1}</div>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-bg">
          <div className="cta-blob cta-blob-1" />
          <div className="cta-blob cta-blob-2" />
        </div>
        <div className="container">
          <div className="cta-content" data-animate="fade-up">
            <div>
              <p className="cta-badge">Privacy inquiries</p>
              <h2 className="cta-title">Need to talk about data?</h2>
              <p className="cta-desc">
                Reach us for DPA requests, incident reports, or compliance questions. We respond
                within one business day.
              </p>
              <div className="cta-buttons">
                <a href="mailto:privacy@sealtech.co.tz" className="btn-primary btn-lg">
                  privacy@sealtech.co.tz
                </a>
                <Link href="/contact" className="btn-outline btn-lg">
                  Contact form
                </Link>
              </div>
              <p className="cta-note">
                If you are an end user of a client product, please reach out to that provider first;
                we'll support them promptly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
