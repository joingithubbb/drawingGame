import { useState, useReducer } from "react";
import { Canvas } from "./Canvas";
import { Controls } from "./Controls";
import { Prediction } from "./Prediction";
import { RouteToGame } from "./GameEngine"
import { Countdown } from "./Countdown";
import { Round } from "./Round";
import { PointsContext } from "./GameEngine";
import { GameInfoText } from "./GameInfoText";

import React from "react";
import "./index.css";
import * as tf from "@tensorflow/tfjs";
import * as gameSettings from "./gameSettings.json";

//        const points = useContext(PointsContext);

function Game() {
    const model = tf.loadModel("./model/model.json");
    const labels = require("./labels.json");
    let ref = React.createRef();

    const [round, setRound] = useState(1);
    const [determineRoundStopper, setDetermineRoundStopper] = useState(false);
    const [resetCountdown, setResetCountdown] = useState(false);

    const [gameOn, setGameOn] = useState(false);
    var currentLabel;
    switch (round) {
        case 1:
            currentLabel = labels[0];
            break;
        case 2:
            currentLabel = labels[1];
            break;
        case 3:
            currentLabel = labels[2];
            break;
        case 4:
            currentLabel = labels[3];
            break;
        case 5:
            currentLabel = labels[4];
            break;
        case 6:
            currentLabel = labels[5];
            break;
        case 7:
            currentLabel = labels[6];
            break;
        case 8:
            currentLabel = labels[7];
            break;
        case 9:
            currentLabel = labels[8];
            break;
        case 10:
            currentLabel = labels[9];
            break;
        case 11:
            currentLabel = "loading";
            break;
        default:
            currentLabel = "Something went wrong";
    }

    function incrementLabel() {
        currentLabel = labels[round - 1];
    }

    function determineRound(countdownNumber) {
        var jumpToEnd = 0;
        console.log("Current label: " + currentLabel);
        incrementLabel();
        console.log("Current label: " + currentLabel);
        if (resetCountdown === true && countdownNumber === 0) {
            //console.log("Round: " + round);
            setRound(round + 1);
            //console.log("Round: " + round);
            setDetermineRoundStopper(true);
            setResetCountdown(false);
            jumpToEnd += 1;

            //Small workaround for jumping to /end after finishing last round
            if (round === gameSettings.maxRounds && jumpToEnd === 1) {
                jumpToEnd = 0;
                window.location.replace('./end');
            }
        }
    }

    function resetTheCountdown(bool) {
        setResetCountdown(bool);
    }

    function updateCountdownNumber(countdownNumber) {
        determineRound(countdownNumber);
    }




    if (!gameOn) {
        return (
            <div>
                <h3>You'll have to draw the requested thing!</h3>
                <h4>For each correct answer you'll get a point. {gameSettings.pointsToWin} points to win! But beware of the countdown!</h4>
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
                <GameInfoText currentLabel={currentLabel} />
                <Countdown updateCountdNumber={updateCountdownNumber} resetCountdown={setResetCountdown} />
                <Round countdownNumber={round} />
                <button type="submit" onClick={RouteToGame}>Reset Game</button>
                <div>
                    <Canvas ref={ref} />
                    <Controls theCanvas={ref} />
                    <Prediction theCanvas={ref} model={model} labels={labels} />
                </div>
            </div>
        )
    }
};

export { Game };
