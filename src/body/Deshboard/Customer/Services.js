import React, { useEffect, useState } from "react";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";
import ProductCard from "../../Shared/ProductCard";
import Spinner from "../../Shared/Spinner";
import Title from "./Title";

const Services = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    Api.get("/services").then((res) => {
      setdata(res.data);
    });
  }, []);
 
  return (
    <div className="row orderList">
      <div className="col-md-2">
        <SideNav></SideNav>
      </div>
      <div className="col-md-9">
         <Title  title={"services"}></Title>
         {data.length < 1 ? (
            <Spinner></Spinner>
        ) :
        
        <div className="my-4 mx-4">
          <div className="row">
          {data &&  <ProductCard data={data}></ProductCard>}
          </div>
        </div>}
         
      </div>
    </div>
  );
};

export default Services;
