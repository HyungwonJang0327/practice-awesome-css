import React from "react";
import "./IsometricMenu.scss";

const IsometricMenu = () => {
  return (
    <div id="isometricMenu">
      <p>2022. 06. 09 Isometric Menu</p>
      <div className="cssItem">
        <ul>
          <li style={{ "--i": 6 }}>
            <a href="/">Home</a>
          </li>
          <li style={{ "--i": 5 }}>
            <a href="/">About</a>
          </li>
          <li style={{ "--i": 4 }}>
            <a href="/">Service</a>
          </li>
          <li style={{ "--i": 3 }}>
            <a href="/">Portfolio</a>
          </li>
          <li style={{ "--i": 2 }}>
            <a href="/">Our Team</a>
          </li>
          <li style={{ "--i": 1 }}>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IsometricMenu;
