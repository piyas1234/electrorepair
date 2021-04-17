import React, { useEffect, useState } from "react";
import Api from "../Axios/Api";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OurServiceList from "./components/OurServiceList";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Slider from "./components/Slider";

const Home = () => {
  const [data, setdata] = useState([]);
  const [review, setreview] = useState([]);
  useEffect(() => {
    Api.get("/services").then((res) => {
      setdata(res.data);
    });

    Api.get("/reviews").then((res) => {
      setreview(res.data);
    });
  }, []);
  return (
    <div>
      <Slider></Slider>
      <Services data={data}></Services>
      <OurServiceList></OurServiceList>
      <About></About>
      <Reviews review={review}></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
