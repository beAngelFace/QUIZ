import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Menu.css";


function Menu({theme}) {

  return (
    <div className="menu">
      <div className="game">
        <Link to={`/game/:${theme[0].id}`}>
        <div className="one">
          <p>Игры</p>
        </div>
        </Link>
        <Link to={`/game/:${theme[1].id}`}>
        <div className="one">
          <p>Угадай фильм "со спины"</p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
