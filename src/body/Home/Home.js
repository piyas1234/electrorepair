import React, { useEffect, useState } from "react";
import Api from "../Axios/Api";
import Messanger from "../Messanger/Messanger";
import Spinner from "../Shared/Spinner";
import About from "./components/About";
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
  return data.length < 1 && review.length < 1 ? (
    <Spinner></Spinner>
  ) : (
    <div>
      <Slider></Slider>
      <Services data={data}></Services>
      <Messanger></Messanger>
      <OurServiceList></OurServiceList>
      <About></About>
      <Reviews review={review}></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
