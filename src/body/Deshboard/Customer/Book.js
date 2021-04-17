import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Redirect, useParams } from "react-router";
import { AdminContex, UserContext } from "../../../App";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";

import "../style.css";
import Payment from "./Payment";
const Book = () => {
  const [loggedinUser, setloggedinUser] = useContext(UserContext);
  const [payment, setpayment] = useState([]);
  const { displayName, email } = loggedinUser;
  const { title } = useParams();

  const [admin, setadmin] = useContext(AdminContex);
  useEffect(() => {
    admin && <Redirect to="/admindeshboard" />;
  }, [admin]);

  const onSubmit = (e) => {
    Api.post("/order", {
      title: title,
      displayName: displayName,
      email: email,
      payment: [payment],
    }).then((result) => {
      console.log(result);
    });
  };
  return (
    <div className="row orderList">
      <div className="col-md-2">
        <SideNav></SideNav>
      </div>
      <div className="col-md-10">
        <div className="d-flex   mt-3 bg-white p-3">
          <h3>Order List</h3>
          <h5 className="ml-auto">Piyas Talukder</h5>
        </div>
        <div className="my-4">
          <div className="m-5">
            <form action="" method="post">
              <div className="form-group">
                <input
                  name="name"
                  value={displayName}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  value={email}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  name="title"
                  value={title}
                  className="form-control"
                  type="text"
                />
              </div>
            </form>
            payment
            <Payment setpayment={setpayment}></Payment>
          </div>
          <button onClick={onSubmit} type="submit">
            send order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
