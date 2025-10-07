// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Define navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Agents", path: "/agents" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* ===== Brand / Logo ===== */}
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          XAil<span>Estates</span>
        </Link>

        {/* ===== Mobile Hamburger Menu ===== */}
        <div
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* ===== Navigation Links ===== */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-item ${
                  location.pathname === link.path ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* ===== CTA Button ===== */}
          <li>
            <Link
              to="/contact"
              className="btn-primary nav-btn"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
