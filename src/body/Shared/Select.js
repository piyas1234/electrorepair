import React from "react";
import Api from "../Axios/Api";

const Select = ({ data, setservice }) => {
    const onChangeHandler =(e)=>{
        console.log(e.target.value)
        Api.get(`/services/${e.target.value}`).then((res) => setservice(res.data));
    }
  return (
      <>
    <h4>Select a Service</h4>
    <select  className="form-select form-control"aria-label="Default select example" onChange={onChangeHandler} id="">
      {data &&
        data.map((item) => {
          return <> <option value={item._id}>{item.title}</option></>
      })}
    </select>
    
    </>
  );
};

export default Select;
