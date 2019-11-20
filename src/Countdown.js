import React, { useState, useEffect } from "react";
import * as gameSettings from "./gameSettings.json";



function Countdown(props) {

  var [countdownNumber, setCountdownNumber] = useState(gameSettings.roundTime);

  useEffect(() => {
    const interval = setInterval(() => {
      // props.updateCountdownNumber(countdownNumber);
      if (countdownNumber === 0) {
        props.pointEvaluation(false);
        // props.resetAssignPointYesOrNo();
        // props.resetTheCountdown();
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
        Countdown: {countdownNumber}
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