import React from "react";
import '../Style/aboutUs.css';

function AboutUs() {
  return (
    <footer className="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
      <nav className="social" aria-labelledby="social-heading">
        <h3 id="social-heading" className="sr-only">Follow us on social media</h3>
        <a href="https://www.facebook.com" aria-label="Facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://mastodon.social" aria-label="Mastodon">
          <i className="fa-brands fa-mastodon"></i>
        </a>
        <a href="https://www.instagram.com" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </nav>
      <hr className="footer-break" />
      <nav className="footer-links" aria-labelledby="footer-links-heading">
        <h3 id="footer-links-heading" className="sr-only">Footer Links</h3>
        <ul>
          <li><a href="/">Site Home</a></li>
          <li><a href="/playground">Playground</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
          <li><a href="/contents">Contents</a></li>
        </ul>
      </nav>
      <p className="copyright">
        © 2024 <a style={{ color: 'inherit' }} href="https://www.sdavidprince.space">SDavidPrince</a>. Demo of a footer. Some Rights Reserved.
      </p>
    </footer>
  );
}

export default AboutUs;
