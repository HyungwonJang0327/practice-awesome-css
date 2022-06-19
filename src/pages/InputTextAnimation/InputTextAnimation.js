import React from "react";
import "./InputTextAnimation.scss";

const InputTextAnimation = () => {
  return (
    <div id="inputTextAnimation">
      <p>2022. 06. 19 Input field text animation</p>
      <div className="cssItem">
        <div className="inputBox">
          <input type="text" required="required" />
          <span>First Name</span>
        </div>
        <div className="inputBox">
          <input type="text" required="required" />
          <span>Last Name</span>
        </div>
      </div>
    </div>
  );
};

export default InputTextAnimation;
