import React, { useContext } from "react";
import { PointsContext } from "./GameEngine";
import * as gameSettings from "./gameSettings.json";

function useIsWinner() {
    const points = useContext(PointsContext);

    if (points.points >= gameSettings.pointsToWin) {
        return true;
    }
    else { return false }
}

function Win() {
    const points = useContext(PointsContext);

    return (
        <div>
            <h2>Yes you won!</h2>
            <h2>Congratulations! YOU ARE THE BEST!</h2>
            <h3>Score: {points.points}</h3>
        </div>
    );
}

function Lose() {
    const points = useContext(PointsContext);

    return (
        <div>
            <h2>Oh no, you lost!</h2>
            <h2>Next time you'll do better!</h2>
            <h3>Score: {points.points}</h3>
        </div>
    );
}

function useRouteToHome() {
    window.location.replace('./');
}


function End() {

    function RouteToGame() {
        window.location.replace('./game');
    }

    if (useIsWinner() === true) {
        return (
            <div>
                <Win />
                <button type="submit" onClick={useRouteToHome}>Home</button>
                <br />
                <button type="submit" onClick={RouteToGame}>Play again</button>
            </div>
        );
    }
    else {
        return (
            <div>
                <Lose />
                <button type="submit" onClick={useRouteToHome}>Home</button>
                <br />
                <button type="submit" onClick={RouteToGame}>Play again</button>
            </div>
        );
    }
}

export { End, useIsWinner, useRouteToHome };