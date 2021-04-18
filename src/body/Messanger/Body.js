import React, { useState, useEffect, useRef } from "react";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Message from "./Message";
import { firebaseConfig } from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
firebase.analytics();

const Body = () => {
  const [input, setinput] = useState("");
  const [username, setusername] = useState("");
  const [messages, setmessages] = useState([
    { username: "modarator", message: `hi` },
  ]);

  useEffect(() => {
    const name = localStorage.getItem("displayName")
      ? localStorage.getItem("displayName")
      : prompt("Please Enter Your Name");

    setusername(name);
    db.collection("messages")
      .orderBy("time")
      .onSnapshot((snapshot) => {
        setmessages(
          snapshot.docs.map((docs) => ({ id: docs.id, message: docs.data() }))
        );
      });
  }, []);

  const onClickHandler = (event) => {
    event.preventDefault();
    setinput("");

    db.collection("messages")
      .add({
        username: username,
        message: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const messageEl = useRef(null);
  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);
  return (
    <div className="app">
      <div className="message-body">
        <div ref={messageEl} className="message">
          <FlipMove>
            {messages.map(({ id, message }) => (
              <Message key={id} username={username} message={message}></Message>
            ))}
          </FlipMove>
        </div>
        <form action="" method="post" className="d-flex  form-message">
          <input
            onChange={(e) => setinput(e.target.value)}
            value={input}
            className="form-control"
            type="text"
          />
          <input
            disabled={!input}
            onClick={onClickHandler}
            style={{backgroundColor:"#5EDEFB"}}
            className="btn text-white ml-2"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};
// scrollPane.getViewport().setViewPosition(new Point(0,0));

export default Body;
