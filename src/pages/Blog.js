import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "2025 Real Estate Market Trends",
      excerpt:
        "Explore how international buyers are redefining the Philippines’ premium property landscape and what it means for investors.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      author: "LuxeEstates Team",
      date: "October 2025",
    },
    {
      id: 2,
      title: "Modern Luxury Interior Design",
      excerpt:
        "Discover timeless design philosophies shaping the next generation of luxury homes across the country.",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      author: "Sophia Martinez",
      date: "September 2025",
    },
    {
      id: 3,
      title: "The Rise of Smart Villas",
      excerpt:
        "Learn how technology is transforming the way luxury properties are designed, lived in, and sold.",
      image:
        "https://th.bing.com/th/id/OIP.Riv5ibRkX_0r7Ia4B43j9QHaEK?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      author: "Ethan Cruz",
      date: "August 2025",
    },
  ];

  return (
    <div className="blog-page">
      {/* ===== Header Section ===== */}
      <header className="blog-header">
        <h1>Luxury Insights & Trends</h1>
        <p>
          Explore expert perspectives on the evolving world of luxury real estate,
          architecture, and modern living.
        </p>
      </header>

      {/* ===== Blog Grid ===== */}
      <section className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>By {post.author}</span> | <span>{post.date}</span>
              </div>
              <Link to={`/blog/${post.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;
