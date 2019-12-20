import React, { useContext } from "react";
import { PointsContext } from "./GameEngine";

function GameInfoText(props) {

    // REQUIREMENT: Use of Context to avoid "prop-drilling"
    const { points } = useContext(PointsContext);

    if (props.currentLabel === "loading") {
        return (
            <h1>Please wait a moment...</h1>
        );
    }

    else if (props.displayPoint === false) {
        return (
            <div>
                <h1>Oh man you can do better!</h1>
                <h1>Points: {points}</h1>
                <h1>Draw a {props.currentLabel}!</h1>
            </div >
        );
    }

    else if (props.displayPoint === true) {
        return (
            <div>
                <h1>Nice job!</h1>
                <h1>Points: {points}</h1>
                <h1>Draw a {props.currentLabel}!</h1>
            </div>
        );
    }

    else {
        return (
            <div>
                <h1>Points: {points}</h1>
                <h1>Draw a {props.currentLabel}!</h1>
            </div>
        );
    }
}

export { GameInfoText };