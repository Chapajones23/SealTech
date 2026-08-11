import { useState } from "react";
import { Link } from "../components/Link.jsx";

const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter MVP",
    tagline: "Ideal for early-stage startups needing a fast, robust Minimum Viable Product.",
    monthlyPrice: 1200,
    annualPrice: 960,
    projectBase: "$3,500+",
    featured: false,
    badge: null,
    features: [
      "Custom Web or Mobile Application",
      "Up to 5 core functional modules",
      "Responsive, accessible modern UI",
      "CI/CD setup & automated deployments",
      "Full source code ownership",
      "30 days post-launch bug support",
      "Standard 1-week sprint iterations",
    ],
    ctaText: "Start Starter Plan",
  },
  {
    id: "growth",
    name: "Growth & Scale",
    tagline: "For expanding businesses ready to scale products with high performance and reliability.",
    monthlyPrice: 2800,
    annualPrice: 2240,
    projectBase: "$8,500+",
    featured: true,
    badge: "Most Popular",
    features: [
      "Cross-platform Web & Mobile apps",
      "Dedicated 3-engineer team + Project Manager",
      "Payment gateway integration (M-Pesa, Stripe)",
      "Custom API architecture & DB optimization",
      "Automated unit & integration test suite",
      "Direct Slack channel & weekly live demos",
      "90 days priority support & 99.9% SLA",
      "Cloud infra setup (AWS, GCP, DigitalOcean)",
    ],
    ctaText: "Launch Growth Plan",
  },
  {
    id: "enterprise",
    name: "Enterprise Custom",
    tagline: "Dedicated engineering squad for mission-critical software, enterprise systems & platforms.",
    monthlyPrice: null,
    annualPrice: null,
    projectBase: "Custom Quote",
    featured: false,
    badge: "Full Custom",
    features: [
      "Full Agile squad (Architect, Devs, QA, DevOps)",
      "High-scale microservices & distributed systems",
      "24/7 Proactive system monitoring & alerts",
      "Security compliance audits & data encryption",
      "Legacy system migration & API integration",
      "Custom SLA with 1-hour emergency response",
      "On-premise or sovereign cloud deployment",
      "Dedicated Solutions Architect & Technical Account Mgr",
    ],
    ctaText: "Request Enterprise Quote",
  },
];

const COMPARISON_FEATURES = [
  { name: "Dedicated Tech Lead & PM", starter: "Shared", growth: "Dedicated", enterprise: "Dedicated Architect" },
  { name: "Web & Mobile Support", starter: "Web or Mobile", growth: "Web + Mobile", enterprise: "Multi-Platform Suite" },
  { name: "Payment Gateway Integration", starter: "Basic", growth: "Advanced (M-Pesa, Selcom, Stripe)", enterprise: "Custom Financial Rail" },
  { name: "Sprint Iteration Cycle", starter: "Bi-Weekly", growth: "Weekly", enterprise: "Continuous Delivery / Daily" },
  { name: "Code Review & Quality Assurance", starter: "Automated", growth: "Peer + QA Lead", enterprise: "Full Security Audit & QA" },
  { name: "Post-Launch Support Period", starter: "30 Days", growth: "90 Days Priority", enterprise: "Custom Ongoing SLA" },
  { name: "Cloud & DevOps Automation", starter: "Basic CI/CD", growth: "Docker + Staging / Prod", enterprise: "Kubernetes & Multi-Cloud" },
  { name: "Emergency Incident Response", starter: "48 Hours", growth: "12 Hours", enterprise: "< 1 Hour SLA" },
];

const FAQS = [
  {
    q: "Can I choose project-based pricing instead of a monthly subscription?",
    a: "Yes! While our monthly retainers provide dedicated engineering capacity and continuous product iterations, we also offer fixed-scope project milestones. Contact us to receive a detailed breakdown tailored to your project timeline.",
  },
  {
    q: "How does the 20% annual discount work?",
    a: "When you select annual billing, your monthly equivalent rate is discounted by 20%. Billing is processed upfront annually, guaranteeing fixed engineering rates and priority developer allocation for 12 months.",
  },
  {
    q: "Which payment options do you accept in East Africa & globally?",
    a: "We accept bank transfers (USD & TZS), mobile money payments (M-Pesa, Tigo Pesa, Airtel Money), Selcom, wire transfers, and credit card payments via Stripe.",
  },
  {
    q: "Can we adjust our team size or switch plans mid-project?",
    a: "Absolutely. Software needs evolve as your user base grows. You can scale your dedicated engineering team up or down with a 14-day notice period.",
  },
  {
    q: "Who owns the intellectual property and code written by SealTech?",
    a: "You retain 100% ownership of all source code, documentation, credentials, and digital assets produced during our collaboration. We transfer code repositories directly to your organization.",
  },
  {
    q: "What happens after our product goes live in production?",
    a: "All plans include post-launch support and bug fixes. You can transition to a long-term maintenance & optimization retainer or handover to your internal team with full technical documentation.",
  },
];

