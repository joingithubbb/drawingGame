import React, { useState, useEffect } from "react";
import * as gameSettings from "./gameSettings.json";


function Round(props) {

    if (props.round <= gameSettings.maxRounds) {
        return (
            <div>
                Round: {props.round}
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