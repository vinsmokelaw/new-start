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
import About1 from '../components/About1/About1';
import Team2 from '../components/Team2/Team2';
import '../components/About1/About1.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
        <NavBar />
        <Hero2 />
        <About1 />
        <Experience />
        <Team2 />

    </div>
  );
};

export default LandingPage;