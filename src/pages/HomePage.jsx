import { useState } from "react";
import { sortPosts } from "../utils/navigation.js";
import { TechStack, Services, Portfolio, Developers, Why, Team } from "../components/HomeComponents.jsx";
import { LatestInsights } from "../components/Blog.jsx";
import { Link } from "../components/Link.jsx";
import { useServices } from "../hooks/useServices.js";
import { useProjects } from "../hooks/useProjects.js";

export function HomePage({ postsState, onOpenProject, onOpenCall }) {
  const latest = sortPosts(postsState.posts).slice(0, 3);
  const servicesState = useServices();
  const projectsState = useProjects();

  return (
    <main>
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="grid-overlay"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content" data-animate="fade-up">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for new projects
            </div>
            <h1 className="hero-title">
              We Build<br />
              <span className="gradient-text">Software That</span>
              <br />
              Scales With You
            </h1>
            <p className="hero-desc">
              SealTech delivers modern web, mobile, and enterprise solutions
              engineered with precision for teams that value performance,
              security, and seamless user experience.
            </p>
            <div className="hero-ctas">
              <a href="#services" className="btn-primary btn-lg">
                Explore Services
              </a>
              <a href="#portfolio" className="btn-outline btn-lg">
                View Portfolio
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">18+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">6+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="hero-visual" data-animate="fade-left">
            <div className="dashboard-card">
              <div className="dash-header">
                <div className="dash-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="dash-title">api.sealtech.co.tz</span>
              </div>
              <div className="dash-chart">
                <div className="chart-bars">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => (
                    <div
                      className={`bar ${i === 5 ? "active" : ""}`}
                      style={{ "--h": `${45 + i * 9}%` }}
                      key={m}
                    >
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
                <div className="chart-label">
                  <span className="chart-value">+47.2%</span>
                  <span className="chart-sub">API growth</span>
                </div>
              </div>
              <div className="dash-actions">
                <div className="action-item">
                  <div className="action-dot green-dot"></div>
                  <span>Contact endpoint - live</span>
                  <span className="action-time">now</span>
                </div>
                <div className="action-item">
                  <div className="action-dot blue-dot"></div>
                  <span>Blog API - synced</span>
                  <span className="action-time">2m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TechStack />
      <Services services={servicesState.services} loading={servicesState.loading} error={servicesState.error} />
      <Portfolio projects={projectsState.projects} loading={projectsState.loading} error={projectsState.error} />
      <Developers />
      <Why />
      <Team />
      <LatestInsights posts={latest} loading={postsState.loading} />
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-content" data-animate="fade-up">
            <div className="cta-badge">Ready to launch?</div>
            <h2 className="cta-title">
              Let's build something
              <br />
              extraordinary together
            </h2>
            <p className="cta-desc">
              Tell us what you need. The React app sends your request directly to your API.
            </p>
            <div className="cta-buttons">
              <button className="btn-white" onClick={onOpenProject}>
                Start a Project
              </button>
              <button className="btn-outline-white" onClick={onOpenCall}>
                Schedule a Call
              </button>
            </div>
            <p className="cta-note">
              No commitment. Free consultation. Response within 24h.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
