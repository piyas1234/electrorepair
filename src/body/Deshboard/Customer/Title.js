import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#FF65BF", fontWeight: "bold" }}
        className="d-flex mt-3 text-white rounded shadow  py-2 px-3"
      >
        <h3> {title} </h3>
        <h5 className="ml-auto">{localStorage.getItem("displayName")}</h5>
      </div>
    </div>
  );
};

export default Title;
