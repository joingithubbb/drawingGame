import React from "react";
import * as gameSettings from "./gameSettings.json";


function Round(props) {

    if (props.round <= gameSettings.maxRounds) {
        return (
            <div>
                <h3>Round: {props.round}</h3>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export { Round };