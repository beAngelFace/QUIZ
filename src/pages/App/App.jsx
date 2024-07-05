import React from "react";
import { useState, useEffect } from "react";
import { Routes, Link, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Main from "../Main/Main";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Welcome from "../Welcome/Welcome";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
      <Routes>
        <Route path={"/"} element={<Welcome />} />
        <Route path={"/main"} element={<Main />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
