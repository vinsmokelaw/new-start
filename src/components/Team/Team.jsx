import React from 'react';
import './Team.css';
import img1 from '../../assets/pictures/Group 6.png';

const Team = () => (
  <section className="team-section">
    <div className="team-images">
      <img src={img1} alt="Our Team Collage" className="team-collage-img" />
    </div>
    <div className="team-content">
      <h2>Meet Our Team</h2>
      <p>
        At Buildlink Zimbabwe, our dedicated team is committed to connecting you with the best professionals in the industry. With diverse backgrounds in construction, technology, and customer service, we work tirelessly to ensure a seamless experience for our users. Each member brings expertise and passion, making it our mission to foster trust and reliability in every connection. Together, we're building a community that prioritizes quality and service.
      </p>
    </div>
  </section>
);

export default Team;
