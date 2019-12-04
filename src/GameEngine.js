import React, { useState, useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Game } from "./Game";
import { Home } from "./Home";
import { End } from "./End";
import * as tf from "@tensorflow/tfjs";

const PointsContext = React.createContext();

function transferPointsReducer(points, action) {
  // console.log("GameEngine.js transferPointsReducer");
  console.log(action);
  switch (action.transferredPoint) {
    case "increment":
      console.log("GameEngine.js increment");
      return points + 1;
    //break;
    case "decrement":
      console.log("GameEngine.js decrement");
      return points - 1;
    //break;
    default:
      console.log("GameEngine.js default");
    // console.log("action.transferredPoint: " + action.transferredPoint);
  }
}

function GameEngine() {

  const initialState = 0;

  var [points, setPoints] = useReducer(transferPointsReducer, initialState);

  console.log("props.setPoints GameEngine: " + JSON.stringify(setPoints));
  return (
    <PointsContext.Provider value={{
      "points": points,
      "setPoints": setPoints
      // pointsCallback: pointsCallback,
      // setTransferPoints: setTransferPoints
    }}>
      <AppRouter setPoints={setPoints} />
    </PointsContext.Provider>
  );

  // var points = 0;
  // console.log("Points before: " + points);
  // var [points, setPoints] = useState(0);
  // console.log("Points after: " + points);


  //Hier reducer einbauen
  // function pointsCallback(scoreOfTheRound) {
  //   setPoints(points += scoreOfTheRound);
  //   console.log("pointsCallback: scoreOfTheRound: " + scoreOfTheRound);
  //   // console.log("Score: " + points);
  // }
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

function GameRouter(props) {
  const model = tf.loadModel("./model/model.json");

  console.log("props.setPoints gamerouter: " + JSON.stringify(props.setPoints));
  // console.log("props gamerouter: " + props);
  return (
    <div>
      <Game setPoints={props.setPoints} model={model} />
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

function AppRouter(props) {
  console.log("props.setPoints approuter: " + JSON.stringify(props.setPoints));
  return (
    <Router setPoints={props.setPoints}>
      <div>
        <Switch setPoints={props.setPoints}>
          <Route path="/" exact component={HomeRouter} />
          {/* <Route path="/game" component={GameRouter} setPoints={props.setPoints} /> */}
          <Route
            path="/game"
            render={(props) => (<GameRouter {...props} setPoints={{setPoints: props.setPoints}} />)}
          />
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