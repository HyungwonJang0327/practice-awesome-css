import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IsometricMenu from "./pages/IsometricMenu/IsometricMenu";
import Main from "./pages/Main/Main";
import "./styles/reset.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/isometricMenu" element={<IsometricMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
