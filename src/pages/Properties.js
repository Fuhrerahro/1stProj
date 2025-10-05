import React from "react";
import { Link } from "react-router-dom";
import properties from "../data/properties";
import "./Properties.css";

function Properties() {
  return (
    <div className="properties">
      <h2>Available Properties</h2>

      <div className="properties-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img
              src={property.image}
              alt={property.title}
              className="property-image"
            />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p className="location">{property.location}</p>
              <p className="price">₱ {property.price.toLocaleString()}</p>
              <p className="description">{property.description}</p>

              <Link to={`/property/${property.id}`} className="btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
