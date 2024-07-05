import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Game.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Game() {
  const [game, setGame] = useState([]);
  const[currentQuestion, setCurrentQuestion] = useState(0)
  const {id} = useParams()
  const navigate = useNavigate()
  const fetchData = async () => {
    const res = await axios.get("/api/game/"+ id );
    setGame(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className="main">
        <div className="second">
          <p>Викторина{id}</p>
          <img className='imgr' src={game[currentQuestion]?.images}/>
          <div>{game[currentQuestion]?.question}</div>
          <input className="input"></input>
          <button className='btn'>Проверить</button>
         
          <button className='btn' onClick={()=> { 
            if (currentQuestion < game.length-1){
              setCurrentQuestion((prev)=> prev +1 )
            } else {
              navigate('/Menu')
            }
            }}>Дальше</button>
        </div>
      </div>
  );
}

export default Game;
