import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-overlay">
        <div className="newsletter-content">
          <h2>Stay Updated on Exclusive Properties</h2>
          <p>
            Join our newsletter to receive curated luxury listings and market
            insights directly in your inbox.
          </p>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
