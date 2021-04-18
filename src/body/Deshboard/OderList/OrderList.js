import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { AdminContex } from "../../../App";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";
import Spinner from "../../Shared/Spinner";
import Title from "../Customer/Title";
import "../style.css";
const OrderList = () => {
  const [data, setdata] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const [admin, setadmin] = useContext(AdminContex);
  useEffect(() => {
    Api.get("/order").then((res) => {
      setdata(res.data);
      setrefresh(false);
    });
  }, [refresh]);

  const onChangeHandler = (event, _id) => {
    const status = event.target.value;
    console.log(status);
    Api.post("/order/status", { status: status, id: _id }).then((res) => {
      console.log(res);
      setrefresh(true);
    });
  };
  return !admin ? (
    <Redirect to="/checkout" />
  ) : (
    <div className="row orderList">
      <div className="col-md-2">
        <SideNav></SideNav>
      </div>
      <div className="col-md-9">
        <Title title={"order List"}></Title>
        {data.length < 1 ? (
          <Spinner></Spinner>
        ) : (
          <div className="my-4 table-hover table-responsive bg-white">
            <table class="table  ">
              <thead style={{backgroundColor:"#745F1D",color:"white",padding:"20px"}}>
                <tr>
                  <th scope="col">title</th>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">price</th>
                  <th scope="col">image</th>
                  <th scope="col">status</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map(({ _id, title, email,image, price , displayName, status }) => {
                    return (
                      <tr>
                        <th scope="row">{title}</th>
                        <td>{displayName}</td>
                        <td>{email}</td>
                        <td>{price}$</td>
                        <td> <img width="60px" src={image} alt="" srcset=""/></td>
                        <td>
                          <select
                            className="form-control "
                            value={status}
                            onChange={(event) => onChangeHandler(event, _id)}
                            name="status"
                            id=""
                          >
                            <option className="bg-info" value="pending">pending</option>
                            <option className="bg-warning" value="on going">on going</option>
                            <option className="bg-success" value="done">done</option>
                          </select>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
