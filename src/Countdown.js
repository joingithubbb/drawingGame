import React, { useState, useEffect } from "react";
import * as gameSettings from "./gameSettings.json";



function Countdown(props) {

  var [countdownNumber, setCountdownNumber] = useState(gameSettings.roundTime);

  useEffect(() => {
    console.log("effect");
    const interval = setInterval(() => {
      if(countdownNumber === 0) {
        props.resetCountdown(true);
        setCountdownNumber(gameSettings.roundTime);
        console.log("a " + countdownNumber);
      }
      else
      {
        setCountdownNumber(countdownNumber -= 1);
        console.log("b " + countdownNumber);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownNumber]);

  return (

    <div asdf={props.updateCountdNumber(countdownNumber)}>
      Countdown: {countdownNumber}
    </div >

  )

}

export { Countdown };