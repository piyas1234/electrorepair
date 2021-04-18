import React from "react";

const BookedCard = ({ item }) => {
  const {
    title,
    displayName,
    description,
    email,
    image,
    price,
    payment,
    status,
  } = item;
  return (
    <div className="gx-3 col-md-6 col-lg-4 col-sm-6 mt-4">
      <div className="card p-3">
        <div className="d-flex">
          <img
            style={{ width: "100px" }}
            className="rounded "
            src={image}
            alt=""
            srcset=""
          />
          <h6 className="ml-auto  btn btn-sm btn-success   h-25">
            {status ? status : "pending"}
          </h6>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="d-flex">
          <button className="btn btn-warning text-white">{price}$</button>
          <button className="ml-auto btn btn-info">{payment}</button>
        </div>
      </div>
    </div>
  );
};

export default BookedCard;
