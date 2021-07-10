import React from "react";

const Popup = props => {
    return (
        <div className="popup-box items-center">
            <div className="box">
                <span className="close-icon hover:bg-red-500" onClick={props.handleClose}>x</span>
                Sent Successfully!!!
                {props.content}
            </div>
        </div>
    );
};

export default Popup;