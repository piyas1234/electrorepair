import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../images/idea (1).png";
import ProductCard from "../../Shared/ProductCard";

const Button = [
  { id: 1, className: "btn btn-warning mx-3 text-white my-3", value: "all" },
  { id: 2, className: "btn btn-primary mx-3 text-white my-3", value: "mobile" },
  { id: 3, className: "btn btn-primary mx-3 text-white my-3", value: "leptop" },
  { id: 4, className: "btn btn-primary mx-3 text-white my-3", value: "tv" },
  { id: 5, className: "btn btn-primary mx-3 text-white my-3", value: "electronics" },
];

const Services = ({ data }) => {
  const [filter, setfilter] = useState(data);

  const filterData = (e, type, id) => {
    if (type === "all") {
      e.target.setAttribute("class", "bg-warning btn text-white mx-3 my-3");
      return  setfilter(data);
    }  
    const filterItems = data.filter((item) => item.type === type);
    setfilter(filterItems);
    console.log(filterItems);

    Button.map((item) => {
      if (item.id === id) {
        item.className = "btn btn-warning mx-3 text-white my-3";
      } else {
        item.className = "btn btn-primary mx-3 text-white my-3";
      }
    });
  };

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

        <div className="my-5 text-center">
          {Button.map(({ id, className, value }) => (
            <button
              className={className}
              onClick={(e) => filterData(e, value, id)}
              type="submit"
            >
              {value}
            </button>
          ))}
        </div>

        <div className=" mt-5">
          {filter && <ProductCard data={filter}></ProductCard>}
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
