import React, { useEffect, useState } from "react";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";
import BookedCard from "../../Shared/BookedCard";
import Spinner from "../../Shared/Spinner";

import "../style.css";
import Title from "./Title";
const BookingList = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    Api.get(`/order?email=${localStorage.getItem("email")}`).then((res) => {
      setdata(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="row orderList">
      <div className="col-md-2">
        <SideNav></SideNav>
      </div>
      <div className="col-md-9">
        <Title title={"bookingList"}></Title>
        {data && data.length < 1 ? (
          <h3 className="bg-white p-2 mt-5 rounded text-warning">
            No Booking data
          </h3>
        ) : (
          <div className="my-4">
            <div className="m-5">
              <div className="row">
                {data &&
                  data.map((item) => {
                    return <BookedCard item={item}></BookedCard>;
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingList;
