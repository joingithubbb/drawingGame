import React, { useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Game } from "./Game";
import { Home } from "./Home";
import { End } from "./End";
import * as tf from "@tensorflow/tfjs";

const model = tf.loadModel("./model/model.json");

const PointsContext = React.createContext();

function transferPointsReducer(points, action) {
  switch (action.transferredPoint) {
    case "increment":
      return points + 1;
    case "decrement":
      return points - 1;
    default:
  }
}

function GameEngine() {

  const initialState = 0;

  var [points, setPoints] = useReducer(transferPointsReducer, initialState);

  function setThePoints(increase) {
    if (increase === true) {
      setPoints({ transferredPoint: "increment" });
    }

    else {
      setPoints({ transferredPoint: "decrement" });
    }

  }

  return (
    <PointsContext.Provider value={{
      "points": points,
      "setThePoints": setThePoints
    }}>
      <AppRouter setThePoints={setThePoints} />
    </PointsContext.Provider>
  );
}

function HomeRouter() {
  return <Home />;
}

function GameRouter(props) {

  return (
      <Game setThePoints={props.setThePoints} model={model} />
  );
}

function EndRouter() {

  return (
    <End />
  );
}

function NoMatch() {

  return <h1>Nothing to see here - Four Oh! Four</h1>;
}

function AppRouter(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomeRouter} />
          <Route
            path="/game"
            render={(routeProps) => (<GameRouter {...routeProps} {...props}
              setThePoints={props.setThePoints} />)}
          />
          <Route path="/end" component={EndRouter} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export { GameEngine };
export const PointsProvider = PointsContext.Provider;
export const PointsConsumer = PointsContext.Consumer;
export { PointsContext };
export { HomeRouter };
export { GameRouter };
export { EndRouter };