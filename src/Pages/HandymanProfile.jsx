import React from 'react';
import HeroProfile from '../components/HeroProfile/HeroProfile';
import Gallery from '../components/Gallery/Gallery';
import JobPostForm from '../components/JobsPostForm/JobsPostForm';
// import '../styles/HandymanProfile.css';

const HandymanProfile = () => {
  return (
    <div className="handyman-profile-page">
      <HeroProfile />
      <section className="about-daniel">
        <h2>About Daniel</h2>
        <p>
          Daniel is a dedicated <span>plumber</span> 
          specializing in <span>repairs, fittings</span>, 
          and <span>refits</span>, ensuring customer satisfaction with 
          every job. He specializes in residential plumbing, including leak 
          repairs, fixture installations, and drain cleaning. Daniel
           is known for his friendly demeanor and attention to detail,
            making him a trusted choice for families and homeowners. 
            When he's not working, he enjoys DIY projects and spending time with his family.
             Trust Daniel to keep your plumbing in top shape
        </p>
      </section>
      <Gallery />
      <JobPostForm />
    </div>
  );
};

export default HandymanProfile;
