import React, { useState, useEffect } from "react";
import * as gameSettings from "./gameSettings.json";



function Countdown(props) {

  var [countdownNumber, setCountdownNumber] = useState(gameSettings.roundTime);
  // console.log(props.resetCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownNumber === 0) {
        props.pointEvaluation(false);
        props.resetAssignPointYesOrNo();
        setCountdownNumber(gameSettings.roundTime);
      }
      else {
        if (props.resetCountdown === true) {
          setCountdownNumber(gameSettings.roundTime);
        }
        else {
          setCountdownNumber(countdownNumber -= 1);
        }
        //console.log(countdownNumber);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownNumber]);

  return (
    //Vorschlag: Das wegnehmen und in useEffect tun probieren und lugen was passiert
    <div callback={props.updateCountdownNumber(countdownNumber)}>
      Countdown: {countdownNumber}
    </div >

  )

}

export { Countdown };