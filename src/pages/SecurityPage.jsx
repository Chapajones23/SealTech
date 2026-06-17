import { Link } from "../components/Link.jsx";

const PRACTICES = [
  {
    num: "01",
    title: "Encryption everywhere",
    body: "All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Certificates auto-renew and are monitored.",
  },
  {
    num: "02",
    title: "Least-privilege access",
    body: "Every team member and system component gets only the permissions it needs — nothing more. Access is reviewed quarterly.",
  },
  {
    num: "03",
    title: "Multi-factor authentication",
    body: "MFA is mandatory for all admin accounts, cloud consoles, and internal tooling. No exceptions.",
  },
  {
    num: "04",
    title: "Dependency management",
    body: "Automated scanning flags vulnerable dependencies before they reach production. Patches are applied within SLAs.",
  },
  {
    num: "05",
    title: "Incident response",
    body: "We have a documented incident response plan. Critical vulnerabilities are triaged within 24 hours of disclosure.",
  },
  {
    num: "06",
    title: "Regular audits",
    body: "Code reviews, penetration tests, and security assessments are part of our engineering process, not afterthoughts.",
  },
];

const FAQS = [
  {
    q: "How do I report a vulnerability?",
    a: "Email security@sealtech.co.tz with details. We follow responsible disclosure and aim to acknowledge reports within 24 hours.",
  },
  {
    q: "Do you have a bug bounty programme?",
    a: "We are developing a formal programme. In the meantime we recognise and credit responsible reporters publicly (with permission).",
  },
  {
    q: "What cloud providers do you use?",
    a: "Primarily AWS and GCP, both of which hold SOC 2 Type II, ISO 27001, and other certifications.",
  },
  {
    q: "How are client credentials protected?",
    a: "Credentials are stored as bcrypt hashes (cost ≥ 12). Plaintext passwords never touch our disks or logs.",
  },
];

export function SecurityPage() {
  return (
    <main data-page="security">
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
            <span aria-current="page">Security</span>
          </nav>
          <div className="about-hero-grid">
            <div className="about-hero-left" data-animate="fade-up">
              <p className="section-eyebrow">Security</p>
              <h1 className="about-title">Security is core, not a checkbox.</h1>
              <p className="about-sub">
                We build security into every stage of development — from architecture decisions
                to deployment pipelines. Here's how we protect you and your users.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-num">TLS 1.2+</span>
                  <span className="about-stat-label">Encryption in transit</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                  <span className="about-stat-num">AES-256</span>
                  <span className="about-stat-label">Encryption at rest</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                  <span className="about-stat-num">24h</span>
                  <span className="about-stat-label">Vuln response SLA</span>
                </div>
              </div>
            </div>
            <div className="about-hero-right" data-animate="fade-left">
              <div className="about-mission-card">
                <div className="about-mission-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3>Secure by design</h3>
                  <p>Threat modelling starts at the architecture stage, not after a breach.</p>
                </div>
              </div>
              <div className="about-mission-card">
                <div className="about-mission-icon cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3>Continuous monitoring</h3>
                  <p>Automated alerting on anomalous access, errors, and infrastructure events.</p>
                </div>
              </div>
              <div className="about-trust-badge">
                <div className="about-trust-dot" />
                <span>Report vulnerabilities: security@sealtech.co.tz</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="about-values" id="practices">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">How we work</p>
            <h2 className="section-title">Security <span className="gradient-text">practices</span></h2>
            <p className="section-desc">The controls and processes we apply to every product we build and operate.</p>
          </div>
          <div className="values-grid">
            {PRACTICES.map(({ num, title, body }, i) => (
              <article className="value-card" data-animate="fade-up" data-delay={i * 120} key={num}>
                <div className="value-card-num">{num}</div>
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
            <h2 className="section-title">Security <span className="gradient-text">questions</span></h2>
          </div>
          <div className="why-grid">
            {FAQS.map(({ q, a }, i) => (
              <div className="why-card" data-animate="fade-up" data-delay={i * 120} key={q}>
                <div className="why-num">Q{i + 1}</div>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
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
            <div className="cta-badge">Responsible disclosure</div>
            <h2 className="cta-title">Found a vulnerability?</h2>
            <p className="cta-desc">Please report it responsibly. We acknowledge reports within 24 hours and keep you updated.</p>
            <div className="cta-buttons">
              <a href="mailto:security@sealtech.co.tz" className="btn-white">security@sealtech.co.tz</a>
              <Link href="/privacy.html" className="btn-outline-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
