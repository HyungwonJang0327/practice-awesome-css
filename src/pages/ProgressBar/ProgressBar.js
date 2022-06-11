import React from "react";
import "./ProgressBar.scss";

const ProgressBar = () => {
  return (
    <div id="progressBar">
      <p className="title">2022. 06. 11 Progress Bar</p>
      <div className="cssItem">
        <div className="container">
          <div className="card">
            <div
              className="percent"
              style={{ "--clr": "#04fc43", "--num": "85" }}
            >
              <div className="dot" />
              <svg>
                <circle cx="70" cy="70" r="70" />
                <circle cx="70" cy="70" r="70" />
              </svg>
              <div className="number">
                <h2>
                  85<span>%</span>
                </h2>
                <p>HTML</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="percent"
              style={{ "--clr": "#fee800", "--num": "72" }}
            >
              <div className="dot" />
              <svg>
                <circle cx="70" cy="70" r="70" />
                <circle cx="70" cy="70" r="70" />
              </svg>
              <div className="number">
                <h2>
                  72<span>%</span>
                </h2>
                <p>HTML</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="percent"
              style={{ "--clr": "#ff00be", "--num": "60" }}
            >
              <div className="dot" />
              <svg>
                <circle cx="70" cy="70" r="70" />
                <circle cx="70" cy="70" r="70" />
              </svg>
              <div className="number">
                <h2>
                  60<span>%</span>
                </h2>
                <p>HTML</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="percent"
              style={{ "--clr": "#06ccff", "--num": "95" }}
            >
              <div className="dot" />
              <svg>
                <circle cx="70" cy="70" r="70" />
                <circle cx="70" cy="70" r="70" />
              </svg>
              <div className="number">
                <h2>
                  95<span>%</span>
                </h2>
                <p>HTML</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
