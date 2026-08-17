import { useState } from "react";
import { Link } from "../components/Link.jsx";

const PRICING_TIERS = [
  {
    id: "starter",
    name: "Business Starter",
    tagline: "A professional, fast and mobile-friendly website for businesses that need a strong online presence.",
    monthlyPrice: null,
    annualPrice: null,
    projectBase: "TSh 550,000",
    featured: false,
    badge: null,
    features: [
      "Modern responsive website design",
      "Up to 16 pages",
      "Professional company profile layout",
      "Contact form & WhatsApp integration",
      "1.5 GB hosting space",
      "Free .co.tz domain",
      "Up to 15 business email accounts",
      "SSL security & performance optimization",
      "Full SEO setup",
      "30 days post-launch support",
    ],
    ctaText: "Choose Starter",
  },
  {
    id: "professional",
    name: "Professional CMS",
    tagline: "For businesses, institutions and growing brands that need to manage website content without a developer.",
    monthlyPrice: null,
    annualPrice: null,
    projectBase: "TSh 1,500,000",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Business Starter",
      "Custom frontend + full CMS dashboard",
      "Create and manage posts & pages",
      "Edit content and replace images",
      "Up to 28 pages",
      "3 GB hosting space",
      "Free .co.tz domain",
      "Unlimited business email accounts",
      "Advanced SEO & performance setup",
      "Blog, news & dynamic content",
      "90 days priority support",
    ],
    ctaText: "Choose Professional",
  },
  {
    id: "enterprise",
    name: "Enterprise Web Solution",
    tagline: "A complete custom web application for organizations that need accounts, dashboards, payments and advanced integrations.",
    monthlyPrice: null,
    annualPrice: null,
    projectBase: "From TSh 4,500,000",
    featured: false,
    badge: "Custom",
    features: [
      "Full custom web application",
      "Admin & client dashboards",
      "User accounts & role management",
      "E-commerce & online payments",
      "Payment gateway integrations",
      "Booking, catalog or portal systems",
      "SMS & system notifications",
      "Unlimited pages & custom modules",
      "10 GB+ hosting options",
      "Free .co.tz domain",
      "Unlimited business email accounts",
      "Full SEO & performance optimization",
      "Custom API & third-party integrations",
      "Self-hosting / VPS deployment available",
      "Ongoing maintenance & support options",
    ],
    ctaText: "Request Custom Quote",
  },
];

const COMPARISON_FEATURES = [
  { name: "Website Type", starter: "Business Website", professional: "Website + CMS", enterprise: "Custom Web Application" },
  { name: "Pages", starter: "Up to 16", professional: "Up to 28", enterprise: "Unlimited / Custom" },
  { name: "Admin Dashboard", starter: "—", professional: "✓ Full CMS", enterprise: "✓ Advanced" },
  { name: "Content Management", starter: "Developer managed", professional: "Self-managed", enterprise: "Self-managed + custom workflows" },
  { name: "Business Emails", starter: "15 accounts", professional: "Unlimited", enterprise: "Unlimited" },
  { name: "Hosting", starter: "1.5 GB", professional: "3 GB", enterprise: "10 GB+ / Custom" },
  { name: "Domain", starter: "Free .co.tz", professional: "Free .co.tz", enterprise: "Free .co.tz" },
  { name: "SEO", starter: "Full SEO setup", professional: "Advanced SEO", enterprise: "Advanced / Custom SEO" },
  { name: "Payments", starter: "—", professional: "Catalog only", enterprise: "M-Pesa, cards & gateways" },
  { name: "User Accounts", starter: "—", professional: "—", enterprise: "✓ Roles & permissions" },
  { name: "API Integrations", starter: "Basic", professional: "Selected integrations", enterprise: "Custom integrations" },
  { name: "Post-Launch Support", starter: "30 Days", professional: "90 Days Priority", enterprise: "Custom maintenance plan" },
  { name: "Deployment", starter: "Managed hosting", professional: "Managed hosting", enterprise: "Hosting / VPS / Self-hosting" },
];

const FAQS = [
  {
    q: "What is included in the website price?",
    a: "The package price covers website design and development based on the listed scope. Domain and hosting are included where stated. Custom features outside the package may require an additional quote.",
  },
  {
    q: "Do I need to know how to code to manage my website?",
    a: "No. The Professional CMS package includes an admin dashboard where you can manage pages, posts, images and other supported content without editing code.",
  },
  {
    q: "What is the difference between the Starter and Professional packages?",
    a: "Starter is best for a company profile or service website with mostly evergreen content. Professional adds a full CMS dashboard so your team can regularly update content, publish posts and manage images.",
  },
  {
    q: "Can you build an online store or payment system?",
    a: "Yes. E-commerce, online payments, user accounts, booking systems and custom integrations are available under the Enterprise Web Solution package and are priced according to scope.",
  },
  {
    q: "Do you provide hosting and a domain?",
    a: "Yes. The Starter and Professional packages include a free .co.tz domain and hosting space as listed. Enterprise hosting can be provided on suitable infrastructure or deployed to your own VPS/self-hosting environment.",
  },
  {
    q: "What happens after the website goes live?",
    a: "We provide the support period included in your package. After that, you can continue with an annual hosting and maintenance plan for updates, monitoring, backups, security and technical support.",
  },
  {
    q: "Can I request features that are not listed?",
    a: "Absolutely. Tell us what your business needs and we can prepare a custom proposal for additional pages, integrations, dashboards, APIs, automation or other functionality.",
  },
];

export function PricingPage({ onOpenProject }) {
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
            <p className="section-eyebrow">Simple & Transparent</p>
            <h1 className="pricing-title">
              Website solutions built for <span className="gradient-text">business growth</span>
            </h1>
            <p className="pricing-sub">
              Choose the right website package for your business. Clear deliverables, professional design, secure hosting, SEO, and reliable support — with no confusing pricing.
            </p>

            <div className="pricing-note">
              <span>One-time website development</span>
              <span>•</span>
              <span>Hosting & maintenance renew annually</span>
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Cards Grid */}
      <section className="pricing-tiers-section">
        <div className="container">
          <div className="pricing-grid">
            {PRICING_TIERS.map((tier) => {
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
                    <div className="price-display custom">
                      <span className="price-amount">{tier.projectBase}</span>
                    </div>
                    <p className="price-subtext">
                      {tier.id === "enterprise"
                        ? "Final price depends on system scope, integrations and infrastructure."
                        : "One-time development fee. Hosting & maintenance renew separately."}
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
              Compare the packages at a glance and choose the level of website functionality your business needs.
            </p>
          </div>

          <div className="table-responsive-wrapper" data-animate="fade-up">
            <table className="pricing-comparison-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Business Starter</th>
                  <th className="highlight-col">Professional CMS</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((item, i) => (
                  <tr key={i}>
                    <td className="feature-name">{item.name}</td>
                    <td>{item.starter}</td>
                    <td className="highlight-col">{item.professional}</td>
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
            <div className="cta-badge">Custom Website</div>
            <h2 className="cta-title">Need something more than a standard website?</h2>
            <p className="cta-desc">
              Tell us about your business, required features and goals. We’ll recommend the right package or prepare a custom proposal.
            </p>
            <div className="cta-buttons">
              <button className="btn-white" onClick={onOpenProject}>
                Request a Custom Quote
              </button>
              <Link href="/contact" className="btn-outline-white">
                Contact SealTech
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}