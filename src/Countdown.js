import React, { useState, useEffect } from "react";
import * as gameSettings from "./gameSettings.json";



function Countdown(props) {

  var [countdownNumber, setCountdownNumber] = useState(gameSettings.roundTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownNumber === 0) {
        props.pointEvaluation(false);
        setCountdownNumber(gameSettings.roundTime);
      }
      else {
        if (props.resetCountdown === true) {
          setCountdownNumber(gameSettings.roundTime);
          props.setResetCountdownToFalse();

        }
        else {
          setCountdownNumber(countdownNumber -= 1);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  if (props.round <= gameSettings.maxRounds) {
    return (
      <div>
        <h3>Countdown: {countdownNumber}</h3>
      </div>

    )
  }

  else {
    return (
      <div></div>
    );
  }
}

export { Countdown };