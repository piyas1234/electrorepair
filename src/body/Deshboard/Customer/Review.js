import React, { useState } from "react";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";

import "../style.css";
const Review = () => {
   const [data, setdata] = useState({})
  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setdata({...data,[name]:value})
  }
  console.log(data)
  const onClickHandler = (e)=>{
       e.preventDefault()
       Api.post('/reviews',{data})
       .then(res=>{
         console.log(res.data)
       })
  }
  return (
    <div className="row orderList">
      <div className="col-md-2">
        <SideNav></SideNav>
      </div>
      <div className="col-md-10">
        <div className="d-flex   mt-3 bg-white p-3">
          <h3>Review </h3>
          <h5 className="ml-auto">Piyas Talukder</h5>
        </div>
        <div className="my-4">
          <div className="m-5">
              <div className="card col-md-6">
                 <form action="" method="post">
                   <div className="form-group m-2">
                   <input onChange={onChangeHandler} name="name" placeholder="Your name" className="form-control" type="text"/>
                   </div> 
                   <div className="form-group m-2">
                   <input onChange={onChangeHandler} name="companey" placeholder="Company name" className="form-control" type="text"/>
                   </div> <div className="form-group m-2">
                   <textarea onChange={onChangeHandler} name="description" placeholder="Description" className="form-control" type="text"/>
                   </div>
                   <button onClick={onClickHandler} type="submit">Submit</button>
                 </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
