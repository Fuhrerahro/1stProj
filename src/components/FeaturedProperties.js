import React from "react";
import "./FeaturedProperties.css";

const properties = [
  {
    id: 1,
    title: "Modern Villa in Cebu",
    price: "₱45,000,000",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Luxury Condo in Makati",
    price: "₱25,000,000",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: 3,
    title: "Beachfront Home in Palawan",
    price: "₱80,000,000",
    img: "https://images.unsplash.com/photo-1560185008-5dc3d0cec0c9",
  },
];

function FeaturedProperties() {
  return (
    <section className="featured">
      <h2>Featured Properties</h2>
      <div className="property-grid">
        {properties.map((p) => (
          <div key={p.id} className="property-card">
            <img src={p.img} alt={p.title} />
            <div className="property-info">
              <h3>{p.title}</h3>
              <p>{p.price}</p>
              <a href={`/property/${p.id}`} className="btn-view">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProperties;
