import { Link } from "../components/Link.jsx";
import { ContactForm } from "../components/Blog.jsx";

function ContactInfo() {
  return (
    <div className="contact-info-card">
      <h3>Contact Information</h3>
      <div className="contact-info-items">
        <div className="contact-info-item">
          <div className="contact-info-icon">⌖</div>
          <div>
            <span className="contact-info-label">Office Address</span>
            <span className="contact-info-value">
              Kijitonyama
              <br />
              Dar es Salaam, Tanzania
            </span>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="contact-info-icon">✉</div>
          <div>
            <span className="contact-info-label">Email Us</span>
            <a
              href="mailto:info@sealtech.com"
              className="contact-info-value contact-info-link"
            >
              info@sealtech.com
            </a>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="contact-info-icon">☎</div>
          <div>
            <span className="contact-info-label">Call / WhatsApp</span>
            <a
              href="tel:+255700000000"
              className="contact-info-value contact-info-link"
            >
              +255 700 000 000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  return (
    <main>
      <header className="contact-hero">
        <div className="contact-hero-bg">
          <div className="blob blob-1"></div>
          <div className="grid-overlay"></div>
        </div>
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>Contact</span>
          </nav>
          <div className="contact-hero-content" data-animate="fade-up">
            <p className="section-eyebrow">Get In Touch</p>
            <h1 className="contact-hero-title">
              Let's build something
              <br />
              <span className="gradient-text">great together</span>
            </h1>
            <p className="contact-hero-desc">
              Tell us about your project. The form below posts directly to your
              configured contact API.
            </p>
          </div>
        </div>
      </header>
      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-col">
              <ContactForm />
            </div>
            <div className="contact-info-col">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
