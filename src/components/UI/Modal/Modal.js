import React from "react";
import Button from "../Button/Button";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    props.showModal &&
    ReactDOM.createPortal(
      <React.Fragment>
        <div className={classes.modal}>
          {props.children}
          <footer>
            <Button onClick={props.onClose}>Close</Button>
            <Button onClick={props.onConfirm}>Order</Button>
          </footer>
        </div>
        <div className={classes.backdrop}></div>
      </React.Fragment>,
      document.getElementById("modal-root")
    )
  );
};

export default Modal;
