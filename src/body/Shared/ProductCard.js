import React from "react";
import { Link } from "react-router-dom";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'
const ProductCard = ({data}) => {
  return (
    <div className="row">
      {data &&
        data.map(({_id, title, description, image, price }) => {
          return (
            <div className="gx-3 col-md-6 col-lg-4 col-sm-6 mt-4 text-white">
              <div
               className="p-4 productCard"
                
                
              >
                <div className="productImg" style={{ height: "300px" }}>
                  <img
                    className="img-fluid w-auto h-100"
                    src={image}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="">
                  <h5>{title}</h5>
                  <p>{description}</p>
                </div>

                <div className="d-flex">
                  <button
                    style={{ backgroundColor: "#FF65BF" }}
                    className="btn btn-sm text-white"
                  >
                    Price:{price ? price : 10}{" "}
                    <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>{" "}
                  </button>
                  <Link
                    style={{ backgroundColor: "#DE25FF" }}
                    to={`/book/${_id}`}
                    className="btn btn-sm text-white shadow ml-auto"
                    type="submit"
                  >
                    Get Service
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
