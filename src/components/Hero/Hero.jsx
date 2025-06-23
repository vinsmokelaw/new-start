import React from 'react'
import './Hero.css';
// Assuming you have a global App.css for general styles

const Hero = () => {
  return (
    <section className="hero-section">
      <div className='hero-overlay'></div>
      <div className="hero-image-container">
        <img 
          className='hero-background' 
          src="src/assets/pictures/Rectangle 4 (1).png" 
          alt="Professional handyman at work" 
        />
        <div className="hero-text-content">
          <h1 className='hero-heading'>
            Get <span>Quality</span> Service from <span>Verified</span> Experts!
          </h1>
          <p className='hero-subtext'>
            "Welcome to BuildLink! We turn your visions into reality with our skilled handyman services. From quick repairs to full renovations, our experienced team prioritizes quality and customer satisfaction. Let us handle the heavy lifting—contact us today for a free consultation!"
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero;