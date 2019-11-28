import React, {useContext} from "react";
import { PointsContext } from "./GameEngine";

function GameInfoText(props) {

    const points = useContext(PointsContext);

    // console.log("GameInfoText.js Line 8 props.displayPoint: " + props.displayPoint);

    if (props.currentLabel === "loading") {
        return (
            <h1>Please wait a moment...</h1>
        );
    }

    else if (props.displayPoint === false) {
        console.log("%cRerender","color:orange");
        return (
            <div>
                <h1>Oh man you can do better!</h1>
                <h1>Points: {points.points}</h1>
                <h1>Draw a {props.currentLabel}!</h1>
            </div >
        );
    }

    else if (props.displayPoint === true) {
        console.log("%cRerender","color:orange");
        return (
            <div>
                <h1>Nice job!</h1>
                <h1>Points: {points.points}</h1>
                <h1>Draw a {props.currentLabel}!</h1>
            </div>
        );
    }

    else {
        // console.log("displayPoint: " + props.displayPoint);
        return (
            <div>
                {/* <h1>{props.displayPoint}</h1> */}
                <h1>Draw a {props.currentLabel}!</h1>
            </div>
        );
    }
}

export { GameInfoText };