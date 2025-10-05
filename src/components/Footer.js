import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Find Your Dream Home Today 🏡</h1>
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
      </div>
    </section>
  );
}

export default Hero;
