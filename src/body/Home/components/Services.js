import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Services = ({ data }) => {
  return (
    <div className="py-5" style={{ backgroundColor: "#2D2928" }}>
      <div className="col-md-10 offset-md-1">
        <h4
          style={{
            color: "white",
            fontWeight: "bold",
            width: "400px",
            boxShadow: "4px 4px 4px 4px rgba(255, 255, 255, 0.5)",
          }}
          className="m-auto   text-center   p-3"
        >
          {" "}
          <span>Our Awesome</span> Service
        </h4>
        <div className="row mt-5">
          {data &&
            data.map(({ title, description, image, price }) => {
              return (
                <div className="gx-3 col-md-6 col-lg-4 col-sm-6 mt-4">
                  <div
                    style={{
                      backgroundColor: "#ffffff1a",
                      boxShadow: "3px 3px 3px 3px  rgba(255, 255, 255, 0.5)",
                    }}
                    className="card  p-4 text-white"
                  >
                    <div style={{ height: "200px", width: "300px" }}>
                      <img
                        className="rounded card-img img-fluid w-75"
                        src={image}
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className=" mt-3 p-3 h-50">
                      <h4>{title}</h4>
                      <p>{description}</p>
                      <div className="d-flex">
                        <button
                          style={{ backgroundColor: "#FF65BF" }}
                          className="btn btn-sm text-white"
                        >
                          Price:{price ? price : 10}{" "}
                          <FontAwesomeIcon
                            icon={faDollarSign}
                          ></FontAwesomeIcon>{" "}
                        </button>
                        <Link
                          style={{ backgroundColor: "#DE25FF" }}
                          to={`/book/${title}`}
                          className="btn btn-sm text-white shadow ml-auto"
                          type="submit"
                        >
                          Get Service
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
