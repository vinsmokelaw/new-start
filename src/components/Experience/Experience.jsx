import React from 'react';
import './Experience.css';
import houseImg from '../../assets/pictures/Group 4.png';
import { Settings } from 'lucide-react';

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="experience-container">
        {/* Left Column - Image */}
        <div className="experience-left">
          <div className="grouped-wrapper">
            <div className="grouped-image">
              <img src={houseImg} alt="Experience Visual" />
              <div className="experience-number">
                <span className="highlight">15+</span>
                <span className="years-text">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Text */}
        <div className="experience-right">
          <div className="why-choose-us">
            <h4>
              <Settings size={20} color="#FEB300" style={{ marginRight: '5px', verticalAlign: 'middle' }} fontWeight={400}/>
              Why Choose Us?
            </h4>
            <h2>
              "Your <span>Trusted</span> Source for Skilled <span>Professionals!</span>"
            </h2>
            <p>
              We aim to simplify the process of finding trustworthy professionals by
              providing a user-friendly marketplace that prioritizes quality and
              credibility...
            </p>

            <div className="features-list">
              {[
                'Verified Professionals',
                'User-Friendly Experience',
                'Transparent Reviews',
                'Geolocation Services'
              ].map((feature) => (
                <div key={feature} className="feature-item">
                  <Settings size={25} color="#FEB300" style={{ marginRight: '15px', flexShrink: 0 }} />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;