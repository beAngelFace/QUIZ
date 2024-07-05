import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Main from "../Main/Main";
import "./Welcome.css";

function Welcome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="app">
      <h1
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.7s ease-in-out",
        }}
      >
        Добро пожаловать на квиз
      </h1>
      <div className="div">
        <Link to={"/main"}>
          <button className="button">
            <p>Для начала выборы темы, нажми</p>
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Welcome;
