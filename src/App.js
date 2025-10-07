// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// ===== Layout Components =====
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ===== Pages =====
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import AgentsPage from "./pages/AgentsPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {/* ===== Navbar (Visible on all pages) ===== */}
      <Navbar />

      {/* ===== Page Routes ===== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ===== Footer (Visible on all pages) ===== */}
      <Footer />
    </>
  );
}

export default App;
