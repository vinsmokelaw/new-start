// src/pages/LandingPage.jsx
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero2 from '../components/Hero2/Hero2';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import OurServices from '../components/OurServices/OurServices';
import Testimonials from '../components/Testimonials/Testimonials';
import Team from '../components/Team/Team';
import Jobs from '../components/Jobs/Jobs';
import Footer from '../components/Footer/Footer2';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <Hero2 />
      <OurServices showHeader={false} />
      <OurServices showHeader={false} />
      <Jobs />
      <Footer />
    </div>
  );
};

export default LandingPage;
