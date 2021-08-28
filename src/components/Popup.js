import React from "react";
import './Popup.css';
import CloseIcon from "@material-ui/icons/Close";

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}><CloseIcon/></span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;