import { useState } from "react";
import { SERVICES, PROJECTS, TEAM } from "../constants/index.js";
import { formatDate, sortPosts } from "../utils/navigation.js";
import { SectionHeader, AuthorAvatar } from "./Shared.jsx";
import { Link } from "./Link.jsx";
import { BlogCard, LatestInsights, Newsletter } from "./Blog.jsx";

export function TechStack() {
  return (
    <section className="techstack" id="techstack">
      <div className="container">
        <p className="section-eyebrow">Trusted Technologies</p>
        <div className="tech-track-wrapper">
          <div className="tech-track">
            {[
              "Laravel",
              "React",
              "Django",
              "Flutter",
              "Node.js",
              "Docker",
              "AWS",
              "Git",
              "Laravel",
              "React",
            ].map((tech) => (
              <div className="tech-badge" key={tech + Math.random()}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="What We Do"
          title={
            <>
              End-to-end digital<br />
              <span className="gradient-text">engineering</span>
            </>
          }
          desc="From concept to production. We craft refined, scalable solutions that bring ideas to life."
        />
        <div className="services-grid">
          {SERVICES.map(([title, desc], index) => (
            <article
              className="service-card"
              data-animate="fade-up"
              data-delay={index * 100}
              key={title}
            >
              <div className="service-icon">{index + 1}</div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
              <Link className="service-link" href="/blog.html">
                Learn more
              </Link>
              <div className="service-card-glow"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <SectionHeader
          eyebrow="Our Work"
          title={
            <>
              Project <span className="gradient-text">Portfolio</span>
            </>
          }
          desc="Real-world solutions that have transformed how businesses operate."
        />
        <div className="portfolio-grid">
          {PROJECTS.map(([title, tag, stack, desc], index) => (
            <article
              className={`portfolio-card ${index === 1 ? "featured" : ""}`}
              data-animate="fade-up"
              data-delay={index * 100}
              key={title}
            >
              <div
                className="portfolio-img"
                style={{
                  "--accent":
                    index === 1 ? "#7C3AED" : "#2563EB",
                }}
              >
                <div className="portfolio-mockup">
                  <div className="mock-bar"></div>
                  <div className="mock-content"></div>
                </div>
              </div>
              <div className="portfolio-meta">
                <span className="portfolio-tag">{tag}</span>
                <span className="portfolio-tag">{stack}</span>
              </div>
              <h3 className="portfolio-title">{title}</h3>
              <p className="portfolio-desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Developers() {
  return (
    <section className="developers" id="developers">
      <div className="container">
        <div className="dev-grid">
          <div className="dev-code" data-animate="fade-right">
            <div className="code-window">
              <div className="code-header">
                <span className="code-filename">api/contact.js</span>
              </div>
              <div className="code-body">
                <pre>{`await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});`}</pre>
              </div>
            </div>
          </div>
          <div className="dev-content" data-animate="fade-left">
            <p className="section-eyebrow">Developer Experience</p>
            <h2 className="section-title">
              Built by engineers,
              <br />
              <span className="gradient-text">for engineers</span>
            </h2>
            <p className="dev-desc">
              The site is now a React app with configurable API endpoints for
              reading blog content and submitting customer requests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="why-section" id="why">
      <div className="container">
        <SectionHeader
          eyebrow="Why SealTech"
          title={
            <>
              The standard others<br />
              <span className="gradient-text">measure against</span>
            </>
          }
        />
        <div className="why-grid">
          {[
            "Experienced Engineers",
            "Modern Technologies",
            "Scalable Architecture",
            "Reliable Support",
          ].map((item, i) => (
            <div
              className="why-card"
              data-animate="fade-up"
              data-delay={i * 100}
              key={item}
            >
              <div className="why-num">0{i + 1}</div>
              <h3>{item}</h3>
              <p>
                Practical engineering decisions, careful execution, and support
                that keeps your product moving.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <SectionHeader
          eyebrow="The Team"
          title={
            <>
              Brilliant minds,
              <br />
              <span className="gradient-text">One mission</span>
            </>
          }
        />
        <div className="team-grid">
          {TEAM.map(([name, role, bio, image], index) => (
            <article
              className="team-card"
              data-animate="fade-up"
              data-delay={index * 150}
              key={name}
            >
              <div className="team-photo">
                <div className="team-avatar">
                  {image ? (
                    <img src={image} alt={name} />
                  ) : (
                    <span>LJ</span>
                  )}
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
  );
}
