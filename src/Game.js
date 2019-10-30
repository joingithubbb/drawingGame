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
    const [getsPoint, setGetsPoint] = useState(false);

    const [gameOn, setGameOn] = useState(false);
    var currentLabel;

    // if(typeof getsPoint === 'undefined'){
    // var getsPoint = true;
    // }

    // console.log("%c BANANA", "color: #ff0000");
    // console.log("getsPoint (Banana): " + getsPoint);

    if (round < 11) {
        currentLabel = labels[round - 1]
    }
    else {
        currentLabel = "loading";
    }

    function incrementLabel() {
        currentLabel = labels[round - 1];
    }

    function pointEvaluation(pointYesOrNo) {
        if (pointYesOrNo === true) {
            setRound(round + 1);
            resetTheCountdown(false);
            setGetsPoint(pointYesOrNo);
        }
        // console.log("getsPoint: " + getsPoint);
    }

    function resetGetsPoint() {
        setGetsPoint(false);
    }

    function determineRound(countdownNumber) {
        var jumpToEnd = 0;

        if (resetCountdown === true && countdownNumber === 0) {
            incrementLabel();
            setRound(round + 1);
            setDetermineRoundStopper(true);
            setResetCountdown(false);
            resetGetsPoint();
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
                <h4>For each correct answer you'll get a point. {gameSettings.maxRounds} rounds it will take! {gameSettings.pointsToWin} points to win! But beware of the countdown!</h4>
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
                <GameInfoText currentLabel={currentLabel} getsPoint={getsPoint} />
                <Countdown updateCountdNumber={updateCountdownNumber} resetCountdown={setResetCountdown} getsPoint={getsPoint} />
                <Round countdownNumber={round} />
                <button type="submit" onClick={RouteToGame}>Reset Game</button>
                <div>
                    <Canvas ref={ref} />
                    <Controls theCanvas={ref} />
                    <Prediction theCanvas={ref} model={model} labels={labels} pointEvaluation={pointEvaluation} currentLabel={currentLabel} round={round} />
                </div>
            </div>
        )
    }
};

export { Game };
