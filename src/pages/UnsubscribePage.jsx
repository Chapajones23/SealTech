import { useState, useEffect } from "react";
import { Link } from "../components/Link.jsx";
import { unsubscribeNewsletter } from "../services/api.js";

const REASONS = [
  "I receive too many emails",
  "The content is no longer relevant to me",
  "I never signed up for this newsletter",
  "I prefer to follow news elsewhere",
  "Other reason",
];

export function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get("email");
    const tokenParam = params.get("token");

    if (emailParam) {
      setEmail(emailParam);
    }
    if (tokenParam) {
      setToken(tokenParam);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await unsubscribeNewsletter({ email, token, reason });
      setStatus("success");
      setMessage(
        response?.message ||
          `You have been successfully unsubscribed (${email}). We're sorry to see you go!`
      );
    } catch (err) {
      setStatus("error");
      setMessage(
        err.message ||
          "An error occurred while processing your request. Please try again or contact support."
      );
    }
  }

  return (
    <main data-page="unsubscribe">
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
            <span aria-current="page">Newsletter Unsubscribe</span>
          </nav>

          <div className="about-hero-grid">
            <div className="about-hero-left" data-animate="fade-up">
              <p className="section-eyebrow">Newsletter Preferences</p>
              <h1 className="about-title">Unsubscribe from SealTech Insights.</h1>
              <p className="about-sub">
                We're sorry to see you go. Enter your email below to update your communication preferences and stop receiving newsletter updates.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="about-values" id="unsubscribe-form-section">
        <div className="container" style={{ maxWidth: "680px" }}>
          <div className="contact-form-card" data-animate="fade-up">
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    borderRadius: "50%",
                    background: "rgba(16,185,129,0.12)",
                    color: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "12px", color: "var(--text-main, #f8fafc)" }}>
                  Successfully Unsubscribed
                </h3>
                <p style={{ color: "var(--text-muted, #94a3b8)", marginBottom: "28px", lineHeight: "1.6" }}>
                  {message}
                </p>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                  <Link href="/" className="btn-primary">
                    Return to Homepage
                  </Link>
                  <Link href="/blog" className="btn-outline">
                    Browse Insights
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-header">
                  <h2>Confirm Unsubscription</h2>
                  <p>Please confirm the email address you wish to remove from our mailing list.</p>
                </div>

                {status === "error" && (
                  <div
                    style={{
                      padding: "14px 16px",
                      borderRadius: "8px",
                      background: "rgba(239, 68, 68, 0.12)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      color: "#f87171",
                      fontSize: "0.92rem",
                      marginBottom: "20px",
                    }}
                  >
                    {message}
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label" htmlFor="unsubscribe-email">
                    Email Address <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    id="unsubscribe-email"
                    name="email"
                    type="email"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="unsubscribe-reason">
                    Reason for leaving (Optional)
                  </label>
                  <select
                    id="unsubscribe-reason"
                    name="reason"
                    className="form-select"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  >
                    <option value="">Select a reason...</option>
                    {REASONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={status === "loading"}
                  style={{ marginTop: "12px" }}
                >
                  {status === "loading" ? "Processing..." : "Unsubscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
