import React, { useState } from "react";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";

import "../style.css";
import Title from "./Title";
const Review = () => {
  const photoURL = localStorage.getItem("photoURL") | null
  console.log(photoURL)
  const [msg, setmsg] = useState("");
  const [data, setdata] = useState({
    name: "",
    companey: "",
    description: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata({ ...data, [name]: value });
  };
  console.log(data);
  const onClickHandler = (e) => {
    e.preventDefault();
    if (data.name === "" || data.companey === "" || data.description === "") {
      setmsg("please fill all the fields");
    } else {
      Api.post("/reviews", {...data,photoURL }).then((res) => {
        res.data.insertedCount===1 && setmsg("your review hasbeen submited!")

      });
    }
  };
  return (
    <div className="row orderList">
      <div className="col-md-2">
        <SideNav></SideNav>
      </div>
      <div className="col-md-9">
        <Title title={"Reviews"}></Title>
        <div className="my-4">
          <div className="m-5">
            <h3
              style={{ backgroundColor: "rgb(195, 0, 255)" }}
              className="p-3 rounded text-white"
            >
              Let's Give us a feedback!
            </h3>
            <div className="card p-5">
              {msg && (
                <div
                  class="alert alert-primary alert-dismissible fade show"
                  role="alert"
                >
                  <strong> {msg}</strong>
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
              <form action="" method="post">
                <div className="form-group m-2">
                  <input
                    onChange={onChangeHandler}
                    name="name"
                    placeholder="Your name"
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="form-group m-2">
                  <input
                    onChange={onChangeHandler}
                    name="companey"
                    placeholder="Company name"
                    className="form-control"
                    type="text"
                  />
                </div>{" "}
                <div className="form-group m-2">
                  <textarea
                    onChange={onChangeHandler}
                    name="description"
                    placeholder="Description"
                    className="form-control"
                    type="text"
                  />
                </div>
                <button
                  style={{ backgroundColor: "rgb(195, 0, 255)" }}
                  className="btn text-white"
                  onClick={onClickHandler}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
