import React from "react";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div id="loginPage">
      <p className="title">2022. 06. 12 Login Page</p>
      <div className="cssItem">
        <div className="cover">
          <div className="formUi">
            <form action="" method="post">
              <id className="closeForm" />
              <div className="formBody">
                <div className="welcomeLines">
                  <div className="wLine1">Hey, Codex</div>
                  <div className="wLine2">Welcome Back</div>
                </div>
                <div className="inputArea">
                  <div className="fInp">
                    <input type="text" placeholder="Email Address" />
                  </div>
                  <div className="fInp">
                    <input type="text" placeholder="password" />
                  </div>
                </div>
                <div className="submitBtnCvr">
                  <button className="submitBtn">LOGIN</button>
                </div>
                <div className="forgotPassword">
                  <a href="/">Forgot password</a>
                </div>
                <div className="bar" />
              </div>
            </form>
            <div className="imgBox">
              <img
                src="http://k003.kiwi6.com/hotlink/g6uwrzfdof/l_ui.png"
                alt="Ui"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
