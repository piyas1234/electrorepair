import  { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import chat from "../images/chat.png";
import Body from "./Body";
 

function Messanger() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{maxHeight:"600px"}}>
      <div className="d-flex">
        <div className="ml-auto w-25">
          <div
            style={{
              position: "fixed",
              zIndex: "100",
              top: "500px",
              width: "100px",
              boxShadow: "3px 3px 3px gray",
            }}
          >
            <messangerModal></messangerModal>
            <img
              onClick={handleShow}
              width="80px"
              src={chat}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <Modal  show={show} onHide={handleClose} animation={false}>
        <Modal.Header  style={{backgroundColor:"#FF65BF", color:"white"}} closeButton>
          <Modal.Title>Customer service</Modal.Title>
        </Modal.Header>
        <span className="bg-primary text-white">hello {localStorage.getItem("displayName") || "sir"},</span>
        <Modal.Body  style={{backgroundColor:"#3E270F"}}> <Body></Body> </Modal.Body>
        <Modal.Footer  style={{backgroundColor:"#3E270F"}}>
          
          <Button variant="primary" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Messanger;
