import React from "react";
import "./index.css";
import * as gameSettings from "./gameSettings.json";
import { useState } from "react";
import { Canvas } from "./Canvas";
import { Controls } from "./Controls";
import { Countdown } from "./Countdown";
import { Round } from "./Round";
import { GameInfoText } from "./GameInfoText";
import { End } from "./End";
import { Situation } from "./Situation";


function Game(props) {
    const labels = require("./labels.json");
    let ref = React.createRef();

    const [round, setRound] = useState(1);
    const [resetCountdown, setResetCountdown] = useState(false);
    const [displayPoint, setDisplayPoint] = useState(null);
    const [gameOn, setGameOn] = useState(false);
    var currentLabel;

    if (round <= gameSettings.maxRounds) {
        currentLabel = labels[round - 1];
    }
    else if (round > gameSettings.maxRounds) {
        currentLabel = "loading";

        return (
            <End></End>
        )
    }

    function incrementLabel() {
        currentLabel = labels[round - 1];
    }

    function resetTheCountdown() {
        setResetCountdown(true);

    }

    function incrementTheRound() {
        setRound(round + 1);
    }

    function pointEvaluation(scoreOfTheRound) {
        if (scoreOfTheRound === true) {
            incrementLabel();
            resetTheCountdown();
            incrementTheRound();
            setDisplayPoint(true); // For the display of the "Nice Job!"/"Oh man you can do better!"
            props.setThePoints(true);
        }
        else {
            incrementLabel();
            resetTheCountdown();
            incrementTheRound();
            setDisplayPoint(false); // For the display of the "Nice Job!"/"Oh man you can do better!"
            props.setThePoints(false);
        }
    }

    function setResetCountdownToFalse() {
        setResetCountdown(false);

    }

    function RouteToGame() {
        window.location.replace('./game');
    }


    if (!gameOn) {
        return (
            <div>
                <h2>You'll have to draw the requested thing!</h2>
                <h3>For each correct answer you'll get a point. {gameSettings.maxRounds} rounds
                it will take! {gameSettings.pointsToWin} points to win! But beware of the countdown!</h3>
                <button type="submit" onClick={() => setGameOn(true)}>Start Game</button>
            </div>
        )
    }

    else {
        return (
            <div>
                <GameInfoText currentLabel={currentLabel} displayPoint={displayPoint} />
                <Countdown resetTheCountdown={resetTheCountdown}
                    pointEvaluation={pointEvaluation} resetCountdown={resetCountdown}
                    setResetCountdownToFalse={setResetCountdownToFalse} round={round} />
                <Round round={round} />
                <button type="submit" onClick={RouteToGame}>New Game</button>
                <div>
                    <Canvas ref={ref} pointEvaluation={pointEvaluation} currentLabel={currentLabel}
                        model={props.model} labels={labels} />
                    <Controls theCanvas={ref} />
                    <Situation />
                </div>
            </div>
        )
    }
};

export { Game };
