import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Game } from "./Game";
import { Home } from "./Home";
import { End } from "./End";

const PointsContext = React.createContext();

function GameEngine() {

  // var points = 0;
  var [points, setPoints] = useState(0);

  function pointsCallback(scoreOfTheRound) {
    setPoints(points += scoreOfTheRound);
    console.log("pointsCallback: scoreOfTheRound: " + scoreOfTheRound);
    console.log("Score: " + points);
  }

  return (
    <PointsContext.Provider value={{
      points: points,
      pointsCallback: pointsCallback
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