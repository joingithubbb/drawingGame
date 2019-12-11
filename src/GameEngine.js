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

  function setThePoints(increase) {
    if (increase === true) {
      setPoints({ transferredPoint: "increment" });
    }

    else {
      setPoints({ transferredPoint: "decrement" });
    }

  }

  // console.log("props.setThePoints GameEngine: " + JSON.stringify(setThePoints));
  console.log("props.points GameEngine: " + JSON.stringify(points));

  return (
    <PointsContext.Provider value={{
      "points": points,
      "setThePoints": setThePoints
      // pointsCallback: pointsCallback,
      // setTransferPoints: setTransferPoints
    }}>
      <AppRouter setThePoints={setThePoints} />
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

// function RouteToHome() {
//   // window.location.replace('./'); //diese windows.location.replace ersetzen, da refresh nicht sinnvoll
//   return (
//     <Route path="/"></Route>
//   );
// }

// function RouteToGame() {
  // window.location.replace('./game');
// }

// function RouteToEnd() {
//   window.location.replace('./end');
// }


function HomeRouter() {
  return <Home />;
}

function GameRouter(props) {

  // console.log("props.setThePoints gamerouter: " + JSON.stringify(props.setThePoints));
  // console.log("props gamerouter: " + props);

  return (
      <Game setThePoints={props.setThePoints} model={model} />
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
  // console.log("props.setThePoints approuter: " + JSON.stringify(props.setThePoints));
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomeRouter} />
          {/* <Route path="/game" component={GameRouter} setPoints={props.setPoints} /> */}
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