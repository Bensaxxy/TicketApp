import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="page-container">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">TicketApp</h1>
          <p className="hero-sub">
            Manage support tickets effortlessly — built for the Frontend Wizards
            challenge.
          </p>
          <div className="hero-cta">
            <Link to="/auth/login" className="btn">
              Login
            </Link>
            <Link to="/auth/signup" className="btn btn-outline">
              Get Started
            </Link>
          </div>
        </div>

        {/* decorative circle */}
        <div className="circle circle-1" aria-hidden></div>
        <div className="circle circle-2" aria-hidden></div>

        {/* wave svg at bottom */}
        <svg
          className="hero-wave"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,30 C200,90 400,0 720,40 C1040,80 1200,20 1440,60 L1440,150 L0,150 Z"
            fill="#ffffff"
          />
        </svg>
      </header>

      <section className="features">
        <div className="card">Fast Ticket CRUD</div>
        <div className="card">Secure (mock) Auth</div>
        <div className="card">Accessible & Responsive</div>
      </section>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} TicketApp — Built for Frontend Wizards
        </p>
      </footer>
    </main>
  );
}
