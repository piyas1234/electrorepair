import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React  from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Reviews = ({review}) => {

 
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
    <div
      style={{ backgroundColor: "#FFFFFF" }}
      className="col-md-10 offset-md-1 p-3"
    >
      <h4
        style={{ color: "tomato", fontWeight: "bold", width: "300px" }}
        className="m-auto   text-center   p-3 shadow"
      >
        {" "}
        Reviews Services
      </h4>
      <Carousel responsive={responsive}>
        {review &&
          review.map((item) => {
            const {   description, companey,name, photoURL, star } = item;
            console.log(item);
            return (
              <div style={{backgroundColor:"rgba(255, 255, 255, 0.089)"}} className="m-3 card">
                <div className="p-4 m-auto">
                  <img
                    style={{width:"100px"}}
                    className="card-img  rounded-circle"
                    src={
                      !photoURL
                      ?"https://th.bing.com/th/id/OIP.lt5eAYjJDk70C72xhwyIZgHaHa?pid=ImgDet&w=900&h=900&rs=1"
                       :photoURL
                    }
                    alt=""
                    srcset=""
                  />
                   <div className="mt-5">
                   <h5 className="text-warning">name:{name}</h5>
                  <h6 className="text-danger">i am working in {companey}</h6>
                  <p className="text-muted">{description}</p>
                  <FontAwesomeIcon
                    className="text-warning"
                    icon={faStar}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="text-warning"
                    icon={faStar}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="text-warning"
                    icon={faStar}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="text-warning"
                    icon={faStar}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="text-warning"
                    icon={faStar}
                  ></FontAwesomeIcon>
                   </div>
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
