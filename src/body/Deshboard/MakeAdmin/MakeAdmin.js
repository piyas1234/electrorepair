import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { AdminContex } from "../../../App";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";
import Title from "../Customer/Title";
import "../style.css";
const MakeAdmin = () => {
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");
  const [admin , setadmin] =useContext(AdminContex)
  const onClickHandler = () => {
    email === ""
      ? setmsg("Please give us a valid email")
      : Api.post("/addadmin", { email: email }).then((res) => {
          setmsg("admin added successfully!!!");
        });
  };

  return !admin ? (
    <Redirect to="/checkout" />
  ) : (
    <div className="row orderList">
      <div className="col-md-2">
        <SideNav></SideNav>
      </div>
      <div className="col-md-10">
        <Title title={"add Admin"}></Title>
        <div className="my-4">
          <div className="m-5">
            <div className="card p-4">
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
              <h4
                style={{ backgroundColor: "rgb(195, 0, 255)" }}
                className=" text-white p-3 rounded"
              >
                Admin Email
              </h4>
              <div className="d-flex">
                <input
                  onChange={(e) => setemail(e.target.value)}
                  className="form-control"
                  type="text"
                />
                <input
                  style={{ backgroundColor: "#FF65BF" }}
                  onClick={onClickHandler}
                  className="btn text-white"
                  type="button"
                  value="submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
