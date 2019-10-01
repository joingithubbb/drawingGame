import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Game } from "./Game";
import { Home } from "./Home";
import { End } from "./End";

function GameEngine() {

//For showing correct route
const[route, setRoute] = useState("Home");
const[lastRoute, setlastRoute] = useState("Home");

//For showing correct route
useEffect(() => {
  if(lastRoute !== route){
    switch (route) {      
      case "Home":
        setlastRoute(route);
        window.location.replace('./');
        break;

      case "Game":
        setlastRoute(route);
        window.location.replace('./game');
        break;

      case "End":
        setlastRoute(route);
        window.location.replace('./end');
        break;

      default:
        NoMatch();
    }
  }
});

    return(
        <AppRouter />
    )
}

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
//  console.log("This is HomeRouter");
  return <Home />;
}

function GameRouter() {
  return(
    <div>
      <Game />
    </div>
  )
}

function EndRouter() {
  
  // function routeToHome() {

  //   window.location.replace('./');
  // };

  return (
    <div>
      <End />
    </div>
  );
}

function NoMatch() {

  return <h1>Nothing to see here - Four Oh! Four</h1>
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