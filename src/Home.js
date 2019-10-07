import React from "react";
import { RouteToGame } from "./GameEngine";

 function Home() {

     return(
        <div>
            <h1>Sketch</h1>
            <InfoTextHome />
            <PlayGameButton />
        </div>
     )
 }

 function InfoTextHome() {

    return (
        <div>
            <h2>Welcome to Sketch the Drawing Game!</h2>
            <br></br>
            <h3>This is a game inspired by Google's "Quick, Draw!" - You'll have to draw quickly!</h3>
        </div>
    )
 }

    function PlayGameButton() {
        return (
            <button type="submit" onClick={RouteToGame}>Play Game</button>
        )
    }

 export { Home, PlayGameButton };