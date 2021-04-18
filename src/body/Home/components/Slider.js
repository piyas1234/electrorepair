import { Carousel } from "react-bootstrap";
import React from "react";
import "./style.css";
import img from "../../images/img3.jpg";
import img1 from "../../images/img5.jpg";
import img2 from "../../images/img6.jpg";
import img3 from "../../images/img7.jpg";
import men from '../../images/idea (1).png'
import { Link } from "react-router-dom";
const Slider = () => {
  const data = [
    {
      image: img,
      title: "Mobile Repair Stall for Everyone",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam enim aperiam dolore consequatur temporibus expedita dolores amet excepturi beatae.",
    },
    {
      image: img1,
      title: "Mobile Repair Stall for Everyone",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam enim aperiam dolore consequatur temporibus expedita dolores amet excepturi beatae.",
    },
    {
      image: img2,
      title: "Mobile Repair Stall for Everyone",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam enim aperiam dolore consequatur temporibus expedita dolores amet excepturi beatae.",
    },
    {
      image: img3,
      title: "Mobile Repair Stall for Everyone",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam enim aperiam dolore consequatur temporibus expedita dolores amet excepturi beatae.",
    },
  ];
  return (
    <div style={{ backgroundColor: "#020102" }} className="slider">
      <Carousel className="col-md-10 offset-md-1 p-5">
        {data &&
          data.map(({ title, description, image }) => {
            return (
              <Carousel.Item className="shadow">
                <div className="row">
                  <div className="col-md-8">
                    <img
                      className="d-block w-100 img-fluid rounded slideimg"
                      src={image}
                      alt="Third slide"
                    />
                  </div>
                  <div className="col-md-4">
                    <Carousel.Caption className="slider-title">
                      <img width="100px" src={men} alt="" srcset=""/>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <Link className="btn shadow text-white btn-warning" to="/deshboard">make a order</Link>
                    </Carousel.Caption>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Slider;
