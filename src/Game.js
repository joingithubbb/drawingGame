import { useState, useReducer } from "react";
import { Canvas } from "./Canvas";
import { Controls } from "./Controls";
import { Prediction } from "./Prediction";
import { RouteToGame } from "./GameEngine"
import { Countdown } from "./Countdown";
import { Round } from "./Round";

import React from "react";
import "./index.css";
import * as tf from "@tensorflow/tfjs";
import * as gameSettings from "./gameSettings.json";

function Game() {

    const [gameOn, setGameOn] = useState(false);

    const model = tf.loadModel("./model/model.json");
    const labels = require("./labels.json");
    let ref = React.createRef();

    const [round, setRound] = useState(1);
    const [determineRoundStopper, setDetermineRoundStopper] = useState(false);
    const [resetCountdown, setResetCountdown] = useState(false);

    function determineRound(countdownNumber) {

        var jumpToEnd = 0;
        if (resetCountdown === true && countdownNumber === 0) {
            setRound(round + 1);
            setDetermineRoundStopper(true);
            console.log("countdownNumber: " + countdownNumber + " resetCountdown: " + resetCountdown);
            setResetCountdown(false);
            console.log("resetCountdown: " + resetCountdown);
            jumpToEnd += 1;

            //Small workaround for jumping to /end after finishing last round
            if (round === gameSettings.maxRounds && jumpToEnd === 1) {
                window.location.replace('./end');
            }
        }
    }

    function resetTheCountdown(bool) {
        setResetCountdown(bool);
        console.log("resetTheCountdown: " + resetCountdown);
    }

    function updateCountdownNumber(countdownNumber) {
        console.log("current timer = " + countdownNumber);
        determineRound(countdownNumber);
    }




    if (!gameOn) {
        return (
            <div>
                {console.log("Hello from !gameOn")}
                <h3>You'll have to draw the requested thing!</h3>
                <h4>For each correct answer you'll get a point. Five points to win! But beware of the countdown!</h4>
                <button type="submit" onClick={() => setGameOn(true)}>Start Game</button>
                <div>
                    <Canvas ref={ref} />
                    <Controls theCanvas={ref} />
                </div>
            </div>
        )
    }

    else {
        return (
            <div>
                {console.log("Hello from gameOn")}
                <Countdown updateCountdNumber={updateCountdownNumber} resetCountdown={setResetCountdown} />
                <Round countdownNumber={round} />
                <button type="submit" onClick={RouteToGame}>Reset Game</button>
                <div>
                    <Canvas ref={ref} />
                    <Controls theCanvas={ref} />
                    {/* <Prediction theCanvas={ref} model={model} labels={labels} /> */}
                </div>
            </div>
        )
    }
};

export { Game };
