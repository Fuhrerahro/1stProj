import React from "react";
import "./CTASection.css"; // make sure this matches your file name and folder

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Your Dream Home Awaits</h2>
        <p>
          Allow our expert team to guide you toward a life of sophistication and serenity —
          one home at a time.
        </p>
        <button className="cta-button">Contact Our Team</button>
      </div>
    </section>
  );
};

export default CTASection;
