import React, { useContext, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import NavProfile from "./NavProfile";
import img from "../images/idea (1).png";
const Navbody = () => {
  const [inputData, setinputData] = useContext(UserContext);
  const [navBg, setnavBg] = useState({});
  const { displayName, email } = inputData;
  const path = useLocation().pathname;
  const [color, setcolor] = useState("white");
  const [bgColor, setbgColor] = useState({
    background: "linear-gradient(0.25turn, #1b1a17, #050505, #503213)",
  });
  useEffect(() => {
    if (path === "/login" || path === "/signup") {
      setbgColor({ backgroundColor: "white", color: "black" });
      setcolor("black");
    } else {
      setbgColor({
        background: "linear-gradient(0.25turn, #1b1a17, #050505, #503213)",
      });
      setcolor("white");
    }
  }, [path]);
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
    color: color,
    boxShadow: "3px 3px 3px 3px gray",
    fontWeight: "bold",
    margin: "10px",
    padding: "10px",
    borderRadius: "50px",
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 25 ||
        document.documentElement.scrollTop > 25
      ) {
        setnavBg({
          backgroundColor: "white",
          position: "fixed",
          zIndex: "100",
          width: "100%",
          transition: "1.2s",
          paddingBottom: "10px",
        });
        setcolor("black");
      } else {
        setnavBg({ backgroundColor: "" });
        if (path === "/login" || path === "/signup") {
          setcolor("black");
        } else {
          setcolor("white");
        }
      }
    };
  }, [path]);

  return (
    <div style={bgColor} className=" pt-3 pb-2">
      <Navbar style={navBg} className="shadow-lg" expand="lg">
        <Navbar.Brand>
          {" "}
          <Link style={navStyle} to="/">
            <img width="50px" src={img} alt="" srcset="" />
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
