import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("properties-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Find Your Dream Home Today</h1>
          <p>
            Browse through our handpicked selection of beautiful homes, condos,
            and villas across the Philippines.
          </p>
          <div className="hero-buttons">
            <Link to="/properties" className="btn primary">
              Browse Properties
            </Link>
            <Link to="/contact" className="btn secondary">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom fade + scroll indicator */}
        <div className="hero-bottom-gradient"></div>
        <div className="scroll-indicator" onClick={handleScroll}>
          <span className="arrow">↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
