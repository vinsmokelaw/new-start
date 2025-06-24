import React from 'react'
import './About1.css'
import Card from '../../assets/pictures/group 15.png'
import Card2 from '../../assets/pictures/group 16.png'
import Card3 from '../../assets/pictures/group 20.png'

const About1 = () => {
  return (
    <section>
        
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
    </section>
  )
}

export default About1