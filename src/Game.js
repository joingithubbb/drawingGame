import { useState } from "react";
import { Canvas } from "./Canvas";
import { Controls } from "./Controls";
import { Prediction } from "./Prediction";
import { RouteToGame } from "./GameEngine"
import { Countdown } from "./Countdown";

import React from "react";
import "./index.css";
import * as tf from "@tensorflow/tfjs";

function Game() {
    const [gameOn, setGameOn] = useState(false);

    const model = tf.loadModel("./model/model.json");
    const labels = require("./labels.json");
    let ref = React.createRef();



    if (!gameOn) {
    return (
        <div>
            { console.log("Hello from !gameOn") }
            <h3>You'll have to draw the requested thing!</h3>
            <h4>For each correct answer you'll get a point. Five points to win! But beware of the countdown!</h4>
            <button type="submit" onClick={() => setGameOn(true)}>Start Game</button>
            <div>
                <Canvas ref={ref} />
                <Controls theCanvas={ref} />
            </div>
        </div>
    )}

    else {
    return (
        <div>
            { console.log("Hello from gameOn") }
            <Countdown />
            <button type="submit" onClick={RouteToGame}>Reset Game</button>
            <div>
                <Canvas ref={ref} />
                <Controls theCanvas={ref} />
                <Prediction theCanvas={ref} model={model} labels={labels} />
            </div>
        </div>
    )}
};

export { Game };
