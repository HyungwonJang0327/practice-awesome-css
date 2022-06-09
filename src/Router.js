import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlowingBtnHoverEffects from "./pages/GlowingBtnHoverEffects/GlowingBtnHoverEffects";
import IsometricMenu from "./pages/IsometricMenu/IsometricMenu";
import Main from "./pages/Main/Main";
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
