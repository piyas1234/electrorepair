import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Navlink from "./body/navigatoin/Navlink";
import React, { createContext, useEffect, useState } from "react";
import Api from "./body/Axios/Api";
import Navbody from "./body/navigatoin/Navbody";
export const UserContext = createContext();
export const AdminContex = createContext();

function App() {
  const [loggedinUser, setloggedinUser] = useState({});
  const [admin, setadmin] = useState(false);

  useEffect(() => {
    const displayName = localStorage.getItem("displayName");
    const email = localStorage.getItem("email");
    const emailVerified = localStorage.getItem("emailVerified");
    const photoURL = localStorage.getItem("photoURL");
    setloggedinUser({ displayName, email, emailVerified, photoURL });
  }, []);

  useEffect(() => {
    Api.post("/isAdmin", { email: localStorage.getItem("email") }).then(
      (res) => {
        setadmin(res.data);
      }
    );
  }, [loggedinUser]);
  return (
    <div  >
       <UserContext.Provider
      className="App"
      value={[loggedinUser, setloggedinUser]}
    >
      <AdminContex.Provider value={[admin, setadmin]}>
        <BrowserRouter >
          <Navbody ></Navbody>
          <Navlink ></Navlink>
        </BrowserRouter>
      </AdminContex.Provider>
    </UserContext.Provider>
    </div>
  );
}

export default App;
