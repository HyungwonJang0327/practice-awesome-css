import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlowingBtnHoverEffects from "./pages/GlowingBtnHoverEffects/GlowingBtnHoverEffects";
import IsometricMenu from "./pages/IsometricMenu/IsometricMenu";
import LoginPage from "./pages/LoginPage/LoginPage";
import Main from "./pages/Main/Main";
import NavMenu from "./pages/NavMenu/NavMenu";
import ProgressBar from "./pages/ProgressBar/ProgressBar";
import "./styles/reset.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/isometricMenu" element={<IsometricMenu />} />
        <Route
          path="/glowingBtnHoverEffects"
          element={<GlowingBtnHoverEffects />}
        />
        <Route path="/progressBar" element={<ProgressBar />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/navmenu" element={<NavMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
