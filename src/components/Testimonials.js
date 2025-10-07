import React, { useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Isabella Cruz",
    feedback:
      "Our experience was beyond expectations — from viewing to closing, everything was handled with professionalism and care.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Liam Santos",
    feedback:
      "They made buying our luxury condo effortless. Truly a five-star service for high-end clients.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sophia Dela Vega",
    feedback:
      "Every detail was handled with precision and elegance. I couldn’t have asked for a smoother experience.",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80",
  },
];

function Testimonials() {
  // Scroll animation
  useEffect(() => {
    const cards = document.querySelectorAll(".testimonial-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-overlay">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Discover why our clients trust us to deliver sophistication and
          excellence in every transaction.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card fade-in">
              <div className="image-wrapper">
                <img src={t.image} alt={t.name} />
              </div>
              <p className="feedback">“{t.feedback}”</p>
              <h4 className="client-name">— {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
