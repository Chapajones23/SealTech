import { useState, useEffect } from "react";
import { formatDate, sortPosts } from "../utils/navigation.js";
import { SectionHeader, AuthorAvatar, Loading, ErrorState } from "./Shared.jsx";
import { Link } from "./Link.jsx";
import { submitContact, subscribeNewsletter } from "../services/api.js";

export function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <Link
        href={`/post.html?slug=${post.slug}`}
        className="blog-card-image-link"
      >
        <div
          className="blog-card-image"
          style={{ background: post.imageGradient }}
        >
          <div
            className="blog-card-image-icon"
            dangerouslySetInnerHTML={{ __html: post.imageIcon }}
          />
          <div className="blog-card-category-tag">{post.category}</div>
        </div>
      </Link>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <AuthorAvatar post={post} />
          <div className="blog-card-meta-text">
            <span className="blog-card-author">{post.author}</span>
            <span className="blog-card-date">{formatDate(post.publishDate)}</span>
          </div>
          <span className="blog-card-read-time">{post.readTime}</span>
        </div>
        <h3 className="blog-card-title">
          <Link href={`/post.html?slug=${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-footer">
          <div className="blog-card-tags">
            {post.tags?.slice(0, 2).map((tag) => (
              <span className="blog-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={`/post.html?slug=${post.slug}`}
            className="blog-card-read-more"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}

export function LatestInsights({ posts, loading }) {
  return (
    <section className="latest-insights" id="blog">
      <div className="container">
        <SectionHeader
          eyebrow="From the Blog"
          title={
            <>
              Latest <span className="gradient-text">Insights</span>
            </>
          }
          desc="Deep dives, practical guides, and engineering wisdom from the SealTech team."
        />
        {loading ? (
          <Loading label="Loading articles..." />
        ) : (
          <div className="blog-grid blog-grid--landing">
            {posts.map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
        )}
        <div className="blog-view-all">
          <Link href="/blog.html" className="btn-outline btn-lg">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Newsletter({ compact = false }) {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    try {
      await subscribeNewsletter({ email });
      event.currentTarget.reset();
      setStatus("Subscribed.");
    } catch (error) {
      setStatus(error.message);
    }
  }

  if (compact)
    return (
      <form onSubmit={handleSubmit}>
        <h4>Enjoy this article?</h4>
        <p>Get more like it in your inbox.</p>
        <input
          name="email"
          type="email"
          placeholder="your@email.com"
          className="newsletter-input newsletter-input--sm"
          required
        />
        <button className="btn-primary sidebar-newsletter-button">
          Subscribe
        </button>
        <p>{status}</p>
      </form>
    );

  return (
    <section className="blog-newsletter">
      <div className="container">
        <form className="newsletter-card" onSubmit={handleSubmit}>
          <div className="newsletter-text">
            <h3>Get new articles in your inbox</h3>
            <p>No spam. Engineering insights every two weeks.</p>
          </div>
          <div className="newsletter-form">
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              className="newsletter-input"
              required
            />
            <button className="btn-primary newsletter-btn">Subscribe</button>
          </div>
          <p className="api-status">{status}</p>
        </form>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setPending(true);
    setStatus("");
    const payload = Object.fromEntries(new FormData(event.currentTarget));
    try {
      await submitContact(payload);
      event.currentTarget.reset();
      setStatus("Message sent successfully.");
    } catch (error) {
      setStatus(error.message);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="contact-form-card">
      <div className="contact-form-header">
        <h2>Send us a message</h2>
        <p>Fill in the form and we'll get back to you within one business day.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="company">
              Company / Organization
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="form-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="projectType">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="form-select"
            required
          >
            <option value="">Select a service</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile Application</option>
            <option value="custom">Custom Software</option>
            <option value="cloud">Cloud & DevOps</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="btn-primary form-submit"
          disabled={pending}
        >
          {pending ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <p className="project-modal-message api-status" aria-live="polite">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
