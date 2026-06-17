import { Link } from "../components/Link.jsx";
import { TEAM, SERVICES } from "../constants/index.js";

const VALUES = [
  { num: "01", title: "Quality First", body: "We don't ship code we wouldn't run in production ourselves. Every line is reviewed, tested, and optimised." },
  { num: "02", title: "Transparency", body: "Clear timelines, honest updates, no hidden costs. You always know where your project stands." },
  { num: "03", title: "Long-term thinking", body: "We architect for tomorrow, not just today. Scalable systems that grow with your business." },
  { num: "04", title: "Client partnership", body: "We treat every engagement as a partnership — your success is the only metric that matters to us." },
  { num: "05", title: "Continuous learning", body: "The technology landscape evolves fast. Our team stays at the cutting edge so your product does too." },
  { num: "06", title: "Africa-focused", body: "Built in Dar es Salaam, solving real problems for African businesses and beyond." },
];

export function AboutPage() {
  return (
    <main data-page="about">
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
            <span aria-current="page">About</span>
          </nav>
          <div className="about-hero-grid">
            <div className="about-hero-left" data-animate="fade-up">
              <p className="section-eyebrow">Who we are</p>
              <h1 className="about-title">Engineering the future, built in Tanzania.</h1>
              <p className="about-sub">
                SealTech is a software engineering company based in Dar es Salaam. We design and
                build modern web, mobile, and enterprise systems for businesses that demand
                performance and reliability.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-num">30+</span>
                  <span className="about-stat-label">Projects delivered</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                  <span className="about-stat-num">4+</span>
                  <span className="about-stat-label">Years experience</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                  <span className="about-stat-num">98%</span>
                  <span className="about-stat-label">Client satisfaction</span>
                </div>
              </div>
            </div>
            <div className="about-hero-right" data-animate="fade-left">
              <div className="about-mission-card">
                <div className="about-mission-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4 6v6c0 5 4 9 8 10 4-1 8-5 8-10V6l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3>Our mission</h3>
                  <p>Deliver world-class software solutions that empower African businesses to compete globally.</p>
                </div>
              </div>
              <div className="about-mission-card">
                <div className="about-mission-icon cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3>Our vision</h3>
                  <p>Become the most trusted software engineering partner for growth-stage companies across East Africa.</p>
                </div>
              </div>
              <div className="about-trust-badge">
                <div className="about-trust-dot" />
                <span>Based in Dar es Salaam, Tanzania 🇹🇿</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="about-values" id="values">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">What drives us</p>
            <h2 className="section-title">Our <span className="gradient-text">core values</span></h2>
            <p className="section-desc">The principles that guide every decision we make and every line of code we write.</p>
          </div>
          <div className="values-grid">
            {VALUES.map(({ num, title, body }, i) => (
              <article className="value-card" data-animate="fade-up" data-delay={i * 120} key={num}>
                <div className="value-card-num">{num}</div>
                <h4>{title}</h4>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">The team</p>
            <h2 className="section-title">Brilliant minds, <span className="gradient-text">one mission</span></h2>
          </div>
          <div className="team-grid">
            {TEAM.map(([name, role, bio, image], i) => (
              <article className="team-card" data-animate="fade-up" data-delay={i * 150} key={name}>
                <div className="team-photo">
                  <div className="team-avatar">
                    {image ? <img src={image} alt={name} /> : <span>{name.split(" ").map(w => w[0]).join("")}</span>}
                  </div>
                </div>
                <h3 className="team-name">{name}</h3>
                <p className="team-role">{role}</p>
                <p className="team-bio">{bio}</p>
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
            <div className="cta-badge">Work with us</div>
            <h2 className="cta-title">Ready to build something great?</h2>
            <p className="cta-desc">Tell us about your project and let's get started.</p>
            <div className="cta-buttons">
              <Link href="/contact.html" className="btn-white">Get in touch</Link>
              <Link href="/careers.html" className="btn-outline-white">Join the team</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
