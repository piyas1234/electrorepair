import React, { useState } from "react";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";
import "../style.css";
const MakeAdmin = () => {
  
  const [email, setemail] = useState(null)
  const onClickHandler =()=>{
    Api.post('/addadmin',{email:email})
    .then(res=>{
      console.log(res)
    })
     
  }
 
  
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
              <div className="card">
                  <div className="d-flex">
                  <input onChange={(e)=>setemail(e.target.value)} className="form-control" type="text"/>
                  <input onClick={onClickHandler} className="btn btn-primary" type="button" value="submit"/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
