import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useLocation, useParams } from "react-router";
import { UserContext } from "../../../App";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";
import Select from "../../Shared/Select";
import Spinner from "../../Shared/Spinner";
import "../style.css";
import Payment from "./Payment";
import Title from "./Title";

const Book = () => {
  const [msg, setmsg] = useState("");
  const [service, setservice] = useState({});
  const [data, setdata] = useState([]);
  const [loggedinUser, setloggedinUser] = useContext(UserContext);
  const [payment, setpayment] = useState("");
  const { displayName, email } = loggedinUser;
  const { id } = useParams();
  const { _id, title, description, image, price } = service;
  const path = useLocation().pathname;
  console.log(service);
  useEffect(() => {
    path === "/book"
      ? Api.get(`/services`).then((res) => setdata(res.data))
      : Api.get(`/services/${id}`).then((res) => setservice(res.data));
  }, []);

  const onSubmit = (e) => {
     if(title){
      payment !=="error" && payment==="success" 
      ? Api.post("/order", {
          productId: _id,
          title: title,
          displayName: displayName,
          description: description,
          email: email,
          image: image,
          price: price,
          payment: payment,
        }).then((result) => {
          console.log(result);
          setmsg("paymnet successfully done");
        })
      : setmsg("please payment us for submiting order");
     }else{
      setmsg("please fill all the fields!!");
     }
  };

  return (
    <div className="row orderList">
      <div className="col-md-2">
        <SideNav></SideNav>
      </div>
      <div className="col-md-9">
        <Title title={"booking"}></Title>

        <div className="my-4 card p-5">
          <div className="m-5">
            {data && <Select data={data} setservice={setservice}></Select>}
            <img
              style={{ width: "200px" }}
              className="card-img rounded shadow p-4 m-3"
              src={image}
              alt=""
              sizes=""
              srcset=""
            />
            <h5
              style={{ backgroundColor: "#7795F8" }}
              className="text-white   shadow p-2"
            >
              price:{price}$
            </h5>
            <form action="" method="post">
              {msg && (
                <div
                  class="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>{msg}</strong>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )}
              <div className="form-group">
                <input
                  name="name"
                  value={displayName}
                  className="form-control"
                  type="text"
                  disabled
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  value={email}
                  className="form-control"
                  type="text"
                  disabled
                />
              </div>
              <div className="form-group">
                <input
                  name="title"
                  value={title}
                  className="form-control"
                  type="text"
                  disabled
                />
              </div>
            </form>
            payment
            {payment && (
                <div
                  class="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>{payment}</strong>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )}
            <Payment setpayment={setpayment}></Payment>
          </div>
          <button style={{backgroundColor:"#FF65BF"}} className="btn  text-white" onClick={onSubmit} type="submit">
            send order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
