import React from "react";
import { useParams } from "react-router-dom";
import "./Game.css";

function Game({ one, two }) {
  const { id } = useParams();
  return (
    <>
      <div className="main">
        <div className="second">
          <p>Викторина{one}</p>
        </div>
      </div>
    </>
  );
}

export default Game;
