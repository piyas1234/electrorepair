import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import NavProfile from "./NavProfile";
import img from '../images/idea (1).png'
const Navbody = () => {
  const [inputData, setinputData] = useContext(UserContext);
  const { displayName, email ,photoURL } = inputData;
  const path = useLocation().pathname;
  
  const color = path === "/logn" || path === "/signup" ?"rgb(255, 101, 191)":"white" 
  const navStyle = {
    backgroundColor: "rgb(255, 101, 191)",
    color: "white",
    boxShadow: "3px 3px 3px 3px gray",
    fontWeight: "bold",
    margin: "10px",
    padding: "10px",
    borderRadius: "50px",
  };
  const navStyle2 = {
    // backgroundColor: "rgb(222, 37, 255)",
    color: color,
    boxShadow: "3px 3px 3px 3px gray",
    fontWeight: "bold",
    margin: "10px",
    padding: "10px",
    borderRadius: "50px",
  };
  const bgColor =
    path === "/logn" || path === "/signup" 
      ? {}
      : { background: "linear-gradient(0.25turn, #1b1a17, #050505, #503213)" };
  

  return (
    <div style={bgColor} className=" pt-3 pb-2 shadow-lg">
      <Navbar expand="lg">
        <Navbar.Brand>
          {" "}
          <Link style={navStyle} to="/">
             <img width="50px" src={img} alt="" srcset=""/>
            ElectroRepair
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link style={navStyle2} to="/">
              Home
            </Link>
            <Link style={navStyle2} to="/">
              About
            </Link>
            <Link style={navStyle2} to="/">
              Contact us
            </Link>
            <Link style={navStyle2} to="/deshboard">
              Deshboard
            </Link>
            {!displayName && !email ? (
              <Link style={navStyle} to="/login">
                Login
              </Link>
            ) : (
              ""
            )}
            <Link style={{ marginTop: "10px" }}>
              <NavProfile value={inputData}></NavProfile>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbody;
