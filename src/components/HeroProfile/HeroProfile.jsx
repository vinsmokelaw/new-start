import React from 'react';
import './HeroProfile.css';
import heroImg from '../../assets/pictures/daniel.png'; // Replace with your image path

const HeroProfile = () => {
  return (
    <section className="hero-profile">
      <div className="hero-left">
        <h2>Meet Daniel, Your Trusted Plumber</h2>
        <p>Age : 55 years</p>
        <p>Location : Harare, Mufakose</p>
        <p>Other skills : Painter, Carpenter</p>
      </div>
      <div className="hero-right">
        {/* Experience bubble */}
        <div className="exp-bubble">
          <span className="exp-number">10+</span>
          <span className="exp-label">Year of Experience</span>
        </div>
        {/* Main hero image with shape below */}
        <div className="hero-img-container">
          <img src={heroImg} alt="Daniel the plumber" className="center-hero-img no-bg" />
          <div className="img-shape"></div>
        </div>
        {/* Reviews */}
        <div className="reviews-section">
          <div className="review-avatars">
            <div className="avatar avatar1"></div>
            <div className="avatar avatar2"></div>
            <div className="avatar avatar3"></div>
          </div>
          <div className="total-reviews">
            <span>Total reviews</span>
            <div className="stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>☆</span>
              <span className="review-count">215</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProfile;