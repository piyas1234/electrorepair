import React from "react";

const Footer = () => {
  return (
    <div className="p-5" style={{ backgroundColor: "#412911" }}>
      <div className="col-md-10 offset-md-1">
        <div className="row">
          <div className="gx-3 col-md-4 col-lg-3 col-sm-6">
            <div className="p-3 text-white">
              <h4>Location</h4>
              <p>netrokona , dahaka , banglasesh.</p>
         </div>
          </div>
          <div className="gx-3 col-md-4 col-lg-3 col-sm-6">
            <div className="p-3 text-white">
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
