import React, { useEffect, useState } from "react";
import Api from "../../Axios/Api";
import SideNav from "../../navigatoin/SideNav";
import "../style.css";
const OrderList = () => {

  const [data, setdata] = useState([])
  const [refresh, setrefresh] = useState(false)
  useEffect(() => {
     Api.get('/order')
     .then((res)=>{
       setdata(res.data)
       setrefresh(false)
     })
  }, [refresh])

  const onChangeHandler =(event,_id)=>{
     const status = event.target.value;
     console.log(status);
     Api.post("/order/status",({status:status,id:_id}))
     .then((res)=>{
       console.log(res)
       setrefresh(true)
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
          <table class="table bg-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map(({_id,title, email , displayName ,status })=>{
                return  <tr>
                <th scope="row">{title}</th>
                <td>{displayName}</td>
                <td>{email}</td>
                <td>
                  <select value={status} onChange={(event)=>onChangeHandler(event ,_id)} name="status" id="">
                    <option value="pending">pending</option>
                    <option value="on going">on going</option>
                    <option value="done">done</option>
                  </select>
                </td>
              </tr>
              })}
              
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
