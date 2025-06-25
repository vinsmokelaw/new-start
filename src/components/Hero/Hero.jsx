import React from 'react';
import './Hero.css';
import Button from '../../components/Buttons/Button'; // adjust path if needed

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        {/* Full-section overlay */}
        <div className="hero-overlay"></div>

        {/* Background image */}
        <img 
          className="hero-background" 
          src="src/assets/pictures/Rectangle 4 (1).png" 
          alt="Professional handyman at work" 
        />

        {/* Text and button */}
        <div className="hero-text-content">
          <h1 className="hero-heading">
            Get <span>Quality</span> Service from <span>Verified</span> Experts!
          </h1>
          <p className="hero-subtext">
            "Welcome to BuildLink! We turn your visions into reality with our skilled handyman services. From quick repairs to full renovations, our experienced team prioritizes quality and customer satisfaction. Let us handle the heavy lifting—contact us today for a free consultation!"
          </p>

          {/* Reusable Button */}
          <Button btn={{ text: "Connect" }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
