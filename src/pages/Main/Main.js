import React from "react";
import { useNavigate } from "react-router";
import "./Main.scss";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div id="main">
      <div className="mainTitle">Main</div>
      <div className="mainItems">
        <div className="mainItem" onClick={() => navigate("/isometricMenu")}>
          <p>IsometricMenu</p>
          <img src="/CSSImages/IsometricMenu.png" alt="IsometricMenu" />
        </div>
        <div
          className="mainItem"
          onClick={() => navigate("/glowingBtnHoverEffects")}
        >
          <p style={{ fontSize: "13px" }}>Glowing Btn Hover Effects</p>
          <img
            src="/CSSImages/GlowingBtnHoverEffects.png"
            alt="GlowingBtnHoverEffects"
          />
        </div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
        <div className="mainItem">undefined</div>
      </div>
    </div>
  );
};

export default Main;
