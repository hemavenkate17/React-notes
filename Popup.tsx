
import React from "react";

 
const Popup = (props:any) => {
  return (
    <div className="popup-box">
      <div className="box">
        <button className="close-icon" onClick={props.handleClose}>X</button>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;