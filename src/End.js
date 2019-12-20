import React, { useContext } from "react";
import { PointsContext } from "./GameEngine";
import * as gameSettings from "./gameSettings.json";

//REQUIREMENT: declaration and definition of custom hook 1
function useIsWinner() {
    // REQUIREMENT: Use of Context to avoid "prop-drilling"
    const points = useContext(PointsContext);

    if (points.points >= gameSettings.pointsToWin) {
        return true;
    }
    else { return false }
}

function Win() {
    // REQUIREMENT: Use of Context to avoid "prop-drilling"
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
    // REQUIREMENT: Use of Context to avoid "prop-drilling"
    const points = useContext(PointsContext);

    return (
        <div>
            <h2>Oh no, you lost!</h2>
            <h2>Next time you'll do better!</h2>
            <h3>Score: {points.points}</h3>
        </div>
    );
}

//REQUIREMENT: declaration and definition of custom hook 2
function useRouteToHome() {
    window.location.replace('./');
}


function End() {

    function RouteToGame() {
        window.location.replace('./game');
    }

    //REQUIREMENT: use of custom hook 1
    if (useIsWinner() === true) {
        return (
            <div>
                <Win />
                {/* REQUIREMENT: use of custom hook 2 */}
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
                {/* REQUIREMENT: use of custom hook 2 */}
                <button type="submit" onClick={useRouteToHome}>Home</button>
                <br />
                <button type="submit" onClick={RouteToGame}>Play again</button>
            </div>
        );
    }
}

export { End, useIsWinner, useRouteToHome };