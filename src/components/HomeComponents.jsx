import { useEffect, useState } from "react";
import { TEAM } from "../constants/index.js";
import { formatDate, sortPosts, getCategorySlug } from "../utils/navigation.js";
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

export function Services({ services = [], loading = false, error = "" }) {
  if (loading) {
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
            {[1, 2, 3, 4].map((i) => (
              <article className="service-card skeleton" key={i} style={{ height: "220px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div className="skeleton-image" style={{ width: "30px", height: "30px", borderRadius: "50%", marginBottom: "15px" }}></div>
                <div className="skeleton-title" style={{ width: "60%", height: "20px", marginBottom: "10px" }}></div>
                <div className="skeleton-text" style={{ width: "80%", height: "15px" }}></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const items = services.map((item) => {
      if (Array.isArray(item)) {
          return {
              title: item[0],
              description: item[1],
          };
      }

      return {
          title: item.title,
          description: item.description,
          category: item.category,
      };
  });

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
        {error && <p className="error-message" style={{ color: "var(--color-error, #ef4444)", textAlign: "center", marginBottom: "20px" }}>{error}</p>}
        <div className="services-grid">
          {items.map(({ title, description, category }, index) => (
            <article
              className="service-card"
              data-animate="fade-up"
              data-delay={index * 100}
              key={title}
            >
              <div className="service-icon">{index + 1}</div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{description}</p>
              <Link
                  className="service-link"
                  href={getCategorySlug(category) ? `/blog?category=${getCategorySlug(category)}` : `/blog`}
              >
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

export function Portfolio({ projects = [], loading = false, error = "" }) {
  if (loading) {
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
            {[1, 2, 3].map((i) => (
              <article className="portfolio-card skeleton" key={i} style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "20px" }}>
                <div className="skeleton-image" style={{ height: "180px", marginBottom: "15px", borderRadius: "var(--radius-xl)" }}></div>
                <div className="skeleton-badge" style={{ height: "20px", width: "80px", marginBottom: "10px", borderRadius: "var(--radius-full)" }}></div>
                <div className="skeleton-title" style={{ height: "30px", width: "60%", marginBottom: "10px" }}></div>
                <div className="skeleton-text" style={{ height: "15px", width: "90%" }}></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const items = projects.map((item) => {
    if (Array.isArray(item)) {
      return { title: item[0], tag: item[1], stack: item[2], description: item[3] };
    }
    return {
      title: item.title,
      tag: item.tag || item.category,
      stack: item.stack,
      description: item.description,
    };
  });

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
        {error && <p className="error-message" style={{ color: "var(--color-error, #ef4444)", textAlign: "center", marginBottom: "20px" }}>{error}</p>}
        <div className="portfolio-grid">
          {items.map(({ title, tag, stack, description }, index) => (
            <article
              className={`portfolio-card ${index === 1 ? "featured" : ""}`}
              data-animate="fade-up"
              data-delay={index * 100}
              key={title}
            >
              <div
                className="portfolio-img"
                style={{
                  "--accent": index === 1 ? "#7C3AED" : "#2563EB",
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
              <p className="portfolio-desc">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


export function Developers() {
  const codeText = `const sealtech = {
  websites: {
    design: "Modern & Responsive",
    performance: "Lightning Fast",
    security: "SSL Protected",
    seo: "Search Engine Optimized"
  },

  features: [
    "Mobile First",
    "CMS Ready",
    "Business Integrations",
    "Scalable Architecture"
  ],

  support: "Dedicated Support",
  readyToGrow: true
};`;

  const [displayedCode, setDisplayedCode] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayedCode.length < codeText.length) {
      // WRITE
      timer = setTimeout(() => {
        setDisplayedCode(
          codeText.slice(0, displayedCode.length + 1)
        );
      }, 35);
    } else if (!isDeleting && displayedCode.length === codeText.length) {
      // COMPLETE → PAUSE
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayedCode.length > 0) {
      // DELETE
      timer = setTimeout(() => {
        setDisplayedCode(
          codeText.slice(0, displayedCode.length - 1)
        );
      }, 18);
    } else if (isDeleting && displayedCode.length === 0) {
      // DELETE COMPLETE → PAUSE → WRITE AGAIN
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 600);
    }

    return () => clearTimeout(timer);
  }, [displayedCode, isDeleting]);


  return (
    <section className="developers" id="developers">
      <div className="container">
        <div className="dev-grid">
          <div className="dev-code" data-animate="fade-right">
            <div className="code-window">
              <div className="code-header">
                <span className="code-filename">
                  sealtech/website.config
                </span>
              </div>

              <div className="code-body">
                <pre>
                  {displayedCode}
                  <span className="typing-cursor">|</span>
                </pre>
              </div>
            </div>
          </div>

          <div className="dev-content" data-animate="fade-left">
            <p className="section-eyebrow">How We Build</p>

            <h2 className="section-title">
              From your idea
              <br />
              <span className="gradient-text">to the web.</span>
            </h2>

            <p className="dev-desc">
              Every SealTech website starts with your goals. We turn your idea into
              a polished digital experience that is designed to look professional,
              perform fast, and convert visitors into customers.
            </p>

            <div className="dev-process">
              <div className="dev-process-item">
                <span className="dev-process-number">01</span>
                <div>
                  <h3>Discover</h3>
                  <p>
                    We understand your business, audience, goals, and what you need
                    your website to achieve.
                  </p>
                </div>
              </div>

              <div className="dev-process-item">
                <span className="dev-process-number">02</span>
                <div>
                  <h3>Design</h3>
                  <p>
                    We create a clean, modern interface that reflects your brand
                    and gives your customers a great first impression.
                  </p>
                </div>
              </div>

              <div className="dev-process-item">
                <span className="dev-process-number">03</span>
                <div>
                  <h3>Build</h3>
                  <p>
                    Our developers turn the design into a fast, responsive and
                    secure website ready for real customers.
                  </p>
                </div>
              </div>

              <div className="dev-process-item">
                <span className="dev-process-number">04</span>
                <div>
                  <h3>Launch & Grow</h3>
                  <p>
                    We launch your website and remain available for support,
                    improvements, and future growth.
                  </p>
                </div>
              </div>
            </div>
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
