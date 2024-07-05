import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {


  return (
    <div className="menu">
      <div className="game">
        <Link to={`/menu/game/:${id}`}>
        <div className="one">
          <p>Кино</p>
        </div>
        </Link>
        <Link to={'/menu/game/:id'}>
        <div className="one">
          <p>Игры</p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
