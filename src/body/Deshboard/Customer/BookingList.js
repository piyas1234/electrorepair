import React, { useEffect, useState } from "react";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";

import "../style.css";
const BookingList = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    Api.get(`/order?email=${localStorage.getItem('email')}`)
    .then(res=>{
      setdata(res.data)
    })
  }, [])
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
              
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>title</th>
                      <th>name</th>
                      <th>email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data && data.map(({title, displayName , email , status}) =>{
               return <tr>
               <td>{title}</td>
               <td>{displayName}</td>
               <td>{email}</td>
               <td><button className="btn" type="submit">{!status ? "pending": status}</button></td>
                
             </tr> 
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

export default BookingList;
