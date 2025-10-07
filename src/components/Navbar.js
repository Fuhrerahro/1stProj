// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Agents", path: "/agents" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 80) {
        setIsHidden(true); // scrolling down
      } else {
        setIsHidden(false); // scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isHidden ? "hidden" : ""}`}>
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
