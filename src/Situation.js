import React from "react";
import { useIsWinner } from "./End";

function Situation() {

    //REQUIREMENT: use of custom hook 1
    if (useIsWinner() === true) {
        return (
            <div>
                <h1>You are winning!</h1>
                <h1>GOOD JOB PLAYER!</h1>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1>You need more points!</h1>
                <h1>YOU CAN DO THIS!</h1>
            </div>
        );
    }
}

export { Situation };