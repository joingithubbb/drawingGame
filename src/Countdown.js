import React, { useState, useEffect } from "react";
import * as gameSettings from "./gameSettings.json";



function Countdown(props) {

  var [countdownNumber, setCountdownNumber] = useState(gameSettings.roundTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if(countdownNumber === 0) {
        props.resetCountdown(true);
        setCountdownNumber(gameSettings.roundTime);
      }
      else
      {
        setCountdownNumber(countdownNumber -= 1);
        //console.log(countdownNumber);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownNumber]);

  return (

    <div callback={props.updateCountdNumber(countdownNumber)}>
      Countdown: {countdownNumber}
    </div >

  )

}

export { Countdown };