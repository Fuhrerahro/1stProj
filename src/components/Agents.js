import React from "react";
import "../pages/Home.css";


const Agents = () => {
  const agents = [
    {
      name: "Olivia Grant",
      title: "Senior Real Estate Advisor",
      img: "https://th.bing.com/th/id/OIP.o-9gFlH9Pf6t1zW4UKcC3wHaJk?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Ethan Parker",
      title: "Luxury Property Specialist",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sophia Reynolds",
      title: "International Property Expert",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="featured" id="agents">
      <h2 className="section-title">Meet Our Experts</h2>
      <div className="featured-grid">
        {agents.map((agent, i) => (
          <div key={i} className="featured-card">
            <img src={agent.img} alt={agent.name} />
            <div className="card-info">
              <h3>{agent.name}</h3>
              <p className="location">{agent.title}</p>
              <p className="price">★★★★★</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agents;
