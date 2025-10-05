import React from "react";
import { useParams, Link } from "react-router-dom";
import properties from "../data/properties";
import "./PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="property-details not-found">
        <h2>Property Not Found</h2>
        <Link to="/properties" className="back-btn">← Back to Listings</Link>
      </div>
    );
  }

  return (
    <div className="property-details">
      <div className="property-image-container">
        <img
          src={property.image}
          alt={property.title}
          className="property-main-image"
        />
      </div>

      <div className="property-content">
        <h1 className="property-title">{property.title}</h1>
        <p className="property-location">{property.location}</p>
        <p className="property-price">₱ {property.price.toLocaleString()}</p>
        <p className="property-description">{property.description}</p>

        <div className="property-buttons">
          <Link to="/properties" className="back-btn">
            ← Back to Listings
          </Link>
          <button className="inquire-btn">Inquire Now</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