export function PricingPage({ onOpenProject }) {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main data-page="pricing">
      {/* Hero Section */}
      <header className="pricing-hero">
        <div className="pricing-hero-bg">
          <div className="blob blob-1" style={{ opacity: 0.4 }} />
          <div className="blob blob-2" style={{ opacity: 0.3 }} />
          <div className="grid-overlay" />
        </div>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M5 8h6M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span aria-current="page">Pricing & Plans</span>
          </nav>

          <div className="pricing-hero-header" data-animate="fade-up">
            <p className="section-eyebrow">Transparent & Predictable</p>
            <h1 className="pricing-title">
              Engineering solutions priced for <span className="gradient-text">scale & impact</span>
            </h1>
            <p className="pricing-sub">
              Choose a dedicated engineering capacity plan or custom project milestone. Zero hidden fees, clear deliverables, and world-class Tanzanian engineering.
            </p>

            {/* Billing Toggle Switch */}
            <div className="billing-toggle-container">
              <span className={`toggle-label ${billingCycle === "monthly" ? "active" : ""}`}>
                Monthly Billing
              </span>
              <button
                className={`billing-switch ${billingCycle === "annual" ? "annual" : ""}`}
                type="button"
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
                aria-label="Toggle annual or monthly billing"
              >
                <span className="switch-handle" />
              </button>
              <span className={`toggle-label ${billingCycle === "annual" ? "active" : ""}`}>
                Annual Billing
                <span className="discount-badge">Save 20%</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Cards Grid */}
      <section className="pricing-tiers-section">
        <div className="container">
          <div className="pricing-grid">
            {PRICING_TIERS.map((tier) => {
              const price = billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice;
              return (
                <article
                  key={tier.id}
                  className={`pricing-card ${tier.featured ? "featured" : ""}`}
                  data-animate="fade-up"
                >
                  {tier.badge && <div className="card-badge">{tier.badge}</div>}

                  <div className="card-header">
                    <h2 className="tier-name">{tier.name}</h2>
                    <p className="tier-tagline">{tier.tagline}</p>
                  </div>

                  <div className="card-price-box">
                    {price ? (
                      <div className="price-display">
                        <span className="price-currency">$</span>
                        <span className="price-amount">{price.toLocaleString()}</span>
                        <span className="price-period">/ month</span>
                      </div>
                    ) : (
                      <div className="price-display custom">
                        <span className="price-amount">Custom</span>
                      </div>
                    )}
                    <p className="price-subtext">
                      {billingCycle === "annual" && price
                        ? "Billed annually • Starting project base " + tier.projectBase
                        : "Billed monthly • Starting project base " + tier.projectBase}
                    </p>
                  </div>

                  <ul className="tier-features-list">
                    {tier.features.map((feat, idx) => (
                      <li key={idx}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="check-icon">
                          <circle cx="12" cy="12" r="10" fill="rgba(6, 182, 212, 0.15)" stroke="#06B6D4" strokeWidth="1.5" />
                          <path d="M8 12l3 3 5-5" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="card-footer">
                    <button
                      className={tier.featured ? "btn-primary btn-lg full-width" : "btn-outline btn-lg full-width"}
                      onClick={onOpenProject}
                    >
                      {tier.ctaText}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="pricing-matrix-section">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">Detailed Breakdown</p>
            <h2 className="section-title">
              Compare <span className="gradient-text">plan capabilities</span>
            </h2>
            <p className="section-desc">
              Every project comes with clear milestones, clean architecture, and dedicated client updates.
            </p>
          </div>

          <div className="table-responsive-wrapper" data-animate="fade-up">
            <table className="pricing-comparison-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Starter MVP</th>
                  <th className="highlight-col">Growth & Scale</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((item, i) => (
                  <tr key={i}>
                    <td className="feature-name">{item.name}</td>
                    <td>{item.starter}</td>
                    <td className="highlight-col">{item.growth}</td>
                    <td>{item.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq-section">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">Got Questions?</p>
            <h2 className="section-title">
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
            <p className="section-desc">
              Everything you need to know about our contracting models, timelines, and developer support.
            </p>
          </div>

          <div className="faq-grid" data-animate="fade-up">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta-section">
        <div className="cta-bg">
          <div className="cta-blob cta-blob-1" />
          <div className="cta-blob cta-blob-2" />
        </div>
        <div className="container">
          <div className="cta-content" data-animate="fade-up">
            <div className="cta-badge">Custom Engineering</div>
            <h2 className="cta-title">Need a custom technical proposal?</h2>
            <p className="cta-desc">
              Share your project specifications, tech stack preferences, or enterprise compliance requirements with our engineering leaders.
            </p>
            <div className="cta-buttons">
              <button className="btn-white" onClick={onOpenProject}>
                Start Project Scope
              </button>
              <Link href="/contact" className="btn-outline-white">
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
