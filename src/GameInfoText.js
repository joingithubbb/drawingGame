import React, {useContext} from "react";
import { PointsContext } from "./GameEngine";

function GameInfoText(props) {

    const points = useContext(PointsContext);

    console.log("GameInfoText.js Line 8 props.getsPoint: " + props.getsPoint);

    if (props.currentLabel === "loading") {
        return (
            <h1>Please wait a moment...</h1>
        );
    }

    else if (props.getsPoint === false) {
        return (
            <div>
                <h1>{props.getsPoint}</h1>
                <h1>Oh man you can do better!</h1>
                <h1>Points: {points.points}</h1>
                <h1>Draw a {props.currentLabel}!</h1>
            </div >
        );
    }

    else if (props.getsPoint === true) {
        return (
            <div>
                <h1>Nice job!</h1>
                <h1>Points: {points.points}</h1>
                <h1>Draw a {props.currentLabel}!</h1>
            </div>
        );
    }

    else {
        // console.log("getsPoint: " + props.getsPoint);
        return (
            <div>
                {/* <h1>{props.getsPoint}</h1> */}
                <h1>Draw a {props.currentLabel}!</h1>
            </div>
        );
    }
}

export { GameInfoText };