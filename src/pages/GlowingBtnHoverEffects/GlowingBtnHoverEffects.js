import React from "react";
import "./GlowingBtnHoverEffects.scss";

const GlowingBtnHoverEffects = () => {
  return (
    <div id="glowingBtnHoverEffects">
      <p>2022. 06. 10 Glowing Btn Hover Effects</p>
      <div className="cssItem">
        <a href="/" style={{ "--clr": "#1e9bff" }}>
          <span>Button</span>
          <i />
        </a>
        <a href="/" style={{ "--clr": "#ff1867" }}>
          <span>Button</span>
          <i />
        </a>
        <a href="/" style={{ "--clr": "#6eff3e" }}>
          <span>Button</span>
          <i />
        </a>
      </div>
    </div>
  );
};

export default GlowingBtnHoverEffects;
