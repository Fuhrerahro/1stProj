import React from "react";
import "../pages/Home.css";

function WhyChooseUs() {
  const reasons = [
    {
      icon: "🏡",
      title: "Trusted Listings",
      desc: "Every property we showcase is verified for authenticity and updated in real time.",
    },
    {
      icon: "💼",
      title: "Professional Agents",
      desc: "Our elite real estate specialists provide expert advice with integrity and care.",
    },
    {
      icon: "⚡",
      title: "Fast Transactions",
      desc: "We handle each transaction with speed and precision — from inquiry to closing.",
    },
    {
      icon: "🌍",
      title: "Global Network",
      desc: "We connect international buyers and investors to prime Philippine properties.",
    },
    {
      icon: "🏆",
      title: "Award-Winning Service",
      desc: "Recognized for excellence, our agency delivers unmatched client satisfaction.",
    },
    {
      icon: "✨",
      title: "Tailored Experiences",
      desc: "We craft personalized buying and selling experiences designed to meet your unique lifestyle.",
    },
  ];

  return (
    <section className="why-choose">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="why-grid">
        {reasons.map((item, index) => (
          <div key={index} className="why-card">
            <div
              className="why-icon"
              style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
            >
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
