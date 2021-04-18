import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { AdminContex } from "../../../App";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";
import Spinner from "../../Shared/Spinner";
import Title from "../Customer/Title";
import "../style.css";
const ManageService = () => {
  const [data, setdata] = useState([]);
  const [msg, setmsg] = useState(null);
  const [refresh, setrefresh] = useState(false);
  const [admin, setadmin] = useContext(AdminContex);

  useEffect(() => {
    Api.get("services").then((response) => {
      setdata(response.data);
      setrefresh(false);
    });
  }, [refresh]);

  const onClickHandler = (id) => {
    Api.delete(`services/${id}`).then((response) => {
      console.log(response.data.deletedCount);
      if (response.data.deletedCount === 1) {
        setmsg("data deleted");
        setrefresh(true);
      }
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
        <Title title={"manage Service"}></Title>

        {msg && (
          <div
            class="alert alert-warning alert-dismissible fade show mt-4"
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
        {data.length < 1 ? (
          <Spinner></Spinner>
        ) : (
          <div className="my-4">
            <div className="m-5">
              <div class="table-responsive bg-white p-5">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Title </th>
                      <th>description </th>
                      <th>image </th>
                      <th>Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map(({ _id, title, description, image }) => {
                        return (
                          <tr>
                            <td>{title}</td>
                            <td>{description}</td>
                            <td>
                              <img width="50px" src={image} alt="" srcset="" />
                            </td>
                            <td className="d-flex">
                              <button className="btn btn-warning btn-sm text-white" type="submit">
                                Edit
                              </button>
                              <button
                                onClick={() => onClickHandler(_id)}
                                className="btn btn-sm btn-danger text-white ml-2"
                                type="submit"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageService;
