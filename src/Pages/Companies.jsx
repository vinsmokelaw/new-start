// src/pages/LandingPage.jsx
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import OurServices from '../components/OurServices/OurServices';
import Testimonials from '../components/Testimonials/Testimonials';
import Team from '../components/Team/Team';
import Jobs from '../components/Jobs/Jobs';
import Footer from '../components/Footer/Footer2';
import Companies from '../components/Companies/Companies';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <Companies />
   
    </div>
  );
};

export default LandingPage;
