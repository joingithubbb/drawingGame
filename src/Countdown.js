import React, { useState, useEffect } from "react";
import * as gameSettings from "./gameSettings.json";



function Countdown(props) {

  var [countdownNumber, setCountdownNumber] = useState(gameSettings.roundTime);
  // console.log(props.resetCountdown);
  // console.log(props);

  useEffect(() => {
    const interval = setInterval(() => {
      props.updateCountdownNumber(countdownNumber);
      if (countdownNumber === 0) {
        props.pointEvaluation(false);
        props.resetAssignPointYesOrNo();
        props.resetTheCountdown();
        setCountdownNumber(gameSettings.roundTime);
      }
      else {
        if (props.resetCountdown === true) {
          setCountdownNumber(gameSettings.roundTime);
          // console.log("reeesetCoundtdown before: " + props.resetCountdown);
          props.setResetCountdownToFalse();
          // console.log("reeesetCoundtdown in Countdown: " + props.resetCountdown);
        }
        else {
          setCountdownNumber(countdownNumber -= 1);
        }
        //console.log(countdownNumber);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      Countdown: {countdownNumber}
    </div>

  )

}

export { Countdown };