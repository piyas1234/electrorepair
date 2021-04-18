import React from "react";

const Spinner = () => {
  return (
    <div
    className="d-flex align-items-center"
    style={{  background: "linear-gradient(0.25turn, #1b1a17, #050505, #503213)", height: "70%" }}
  >
    <div className=" m-auto">
      <div class="spinner-border text-primary" role="status"></div>
    </div>
  </div>
  );
};

export default Spinner;
