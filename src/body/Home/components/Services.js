import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../images/idea (1).png";
import ProductCard from "../../Shared/ProductCard";

 

const Services = ({ data }) => {
  

  return (
    <div className="py-5" style={{ backgroundColor: "#2D2928" }}>
      <div className="col-md-10 offset-md-1">
        <h4
          style={{
            color: "white",
            fontWeight: "bold",
            width: "300px",
            boxShadow: "4px 4px 4px 4px rgba(255, 255, 255, 0.5)",
          }}
          className="m-auto   text-center   p-3"
        >
          <img width="70px" src={img} alt="" srcset="" />{" "}
          <span>Our Awesome</span> Service
        </h4>

         

        <div className=" mt-5">
          {data && <ProductCard data={data}></ProductCard>}
        </div>
        <div className="m-auto text-center">
          <Link to="/deshboard" className=" btn btn-primary mt-5">
            {" "}
            See More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
