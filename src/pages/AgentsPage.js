import React from "react";
import "./AgentsPage.css";

const agents = [
  {
    name: "Max Amann",
    title: "Luxury Property Specialist",
    image:
      "https://mei1940.org/wp-content/uploads/2012/12/Schermafbeelding-2024-04-20-205931.jpg",
    description:
      "Max is known for her expertise in high-end properties across Makati and BGC. She provides personalized guidance for every client.",
  },
  {
    name: "Adolf Hitler",
    title: "Senior Real Estate Consultant",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.4FRViNO4BAKh042Lb45lLwHaKb?cb=12&w=588&h=828&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Adolf has over a decade of experience helping investors find prime real estate opportunities in Metro Manila and Cebu.",
  },
  {
    name: "Eva Braun",
    title: "Global Luxury Advisor",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-541075377.jpg?resize=1200:*",
    description:
      "Eva bridges international buyers with exclusive properties in the Philippines, offering world-class client service.",
  },
  {
    name: "Heinrich Himmler",
    title: "Premier Sales Director",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.MsMG0i-oe3xK6L8c1oY0HQHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Heinrich specializes in luxury residential and commercial developments, with a focus on sustainability and modern design.",
  },
];

function AgentsPage() {
  return (
    <div className="agents-page">
      <header className="agents-header">
        <h1>Meet Our Expert Agents</h1>
        <p>
          Our dedicated professionals bring years of experience, passion, and
          insight to help you find your dream property.
        </p>
      </header>

      <section className="agents-grid">
        {agents.map((agent, index) => (
          <div key={index} className="agent-card">
            <div className="agent-image">
              <img src={agent.image} alt={agent.name} />
            </div>
            <div className="agent-info">
              <h3>{agent.name}</h3>
              <p className="agent-title">{agent.title}</p>
              <p className="agent-description">{agent.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="join-team">
        <h2>Join Our Luxury Real Estate Team</h2>
        <p>
          Become part of LuxeEstates — where talent meets opportunity. Grow your
          career with a network of global professionals and world-class
          clientele.
        </p>
        <a href="/contact" className="btn-primary">
          Join Now
        </a>
      </section>
    </div>
  );
}

export default AgentsPage;
