 
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import img from '../images/booking.png'
import img2 from '../images/vault.png'
import img3 from '../images/feedback.png'

import orderList from '../images/notepad.png'
import addService from '../images/add.png'
import addAdmin from '../images/follow.png'
import manageService from '../images/share.png'
import services from  '../images/stopwatch.png'
import { AdminContex } from "../../App";


const SideNav = () => {
  // const [admin, setadmin] = useState(false);
  // useEffect(() => {
  //   Api.post("/isAdmin", { email: localStorage.getItem("email") }).then(
  //     (res) => {
  //       setadmin(res.data);
  //     }
  //   );
  // }, []);
  const [admin, setadmin] =useContext(AdminContex)
  return (
    <div className="text-white sideNav shadow">
      <div className="p-3 mx-3"></div>

      {admin ? (
        <>
          <div className="m-2">
          <img width="40px" src={services} alt="" srcset=""/>{" "}
            <Link to="/deshboard" style={{ fontSize: "22px", color: "white" }}>
              services
            </Link>
          </div>
           <div className="m-2">
          <img width="40px" src={orderList} alt="" srcset=""/>{" "}
            <Link to="/orderlist" style={{ fontSize: "22px", color: "white" }}>
              OrderList
            </Link>
          </div>
          
          <div className="m-2">
          <img width="40px" src={addService} alt="" srcset=""/>{" "}
            <Link
              to="/addservices"
              style={{ fontSize: "22px", color: "white" }}
            >
              Add Services
            </Link>
          </div>
          <div className="m-2">
          <img width="40px" src={addAdmin} alt="" srcset=""/>{" "}
            <Link to="/makeadmin" style={{ fontSize: "22px", color: "white" }}>
              add Admin
            </Link>
          </div>
          <div className="m-2">
          <img width="40px" src={manageService} alt="" srcset=""/>{" "}
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
          <img width="40px" src={orderList} alt="" srcset=""/>{" "}
            <Link to="/deshboard" style={{ fontSize: "22px", color: "white" }}>
              services
            </Link>
          </div>
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
