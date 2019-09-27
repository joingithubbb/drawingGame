import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GameEngine } from "./GameEngine";


function App() {
  return (
  <div>
    <AppRouter />
    <GameEngine />
  </div>
  );
}

function HomeRouter() {
  return <h2>Home</h2>;
}

function GameRouter() {
  return <h2>Game</h2>;
}

function EndRouter() {
  
  function routeToHome() {

    window.location.replace('./');
  };

  return (
    <div>
      <h2>End</h2>
      <button type="submit" onClick={routeToHome}>Home</button>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomeRouter} />
        <Route path="/game" component={GameRouter} />
        <Route path="/end" component={EndRouter} />
      </div>
    </Router>
  );
}

export { App, AppRouter };
