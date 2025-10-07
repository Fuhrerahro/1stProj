import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  if (!property) return null;

  return (
    <div className="property-card shadow-lg rounded-2xl overflow-hidden bg-white transition-transform hover:scale-105 hover:shadow-xl">
      <img
        src={property.image}
        alt={property.title}
        className="property-image w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{property.title}</h2>
        <p className="text-sm text-gray-500">{property.location}</p>
        <p className="text-green-700 font-bold mt-2">
          ₱ {property.price.toLocaleString()}
        </p>
        <Link
          to={`/property/${property.id}`}
          className="inline-block mt-3 text-sm text-white bg-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;
