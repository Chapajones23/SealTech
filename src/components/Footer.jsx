import { Logo, Link } from "./Link.jsx";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p className="footer-tagline">
              Engineering excellence
              <br />
              for Africa's digital future.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="/#services">Web Development</a>
              </li>
              <li>
                <a href="/#services">Custom Software</a>
              </li>
              <li>
                <a href="/#services">Mobile Apps</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about.html">About Us</Link>
              </li>
              <li>
                <Link href="/blog.html">Blog</Link>
              </li>
              <li>
                <Link href="/contact.html">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href="/privacy.html">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms.html">Terms of Service</Link>
              </li>
              <li>
                <Link href="/security.html">Security</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© SealTech 2026. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy.html">Privacy</Link>
            <Link href="/terms.html">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
