import {
  faFacebookMessenger,
  faShopify,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPaperPlane,
  faPlus,
  faShoppingBag,
  faUser,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Api from "../Axios/Api";
import img from '../images/booking.png'
import img2 from '../images/vault.png'
import img3 from '../images/feedback.png'

const SideNav = () => {
  const [admin, setadmin] = useState(false);
  useEffect(() => {
    Api.post("/isAdmin", { email: localStorage.getItem("email") }).then(
      (res) => {
        setadmin(res.data);
      }
    );
  }, []);
  return (
    <div className="text-white sideNav shadow">
      <div className="p-3 mx-3"></div>

      {admin ? (
        <>
          <div className="m-2">
            <FontAwesomeIcon size="2x" icon={faShopify}></FontAwesomeIcon>
            <Link to="/deshboard" style={{ fontSize: "22px", color: "white" }}>
              OrderList
            </Link>
          </div>
          <div className="m-2">
            <FontAwesomeIcon size="2x" icon={faPlus}></FontAwesomeIcon>
            <Link
              to="/addservices"
              style={{ fontSize: "22px", color: "white" }}
            >
              Add Services
            </Link>
          </div>
          <div className="m-2">
            <FontAwesomeIcon size="2x" icon={faUser}></FontAwesomeIcon>
            <Link to="/makeadmin" style={{ fontSize: "22px", color: "white" }}>
              Make Admin
            </Link>
          </div>
          <div className="m-2">
            <FontAwesomeIcon size="2x" icon={faUserCog}></FontAwesomeIcon>
            <Link
              to="/manageservices"
              style={{ fontSize: "22px", color: "white" }}
            >
              Manage Services
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="m-2">
          <img width="40px" src={img} alt="" srcset=""/>
            <Link to="/book" style={{ fontSize: "20px", color: "white" }}>
              Book
            </Link>
          </div>
          <div className="m-2">
             <img width="40px" src={img2} alt="" srcset=""/>
            <Link
              to="/bookinglist"
              style={{ fontSize: "20px", color: "white" }}
            >
              Booking List
            </Link>
          </div>
          <div className="m-2">
          <img width="40px" src={img3} alt="" srcset=""/>
            <Link to="/review" style={{ fontSize: "22px", color: "white" }}>
              Review
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SideNav;
