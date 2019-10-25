import React from "react";

function GameInfoText(props) {

    if (props.currentLabel === "loading") {
        return (
            <h1>Please wait a moment...</h1>
        );
    }

    else {
        return (
            <h1>Draw a {props.currentLabel}!</h1>
        );
    }
}

export { GameInfoText };