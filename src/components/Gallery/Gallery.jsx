import React from 'react';
import './Gallery.css';
import img1 from '../../assets/pictures/plumb1.png';
import img2 from '../../assets/pictures/plumb2.png';
import img3 from '../../assets/pictures/plumb3.png';

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h3>Gallery</h3>
      <div className="gallery-grid">
        <img src={img1} alt="Job 1" />
        <img src={img2} alt="Job 2" />
        <img src={img3} alt="Job 3" />
      </div>
      <button className="see-all">See All</button>
    </section>
  );
};

export default Gallery;
