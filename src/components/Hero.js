import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Empower Your Business with Expert <span className="highlight">Consulting Solutions</span>
          </h1>
          <p className="hero-subtitle">
            We specialize in Internal Audit, SOX Compliance, and Data Analytics services to streamline your operations and drive success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
