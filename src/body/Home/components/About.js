import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from '../../images/iphonex.png'
import React from "react";

const About = () => {
  return (
    <div style={{ backgroundColor: "#FFF8F5" }} className="py-5">
      <h4
        style={{ color: "tomato", fontWeight: "bold",width:"300px",boxShadow:"4px 4px 4px 4px gray"}}
        className="m-auto   text-center py-2"
      >
        {" "}
        About us
      </h4>
      <div className="col-md-10 offset-md-1 py-5">
        <div className="row">
          <div className="col-md-6 rounded shadow">
            <img
              className="card-img w-75"
              // src="https://images.unsplash.com/photo-1609692814859-9ebe00526a8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              src={img}
              alt=""
              srcset=""
            />
          </div>
          <div className="col-md-6 shadow">
            <div className="p-4">
              <h3>
                {" "}
                Let us Handle{" "}
                <span style={{ color: "#F63E7B" }}>
                  your device professionally
                </span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                ex vero quisquam perferendis consequatur aspernatur cupiditate
                architecto tenetur debitis sunt totam, a odit ducimus ipsum,
                obcaecati fuga eius, necessitatibus dolores?
              </p>

              <div style={{ color: "#FF65BF" }} className="d-flex p-4">
                <div className="p-3">
                  <FontAwesomeIcon
                    className="text-dark"
                    size="2x"
                    icon={faUserFriends}
                  ></FontAwesomeIcon>

                  <h4>500+</h4>
                  <h6 className="text-dark">Happy customer</h6>
                </div>
                <div style={{ color: "#300B28" }} className="p-3">
                  <FontAwesomeIcon
                    size="2x"
                    icon={faServicestack}
                  ></FontAwesomeIcon>
                  <h4>600+</h4>

                  <h6>Total service</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
