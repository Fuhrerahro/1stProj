import React from "react";
import Hero from "../components/Hero";
import properties from "../data/properties";
import "./Home.css";

function Home() {
  const featured = properties.slice(0, 3); // show first 3 as featured

  return (
    <div className="home-page">
      {/* Professional Hero Section */}
      <Hero />

      {/* Featured Properties */}
      <section className="featured">
        <h2 className="section-title">Featured Properties</h2>
        <div className="featured-grid">
          {featured.map((property) => (
            <div key={property.id} className="featured-card">
              <img src={property.image} alt={property.title} />
              <div className="card-info">
                <h3>{property.title}</h3>
                <p className="location">{property.location}</p>
                <p className="price">₱{property.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="about">
        <h2 className="section-title">About Us</h2>
        <p>
          We help families and investors find the perfect property across the
          Philippines. From luxury condos to cozy bungalows, we make real estate
          simple, transparent, and reliable.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>🏡 Trusted Listings</h3>
            <p>All our properties are verified and updated regularly.</p>
          </div>
          <div className="why-card">
            <h3>⚡ Fast Transactions</h3>
            <p>We ensure a smooth and hassle-free buying process.</p>
          </div>
          <div className="why-card">
            <h3>💼 Professional Agents</h3>
            <p>Our expert team is ready to assist you anytime.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="cta-overlay">
          <h2>Find Your Dream Home Today</h2>
          <a href="/properties" className="btn-primary">
            Browse Properties
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
