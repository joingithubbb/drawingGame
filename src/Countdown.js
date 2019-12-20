import React, { useState, useEffect } from "react";
import * as gameSettings from "./gameSettings.json";



function Countdown(props) {

  var [countdownNumber, setCountdownNumber] = useState(gameSettings.roundTime);

  //REQUIREMENT: Appropriate use of side-effects, useEffect() hook
  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownNumber === 0) {
        props.pointEvaluation(false); // no point is given for this round, because the time is up
        setCountdownNumber(gameSettings.roundTime); // reset of the countdown time
      }
      else {
        if (props.resetCountdown === true) {
          setCountdownNumber(gameSettings.roundTime); // extraordinary reset of the countdown time
          props.setResetCountdownToFalse();
        }
        else {
          setCountdownNumber(countdownNumber -= 1); // here the countdown gets counted down every second
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