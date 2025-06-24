import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";
import footerBg from '../../assets/pictures/footer.png';
import buildLogo from '../../assets/pictures/buildLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer' style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="flex items">
        <div className="row">
          <div className="col-sm-6 col-lg-3 col-md-3 centerItems">
            <div className="footerlogo" style={{ backgroundImage: `url(${buildLogo})` }}></div>
          </div>
          <div className="col-sm-6 col-lg-3 col-md-3 centerItems">
            <div className="footerlinks">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/handyman">Handyman</Link>
              <Link to="/companies">Companies</Link>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 col-md-3 centerItems">
            <div className="footerlink">
              <h4>Handyman</h4>
              <Link to="/handyman/plumber">Plumber</Link>
              <Link to="/handyman/electrician">Electrician</Link>
              <Link to="/handyman/builder">Builder</Link>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 col-md-3 centerItems">
            <div className="footerlinks">
              <h4>Companies</h4>
              <Link to="/companies/construction">Construction</Link>
              <Link to="/companies/electrical">Electrical</Link>
              <Link to="/companies/plumber">Plumber</Link>
              <Link to="/companies/builder">Builder</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright row">
        <div className="col-md-4">
          <p>www.buildlink@gmail.com</p>
        </div>
        <div className="col-md-4 socialsFooter">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
