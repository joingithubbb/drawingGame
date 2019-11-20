import { useState, useReducer, useContext } from "react";
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

function Game() {
    const model = tf.loadModel("./model/model.json");
    const labels = require("./labels.json");
    let ref = React.createRef();

    const [round, setRound] = useState(1);
    const [determineRoundStopper, setDetermineRoundStopper] = useState(false);
    const [resetCountdown, setResetCountdown] = useState(false);
    const [getsPoint, setGetsPoint] = useState(false);
    const { points, pointsCallback } = useContext(PointsContext);
    // const [assignPointYesOrNoBool, setAssignPointYesOrNoBool] = useState(false);

    // console.log("resetCountdown Beginning in Game.js: " + resetCountdown);

    const [gameOn, setGameOn] = useState(false);
    var currentLabel;

    if (round <= gameSettings.maxRounds) {
        currentLabel = labels[round - 1];
    }
    else if (round > gameSettings.maxRounds) {
        currentLabel = "loading";
        console.log("points: " + points);
        window.location.replace('./end');
    }

    // //HEART PIECE of Game.js
    // function determineRound(countdownNumber, scoreOfTheRound) {
    //     // console.log("%c DETERMINE ROUND", "color: #ff0000");
    //     // var jumpToEnd = 0;
    //     console.log("currentLabel: " + currentLabel);

    //     // if (countdownNumber === 0) {
    //     //     incrementLabel();
    //     //     resetTheCountdown();
    //     //     incrementTheRound();
    //     //     pointEvaluation(scoreOfTheRound);

    //     //     // setDetermineRoundStopper(true); //brauch ich vielleicht noch!

    //     //     // resetGetsPoint();

    //     //     // jumpToEnd += 1;

    //     //     // //Small workaround for jumping to /end after finishing last round
    //     //     // if (round === gameSettings.maxRounds && jumpToEnd === 1) {
    //     //     //     jumpToEnd = 0;
    //     //     //     window.location.replace('./end');
    //     //     // }
    //     // }
    // }

    //WICHTIG 1
    function incrementLabel() {
        currentLabel = labels[round - 1];
    }

    //WICHTIG 2
    function resetTheCountdown() {
        setResetCountdown(true);

    }

    //WICHTIG 3
    function incrementTheRound() {
        setRound(round + 1);
    }

    //WICHTIG 4
    function pointEvaluation(scoreOfTheRound) {
        if (scoreOfTheRound === true) {
            incrementLabel();
            resetTheCountdown();
            incrementTheRound();
            setGetsPoint(true); // For the display of the "Nice Job!"/"Oh man you can do better!"
            // assignPointYesOrNo(true);
            setAssignPoints({ getsPoint: "increment" }); // to add a point to the score
        }
        else {
            incrementLabel();
            resetTheCountdown();
            incrementTheRound();
            setGetsPoint(false); // For the display of the "Nice Job!"/"Oh man you can do better!"
            // assignPointYesOrNo(false);
            setAssignPoints({ getsPoint: "decrement" }); // to take away a point from the score
        }
    }


    // function assignPointYesOrNo(scoreOfTheRound) {
    //     setAssignPointYesOrNoBool(scoreOfTheRound);
    //     return scoreOfTheRound;
    // }

    // function resetAssignPointYesOrNo() {
    //     setAssignPointYesOrNoBool(false);
    // }



    function pointsReducer(assignPoints, action) {
        switch (action.getsPoint) {
            case "increment":
                pointsCallback(1);
                break;
            case "decrement":
                pointsCallback(-1);
                break;
            default:

                pointsCallback(0);
        }
    }

    const initialState = { getsPoint: 0 };

    // eslint-disable-next-line
    const [assignPoints, setAssignPoints] = useReducer(pointsReducer, initialState);

    // function resetGetsPoint() {
    //     setGetsPoint(false);
    // }


    function setResetCountdownToFalse() {
        setResetCountdown(false);

    }


    if (!gameOn) {
        return (
            <div>
                <h3>You'll have to draw the requested thing!</h3>
                <h4>For each correct answer you'll get a point. {gameSettings.maxRounds} rounds
                it will take! {gameSettings.pointsToWin} points to win! But beware of the countdown!</h4>
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
                <Countdown /* updateCountdownNumber={determineRound} */ resetTheCountdown={resetTheCountdown}
                    /* resetAssignPointYesOrNo={resetAssignPointYesOrNo} */ getsPoint={getsPoint}
                    pointEvaluation={pointEvaluation} resetCountdown={resetCountdown}
                    setResetCountdownToFalse={setResetCountdownToFalse} round={round} />
                <Round round={round} />
                <button type="submit" onClick={RouteToGame}>Reset Game</button>
                <div>
                    <Canvas ref={ref} />
                    <Controls theCanvas={ref} />
                    <Prediction theCanvas={ref} model={model} labels={labels}
                        pointEvaluation={pointEvaluation} currentLabel={currentLabel} round={round}
                        /* assignPointYesOrNo={assignPointYesOrNo} */ resetTheCountdown={resetTheCountdown}
                        setResetCountdownToFalse={setResetCountdownToFalse} />
                </div>
            </div>
        )
    }
};

export { Game };
