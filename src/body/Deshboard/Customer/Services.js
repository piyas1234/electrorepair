import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../Axios/Api';
import SideNav from '../../navigatoin/SideNav';

const Services = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        Api.get("/services")
        .then(res =>{
             setdata(res.data)
        })
    }, [])
    return (
        <div className="row orderList">
        <div className="col-md-2">
          <SideNav></SideNav>
        </div>
        <div className="col-md-10">
          <div className="d-flex   mt-3 bg-white p-3">
            <h3>Review </h3>
            <h5 className="ml-auto">Piyas Talukder</h5>
          </div>
          <div className="my-4">
            <div className="row">
            {data &&
            data.map(({ title, description, image, price }) => {
              return (
                <div className="gx-3 col-md-6 col-lg-4 col-sm-6 mt-4">
                  <div
                    style={{
                      backgroundColor: "dark",
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
          </div>
        </div>
      </div>
    );
};

export default Services;