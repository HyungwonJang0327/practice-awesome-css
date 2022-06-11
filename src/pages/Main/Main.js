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
          <p>Isometric menu</p>
          <img src="/CSSImages/IsometricMenu.png" alt="IsometricMenu" />
          <p>22. 06. 09</p>
        </div>
        <div
          className="mainItem"
          onClick={() => navigate("/glowingBtnHoverEffects")}
        >
          <p>
            Glowing button <br /> hover effects
          </p>
          <img
            src="/CSSImages/GlowingBtnHoverEffects.png"
            alt="GlowingBtnHoverEffects"
          />
          <p>22. 06. 10</p>
        </div>
        <div className="mainItem" onClick={() => navigate("/progressBar")}>
          <p>Progress Bar</p>
          <img src="/CSSImages/progressBar.png" alt="progressBar" />
          <p>22. 06. 11</p>
        </div>
        <div className="mainItem" onClick={() => navigate("/loginpage")}>
          <p>Login Page</p>
          <img src="/CSSImages/LoginPage.png" alt="progressBar" />
          <p>22. 06. 11</p>
        </div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
        <div className="mainItem">loading...</div>
      </div>
    </div>
  );
};

export default Main;
