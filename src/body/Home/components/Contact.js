import React from "react";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#FFF8F5" }} className="p-4">
      <div className="col-md-8 offset-md-2">
        <h4 className="text-dark bg-white  my-5 text-center p-3 shadow">
          Let us handle your project professionally
        </h4>
        <div className="mt-5">
          <form action="" method="post">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Frist Name"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Email" type="text" />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Phone" type="text" />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Phone"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                style={{ backgroundColor: "#FF1ECE" }}
                className="btn text-white"
                placeholder="Phone"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
