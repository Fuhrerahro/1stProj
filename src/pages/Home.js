// src/pages/Home.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import properties from "../data/properties";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Agents from "../components/Agents";
import Newsletter from "../components/Newsletter";
import CTASection from "../components/CTASection";
import "./Home.css";

function Home() {
  const featured = properties.slice(0, 3);
  const navigate = useNavigate();

  const handleLocationClick = (location) => {
    navigate(`/properties?location=${encodeURIComponent(location)}`);
  };

  return (
    <div className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section id="hero">
        <Hero />
      </section>

      {/* ===== SHOWCASE SECTION ===== */}
      <section className="showcase">
        <div className="showcase-content">
          <h2>Discover Timeless Luxury</h2>
          <p>
            Step into a world where architecture meets artistry — where each residence
            tells a story of elegance, design, and distinction. Explore estates,
            penthouses, and villas curated for those who seek the extraordinary.
          </p>
          <Link to="/properties" className="btn-primary">
            Explore Properties
          </Link>
        </div>
      </section>

      {/* ===== FEATURED PROPERTIES ===== */}
      <section className="featured">
        <h2 className="section-title">Featured Properties</h2>
        <p className="section-subtitle">
          Handpicked estates that represent the finest in modern living.
        </p>

        <div className="featured-grid">
          {featured.map((property) => (
            <Link
              key={property.id}
              to={`/property/${property.id}`}
              className="featured-card"
            >
              <div className="featured-image">
                <img src={property.image} alt={property.title} />
                <div className="price-tag">₱{property.price.toLocaleString()}</div>
              </div>
              <div className="featured-info">
                <h3>{property.title}</h3>
                <p className="location">{property.location}</p>
                <p className="meta">
                  {property.beds || 3} Beds • {property.baths || 2} Baths •{" "}
                  {property.area || "250"} m²
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="see-more">
          <Link to="/properties" className="btn-secondary">
            View All Properties →
          </Link>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section id="whychooseus">
        <WhyChooseUs />
      </section>

      {/* ===== LUXURY DESTINATIONS ===== */}
      <section className="locations">
        <h2 className="section-title">Explore Luxury Destinations</h2>
        <p className="section-subtitle">
          Discover the Philippines’ most desirable real estate markets.
        </p>

        <div className="locations-grid">
          {[
            {
              name: "Makati",
              img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Cebu",
              img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Tagaytay",
              img: "https://tse2.mm.bing.net/th/id/OIP.1lDukKdx4ILFT5O8wuIm7gAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
              name: "Palawan",
              img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
            },
          ].map((loc) => (
            <div
              key={loc.name}
              className="location-card"
              style={{ backgroundImage: `url(${loc.img})` }}
              onClick={() => handleLocationClick(loc.name)}
            >
              <div className="overlay">
                <h3>{loc.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* ===== MEET OUR AGENTS ===== */}
      <section id="agents">
        <Agents />
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="insights" id="insights">
        <h2 className="section-title">Luxury Insights</h2>
        <p className="section-subtitle">
          Expert perspectives on the evolving world of real estate and modern living.
        </p>

        <div className="insights-grid">
          {[
            {
              title: "2025 Real Estate Market Trends",
              desc: "Explore how international buyers are redefining the Philippines’ premium property landscape.",
              img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
              category: "Market Trends",
            },
            {
              title: "Modern Luxury Interior Design",
              desc: "Discover timeless design philosophies shaping the next generation of luxury homes.",
              img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
              category: "Design",
            },
          ].map((item, index) => (
            <div key={index} className="insight-card">
              <img src={item.img} alt={item.title} />
              <div className="insight-info">
                <span className="category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link to="/blog" className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section id="newsletter">
        <Newsletter />
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section id="contact">
        <CTASection />
      </section>
    </div>
  );
}

export default Home;
