import React, { useContext, useEffect, useState } from "react";
import {AdminContex} from '../../../App'
import { useForm } from "react-hook-form";
import SideNav from "../../navigatoin/SideNav";
import Api from '../../Axios/Api'
import axios from "axios";
import "../style.css";
import { Redirect } from "react-router";
const AddService = () => {
  const [loading, setloading] = useState(false);
  const [photoUrl, setphotoUrl] = useState(null);
  const [admin, setadmin] = useContext(AdminContex);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  useEffect(() => {
    !admin &&    <Redirect  to="/book" />
  }, [admin])

  const onChangeHandler = (event) => {
    console.log("onChangeHandler");
    setloading(true);
    const image = event.target.files[0];
    console.log(image);
    const imageData = new FormData();
    imageData.set("key", "292e93baf139ef4fb8b9f89680c2dc9a");
    imageData.append("image", image);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setphotoUrl(response.data.data.display_url);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(photoUrl);
  const onSubmit = (data) => {
    console.log(data)
     Api.post('/addServices',{
       title:data.title,
       description:data.description,
       price:data.price,
       image:photoUrl
     })
     .then((response) =>{
       console.log(response)
     })
  }

  return (
    <div className="row orderList">
      <div className="col-md-2">
        <SideNav></SideNav>
      </div>
      <div className="col-md-10">
        <div className="d-flex   mt-3 bg-white p-3">
          <h3>Add Service</h3>
          <h5 className="ml-auto">Piyas Talukder</h5>
        </div>

        <div className="my-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="Service title">Service title</label>
                  <input
                    name = "title"
                    className="form-control"
                    type="text"
                    {...register("title", { required: true })}
                  />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                </div>
                <div className="form-group">
                <label htmlFor="Service Description">Service Description</label>
                  <input
                    name = "description"
                    className="form-control"
                    type="text"
                    {...register("description", { required: true })}
                  />
                  
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                </div> 
                <div className="form-group">
                <label htmlFor="Service Description">Service Price</label>
                  <input
                    name = "price"
                    className="form-control"
                    type="text"
                    {...register("price", { required: true })}
                  />
                  
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    onChange={onChangeHandler}
                    name="photo"
                    className="form-control"
                    type="file"
                  />
                </div>
              </div>
            </div>

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
