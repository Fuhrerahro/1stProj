// src/pages/Contact.js
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or want to schedule a viewing? Send us a message!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>Email: xavierali76@gmail.com</p>
          <p>Phone: +63 956 650 4030</p>
          <p>
            Address: 058 J.P Rizal Street Sala, Cabuyao, Laguna, Philippines
          </p>
        </div>
      </section>

      {/* ===== GOOGLE MAP SECTION ===== */}
      <section className="map-section">
        <h2 className="section-title">Our Office Location</h2>
        <div className="map-container">
          <iframe
            title="LuxeEstates Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.5747653674836!2d121.0206534759438!3d14.55288178594018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90c2dfad58f%3A0x7e61dbde3da10438!2sMakati%20City!5e0!3m2!1sen!2sph!4v1694792000000!5m2!1sen!2sph"
            width="100%"
            height="400"
            style={{ border: "0", borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
