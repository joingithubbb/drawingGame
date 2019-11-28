import React, { useState, useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Game } from "./Game";
import { Home } from "./Home";
import { End } from "./End";

const PointsContext = React.createContext();

function GameEngine() {

  // var points = 0;
  console.log("Points before: " + points);
  var [points, setPoints] = useState(0);
  console.log("Points after: " + points);


  //Hier reducer einbauen
  // function pointsCallback(scoreOfTheRound) {
  //   setPoints(points += scoreOfTheRound);
  //   console.log("pointsCallback: scoreOfTheRound: " + scoreOfTheRound);
  //   // console.log("Score: " + points);
  // }

  const initialState = 0;

  const [transferPoints, setTransferPoints] = useReducer(transferPointsReducer, initialState);

  function transferPointsReducer(transferPoints, action) {
    // console.log("GameEngine.js transferPointsReducer");
    console.log(action);
    switch (action.transferredPoint) {
      case "increment":
        console.log("GameEngine.js increment");
        setPoints(points + 1);
        break;
      case "decrement":
        console.log("GameEngine.js decrement");
        setPoints(points - 1);
        break;
      default:
        console.log("GameEngine.js default");
      // console.log("action.transferredPoint: " + action.transferredPoint);
    }
  }

  return (
    <PointsContext.Provider value={{
      points: points,
      // pointsCallback: pointsCallback,
      setTransferPoints: setTransferPoints
    }}>
      <AppRouter />
    </PointsContext.Provider>
  );
}

/* return (
  <GameContext.Provider
      value=
      {{
          "gameRound": gameRound,
          "label": labels[gameRound - 1],
          "roundWin": roundWin,
          "score": { score }
      }}>
      <DisplayText />
      {gameRender()}
  </GameContext.Provider>
) */

//-----Router-Stuff---------

function RouteToHome() {
  window.location.replace('./');
}

function RouteToGame() {
  window.location.replace('./game');
}

function RouteToEnd() {
  window.location.replace('./end');
}


function HomeRouter() {
  return <Home />;
}

function GameRouter() {
  return (
    <div>
      <Game />
    </div>
  );
}

function EndRouter() {

  // function routeToHome() {

  //   window.location.replace('./');
  // };

  return (
    <End />
  );
}

function NoMatch() {

  return <h1>Nothing to see here - Four Oh! Four</h1>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomeRouter} />
          <Route path="/game" component={GameRouter} />
          <Route path="/end" component={EndRouter} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export { GameEngine, RouteToHome, RouteToGame, RouteToEnd };
export const PointsProvider = PointsContext.Provider;
export const PointsConsumer = PointsContext.Consumer;
export { PointsContext };