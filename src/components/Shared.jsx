import { Link } from "./Link.jsx";

export function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="section-header" data-animate="fade-up">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
}

export function AuthorAvatar({ post }) {
  return (
    <div
      className="author-avatar"
      style={{
        background: `linear-gradient(135deg, ${post.authorColor}, ${post.authorColor}99)`,
      }}
    >
      {post.authorInitials}
    </div>
  );
}

export function Loading({ label }) {
  return (
    <div className="blog-loading">
      <div className="blog-loading-spinner"></div>
      <p>{label}</p>
    </div>
  );
}

export function ErrorState({ message }) {
  return (
    <div className="post-error">
      <h2>Something went wrong</h2>
      <p>{message}</p>
      <Link href="/" className="btn-primary">
        Back Home
      </Link>
    </div>
  );
}

export function Field({ name, label, type = "text", required = false, compact = false }) {
  const className = compact ? "project-modal-field" : "form-group";
  return (
    <div className={className}>
      <label className={compact ? "" : "form-label"} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={compact ? "" : "form-input"}
        required={required}
      />
    </div>
  );
}
