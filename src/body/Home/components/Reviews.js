import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Reviews = ({ review }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{backgroundColor:"#FFFFFF"}} className="col-md-10 offset-md-1 p-3">
        <h4
        style={{ color: "", fontWeight: "bold",width:"400px" }}
        className="m-auto   text-center   p-3 shadow"
      >
        {" "}
        Reviews  Services
      </h4>
      <Carousel   responsive={responsive}>
        {review &&
          review.map((item) => {
            const { name, description, companey , img , star} = item.data;
            console.log(item);
            return (
              <div className="m-3 card">
                <div className="p-4">
                   <img className="card-img w-50 rounded-circle" src={img?img:"https://th.bing.com/th/id/OIP.lt5eAYjJDk70C72xhwyIZgHaHa?pid=ImgDet&w=900&h=900&rs=1"} alt="" srcset=""/>
                   <h4>{name}</h4>
                <h5>{companey}</h5>
                <p>{description}</p>
                <FontAwesomeIcon className="text-warning" icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon  className="text-warning" icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon  className="text-warning" icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon  className="text-warning" icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon  className="text-warning" icon={faStar}></FontAwesomeIcon>
                </div>
              </div>
            );
          })}
      </Carousel>
      ;
    </div>
  );
};

export default Reviews;
