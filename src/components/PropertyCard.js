import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} className="property-image" />
      <h2>{property.title}</h2>
      <p>{property.location}</p>
      <p>₱ {property.price.toLocaleString()}</p>
      <Link to={`/property/${property.id}`}>View Details</Link>
    </div>
  );
}

export default PropertyCard;
