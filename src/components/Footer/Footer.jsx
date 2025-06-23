import React from 'react'
import {Link } from "react-router-dom"
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="flex items">
            <div className="row">
                <div className="col-sm-6 col-lg-3 col-md-3  centerItems">
                    <div className="footerlogo">
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 col-md-3  centerItems">
                 <div className="footerlinks">
                  <h4>Quick Links</h4>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Handyman</Link>
                    <Link>Companies</Link>
                 </div>
                </div>
                <div className="col-sm-6 col-lg-3 col-md-3  centerItems">
              <div className="footerlink">
                  <h4>Handyman</h4>
                    <Link>Plumber</Link>
                    <Link>Eletrician</Link>
                    <Link>Builder</Link>
                 </div>
                </div>
                <div className="col-sm-6 col-lg-3 col-md-3  centerItems">
               <div className="footerlinks">
                  <h4>Companies</h4>
                    <Link>Construction Companies</Link>
                    <Link>Electrical Specialists</Link>
                    <Link>Plumber Specialists</Link>
                    <Link>Builder Specialists</Link>
                 </div>
                </div>
            </div>
        </div>
        <div className="copyright row">
         <div className="col-md-4">
           <p>www.buildlink@gmail.com</p>
         </div>
         <div className="col-md-4 socialsFooter">
     <div className="socialIcon">
      <p>🔗</p>
       <p>linkedin</p>
     </div>
      <div className="socialIcon">
      <p>🔗</p>
       <p>instagram</p>
     </div>
     <div className="socialIcon">
      <p>🔗</p>
       <p>twitter</p>
     </div>
    <div className="socialIcon">
      <p>🔗</p>
       <p>facebook</p>
     </div>
         </div>
         <div className="col-md-4"></div>
        </div>
      
    </div>
  )
}

export default Footer