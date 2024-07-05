import React from "react";
import "./Menu.css";
import Game from "../Game/Game";

function Menu() {
  return (
    <div className="menu">
      <p1>Играем</p1>
      <Game ></Game>
      <Game ></Game>
    </div>
  );
}

export default Menu;
