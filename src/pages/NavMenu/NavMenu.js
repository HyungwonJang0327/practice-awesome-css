import React from "react";
import "./NavMenu.scss";

const NavMenu = () => {
  const list = document.querySelectorAll(".list");
  console.log(list);
  //   function activeLink() {
  //     list.map((item) => item.classList.remove("active"));
  //     this.classList.add("active");
  //   }
  //   list.map((item) => item.addEventListener("click", activeLink));
  return (
    <div id="navMenu">
      <p className="title">2022. 06. 13 Nav Menu</p>
      <div className="cssItem">
        <div className="navigation">
          <ul>
            <li className="list active" style={{ "--clr": "#f44336" }}>
              <a href="#">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                  <ion-icon name="person-outline"></ion-icon>
                </span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                  <ion-icon name="camera-outline"></ion-icon>
                </span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
