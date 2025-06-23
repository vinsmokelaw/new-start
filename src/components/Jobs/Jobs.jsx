import React from 'react';
import './Jobs.css';
import img1 from '../../assets/pictures/Group 7.png';

const Jobs = () => (
  <section className="jobs-section">
    <div className="jobs-content">
      <h2>You Have A Job For Us?</h2>
      <p>
        If you have a job opportunity in the construction industry, we want to hear from you! Use the form below to share the details of your project, and let us help you connect with the right professionals. Your submission can make a difference in finding the perfect candidates to get the job done!
      </p>
    </div>
    <div className="jobs-images">
      <img src={img1} alt="Our Team Collage" className="jobs-collage-img" />
    </div>
  </section>
);

export default Jobs;
