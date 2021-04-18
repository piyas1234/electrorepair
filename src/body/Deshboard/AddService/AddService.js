import React, { useContext, useEffect, useState } from "react";
import { AdminContex } from "../../../App";
import { useForm } from "react-hook-form";
import SideNav from "../../navigatoin/SideNav";
import Api from "../../Axios/Api";
import axios from "axios";
import "../style.css";
import { Redirect } from "react-router";
import Title from "../Customer/Title";
const AddService = () => {
  const [msg, setmsg] = useState("");
  const [loading, setloading] = useState(false);
  const [photoUrl, setphotoUrl] = useState(null);
  const [admin, setadmin] = useContext(AdminContex);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        setmsg("image upload successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = ({title, description , price , type }) => {
    if (photoUrl) {
      Api.post("/addServices", {
        title: title,
        description:description,
        price: price,
        image: photoUrl,
        type: type
      }).then((response) => {
        setmsg("your service saved!");
      });
    } else {
      setmsg("please upload product image!");
    }
  };

  return !admin ? (
    <Redirect to="/checkout" />
  ) : (
    <div className="row orderList">
      <div className="col-md-2">
        <SideNav></SideNav>
      </div>
      <div className="col-md-9 text-white">
        <Title title={"add Service"}></Title>
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
        <div className="my-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">


                <div className="form-group">
                  <label htmlFor="Service title">Select Type</label>
                  <select name="title"
                    className="form-control"
                    type="text"
                    {...register("type", { required: true })}>

                      <option value="mobile">mobile Repair</option>
                      <option value="leptop">Leptop Repair</option>
                      <option value="tv">tv Repair</option>
                      <option value="electronics">Electronics Repair</option>
                    </select>
                  {errors.type && <span className="text-warning">This field is required</span>}
                </div> 
                
                <div className="form-group">
                  <label htmlFor="Service title">Service title</label>
                  <input
                    name="title"
                    className="form-control"
                    type="text"
                    {...register("title", { required: true })}
                  />
                  {errors.title && <span className="text-warning">This field is required</span>}
                </div>
 
                <div className="form-group">
                  <label htmlFor="Service Description">
                    Service Description
                  </label>
                  <input
                    name="description"
                    className="form-control"
                    type="text"
                    {...register("description", { required: true })}
                  />

                  {errors.description && <span className="text-warning">This field is required</span>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="Service Description">Service Price</label>
                  <input
                    name="price"
                    className="form-control"
                    type="text"
                    {...register("price", { required: true })}
                  />

                  {errors.price && <span className="text-warning">This field is required</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="Service Description">Service image</label>
                  {loading && <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>}
                  <input
                    onChange={onChangeHandler}
                    name="photo"
                    className="form-control"
                    type="file"
                  />
                </div>
              </div>
            </div>

            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
