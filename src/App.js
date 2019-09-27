<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameEngine from "./GameEngine";

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
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> Initial commit from Create React App
    </div>
  );
}

<<<<<<< HEAD
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

export default AppRouter;
export { App };
=======
export default App;
>>>>>>> Initial commit from Create React App
