import React, { useEffect, useState } from "react";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";
import "../style.css";
const ManageService = () => {
  const [data, setdata] = useState([]);
  const [msg, setmsg] = useState(null);
  const [refresh, setrefresh] = useState(false);

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
        <div className="my-4">
          <div className="m-5">
            <div class="table-responsive">
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
                          <td>
                            <button className="btn btn-warning" type="submit">
                              Edit
                            </button>
                            <button
                              onClick={() => onClickHandler(_id)}
                              className="btn btn-danger"
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
      </div>
    </div>
  );
};

export default ManageService;
