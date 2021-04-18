import React from "react";

import location from '../../images/location.png'
import company from '../../images/buildings.png'
import link from '../../images/link.png'
import about from '../../images/information.png'

const Footer = () => {
  return (
    <div className="p-5" style={{ backgroundColor: "#412911" }}>
      <div className="col-md-10 offset-md-1">
        <div className="row">
          <div className="gx-3 col-md-4 col-lg-3 col-sm-6">
            <div className="p-3 text-white">
              <img width="60px" src={location} alt="" srcset=""/>
              <h4>Location</h4>
              <p>netrokona , dahaka , banglasesh.</p>
         </div>
          </div>
          <div className="gx-3 col-md-4 col-lg-3 col-sm-6">
            <div className="p-3 text-white">
            <img width="60px" src={company} alt="" srcset=""/>
              <h4>Company</h4>
              <div className="mt-5">
                <p>About</p>
                <p>Project</p>
                <p>Our Team</p>
                <p>Team conditions</p>
                <p>Submit Listing</p>
              </div>
            </div>
          </div>

          <div className="gx-3 col-md-4 col-lg-3 col-sm-6">
            <div className="p-3 text-white">
            <img width="60px" src={link} alt="" srcset=""/>
              <h4>Quick links</h4>
              <div className="mt-5">
                <p>About</p>
                <p>Project</p>
                <p>Our Team</p>
                <p>Team conditions</p>
                <p>Submit Listing</p>
              </div>
            </div>
          </div>

          <div className="gx-3 col-md-4 col-lg-3 col-sm-6">
            <div className="p-3 text-white text-white">
            <img width="60px" src={about} alt="" srcset=""/>
              <h4>About us</h4>
              <div className="mt-5">
                <p>About</p>
                <p>Project</p>
                <p>Our Team</p>
                <p>Team conditions</p>
                <p>Submit Listing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
