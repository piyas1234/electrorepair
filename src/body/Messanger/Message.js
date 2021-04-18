import React, { forwardRef } from "react";
import "./Message.css";
const Message = forwardRef(({ username, message }, ref) => {
  const user = username === message.username;
  return (
    <div style={{ marginBottom: "50px" }} ref={ref}>
      {user ? (
        <div style={{backgroundColor:"#FF65BF", color:"white"}} className="user card p-3 ml-auto text-right text-white m-3">
          <h6>{message.username + " :" + message.message}</h6>
        </div>
      ) : (
        <h6 className="m-3 nonUser card p-3   text-right">
          {message.username + " :" + message.message}
        </h6>
      )}
    </div>
  );
});

export default Message;
