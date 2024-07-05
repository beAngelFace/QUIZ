import React from "react";
import { useParams } from "react-router-dom";
import "./Game.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Game() {
  const [game, setGame] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("/api/game");
    setGame(res.data);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const { id } = useParams();
  return (
      <div className="main">
        <div className="second">
          <p>Викторина{id}</p>
          <div>{game}</div>
        </div>
      </div>
  );
}

export default Game;
