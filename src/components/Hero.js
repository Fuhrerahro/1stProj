import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const handleScroll = () => {
    const nextSection = document.querySelector(".featured");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Luxury Living, Redefined</h1>
          <p>
            Discover the Philippines’ most exclusive homes, curated for those
            who value elegance, privacy, and sophistication.
          </p>
          <div className="hero-buttons">
            <Link to="/properties" className="btn primary">
              Browse Properties
            </Link>
            <Link to="/contact" className="btn secondary">
              Contact an Agent
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={handleScroll}>
          <span className="arrow">↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
