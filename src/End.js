import React, { useContext } from "react";
import { RouteToHome, RouteToGame } from "./GameEngine";
import { PointsContext } from "./GameEngine";
import * as gameSettings from "./gameSettings.json";

    function Win () {
        const points = useContext(PointsContext);

        return (
            <div>
                <h2>Yes you won!</h2> 
                <h3>Score: {points}</h3>
            </div>
        );
    }

    function Lose () {
        const points = useContext(PointsContext);

        return (
            <div>
                <h2>Oh no, you lost!</h2>
                <h3>Score: {points}</h3>
            </div>
        );
    }


    function End() {

        const points = useContext(PointsContext);

        if(points >= gameSettings.pointsToWin){
            return(
                <div>
                    <Win />
                    <button type="submit" onClick={RouteToHome}>Home</button>
                    <button type="submit" onClick={RouteToGame}>Play again</button>
                </div>
            );
        }
        else {
            return(
                <div>
                    <Lose />
                    <button type="submit" onClick={RouteToHome}>Home</button>
                    <button type="submit" onClick={RouteToGame}>Play again</button>
                </div>
            );
        }
    }

 export { End };