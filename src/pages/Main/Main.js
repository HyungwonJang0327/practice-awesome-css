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
        <div className="mainItem">undefined</div>
      </div>
    </div>
  );
};

export default Main;
