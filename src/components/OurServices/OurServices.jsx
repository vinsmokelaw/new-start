import React from 'react';
import './OurServices.css';
import Card from "../../assets/pictures/Card.png";
import Card2 from "../../assets/pictures/Card2.png";
import Card3 from "../../assets/pictures/Card3.png";


const OurServices = ({ showHeader = true }) => {
  return (
    <div className="services-container">
      {showHeader && (
        <div className="services-header">
          <h1 className="services-title">Our Services</h1>
          <p className="services-description">
            Buildlink Zimbabwe connects you with verified professionals for all your construction, plumbing, and electrical needs. Whether it’s a quick repair or a major project, our platform helps you find, compare, and hire the right experts for quality and reliability.
          </p>
        </div>
      )}

      <div className="services-cards">
        {/* Card 1 */}
        <div className="service-card">
          <div className="card-background-layer"></div>
          <img src={Card} alt="Construction" className="card-image" />
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <div className="card-background-layer"></div>
          <img src={Card2} alt="Plumbing" className="card-image" />
        </div>

        {/* Card 3 */}
        <div className="service-card">
          <div className="card-background-layer"></div>
          <img src={Card3} alt="Electrical" className="card-image" />
        </div>
      </div>
    </div>
  );
};
export default OurServices;
