import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Game from "../Game/Game";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Welcome from "../Welcome/Welcome";
import "./App.css";

function App() {
  return (
    <>
      <div className="general">
        <Header></Header>
        <Footer></Footer>
      </div>
      <Routes>
        <Route path={"/"} element={<Welcome />} />
        <Route path={"/menu"} element={<Menu />} />
        <Route path={`/menu/game/:id`} element={<Game/>} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}


export default App;
