// src/pages/Properties.js
import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import properties from "../data/properties";
import "./Properties.css";

function Properties() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterLocation = queryParams.get("location");

  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const resultsRef = useRef(null);

  // ===== Filtered Properties =====
  const filteredProperties = properties.filter((p) => {
    const matchLocation = filterLocation
      ? p.location.toLowerCase() === filterLocation.toLowerCase()
      : true;

    const matchSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchLocation && matchSearch;
  });

  // ===== Suggestions (Google-style) =====
  const suggestions = properties.filter(
    (p) =>
      searchTerm &&
      (p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSelectSuggestion = (value) => {
    setSearchTerm(value);
    setShowSuggestions(false);
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="properties-page">
      {/* ===== Header Section ===== */}
      <header className="properties-header">
        <h1>Find Your Dream Home</h1>
        <p>Explore luxurious homes, villas, and penthouses across the Philippines.</p>

        {/* ===== Search Bar ===== */}
        <div className="search-bar" style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search by property name or city..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            onFocus={() => setShowSuggestions(true)}
          />

          {/* ===== Google-like Suggestions Dropdown ===== */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="suggestions-dropdown">
              {suggestions.slice(0, 5).map((s) => (
                <li
                  key={s.id}
                  onClick={() => handleSelectSuggestion(s.title)}
                  className="suggestion-item"
                >
                  <span className="suggestion-title">{s.title}</span>
                  <span className="suggestion-location">• {s.location}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ===== Active Location Filter ===== */}
        {filterLocation && (
          <div className="filter-info">
            <p>
              Showing properties in <strong>{filterLocation}</strong>
            </p>
            <Link to="/properties" className="btn-clear-filter">
              Clear Filter
            </Link>
          </div>
        )}
      </header>

      {/* ===== Property Grid ===== */}
      <div ref={resultsRef} className="properties-grid">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Link
              key={property.id}
              to={`/property/${property.id}`}
              className="property-card"
            >
              <div className="property-image-wrapper">
                <img
                  src={property.image}
                  alt={property.title}
                  className="property-image"
                />
                <div className="property-price-overlay">
                  ₱ {property.price.toLocaleString()}
                </div>
              </div>

              <div className="property-info">
                <h3>{property.title}</h3>
                <p className="location">{property.location}</p>
                <p className="description">{property.description}</p>

                <div className="property-meta">
                  <span>{property.beds || 3} Beds</span> •{" "}
                  <span>{property.baths || 2} Baths</span> •{" "}
                  <span>{property.area || "250"} m²</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-results">No properties found.</p>
        )}
      </div>
    </div>
  );
}

export default Properties;
