import { useState, useEffect } from "react";
import { Link } from "../components/Link.jsx";
import { fetchJobs } from "../services/api.js";

const PERKS = [
  { icon: "💻", title: "Remote-friendly", desc: "Flexible work arrangements — we care about output, not location." },
  { icon: "📈", title: "Growth path", desc: "Clear career progression and mentorship from experienced engineers." },
  { icon: "🌍", title: "Meaningful work", desc: "Build products that solve real problems for African businesses." },
  { icon: "🏖️", title: "Generous leave", desc: "Competitive paid leave, public holidays, and mental health days." },
];

export function CareersPage() {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs()
      .then((data) => {
        setOpenings(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load jobs", err);
        setLoading(false);
      });
  }, []);

  return (
    <main data-page="careers">
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
            <span aria-current="page">Careers</span>
          </nav>
          <div className="about-hero-grid">
            <div className="about-hero-left" data-animate="fade-up">
              <p className="section-eyebrow">Join the team</p>
              <h1 className="about-title">Build the future of African software with us.</h1>
              <p className="about-sub">
                We're a small, high-output engineering team. We hire curious people who love
                shipping great products and want real ownership of their work.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-num">{loading ? "..." : openings.length}</span>
                  <span className="about-stat-label">Open roles</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                  <span className="about-stat-num">Remote</span>
                  <span className="about-stat-label">Friendly team</span>
                </div>
                <div className="about-stat-divider" />
                <div className="about-stat">
                  <span className="about-stat-num">Fast</span>
                  <span className="about-stat-label">Hiring process</span>
                </div>
              </div>
            </div>
            <div className="about-hero-right" data-animate="fade-left">
              <div className="about-mission-card">
                <div className="about-mission-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3>Small team, big impact</h3>
                  <p>Every engineer at SealTech ships features that reach real customers within days.</p>
                </div>
              </div>
              <div className="about-mission-card">
                <div className="about-mission-icon cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3>Ownership culture</h3>
                  <p>No micromanagement. You own your work and are trusted to make good decisions.</p>
                </div>
              </div>
              <div className="about-trust-badge">
                <div className="about-trust-dot" />
                <span>Apply at careers@sealtech.co.tz</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="about-values" id="openings">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">Now hiring</p>
            <h2 className="section-title">Open <span className="gradient-text">positions</span></h2>
            <p className="section-desc">Don't see your role? Send an open application to careers@sealtech.co.tz</p>
          </div>
          <div className="values-grid">
            {loading ? (
              <p style={{ gridColumn: "1 / -1", textAlign: "center", opacity: 0.6 }}>Loading open positions...</p>
            ) : openings.length === 0 ? (
              <p style={{ gridColumn: "1 / -1", textAlign: "center", opacity: 0.6 }}>No open position</p>
            ) : (
              openings.map(({ title, type, location, stack, desc }, i) => (
                <article className="value-card" data-animate="fade-up" data-delay={i * 120} key={title}>
                  <div className="value-card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <p style={{ marginTop: "0.75rem", fontSize: "0.8rem", opacity: 0.6 }}>
                    {type} · {location} {stack ? `· ${stack}` : ""}
                  </p>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="why-section" id="perks">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">Why SealTech</p>
            <h2 className="section-title">Perks & <span className="gradient-text">benefits</span></h2>
          </div>
          <div className="why-grid">
            {PERKS.map(({ icon, title, desc }, i) => (
              <div className="why-card" data-animate="fade-up" data-delay={i * 120} key={title}>
                <div className="why-num">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
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
            <div className="cta-badge">Apply now</div>
            <h2 className="cta-title">Ready to join us?</h2>
            <p className="cta-desc">Send your CV and a short note about what you'd build at SealTech.</p>
            <div className="cta-buttons">
              <a href="mailto:careers@sealtech.co.tz" className="btn-white">careers@sealtech.co.tz</a>
              <Link href="/about" className="btn-outline-white">Meet the team</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
