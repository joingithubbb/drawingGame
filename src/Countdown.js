import React, { useState, useEffect } from "react";



function Countdown(props) {

  var [countdownNumber, setCountdownNumber] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownNumber(countdownNumber -= 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

/*   (function startCountdown() {
    setInterval(
      function countd() {
        setCountdownNumber(countdownNumber -= 1);
      }
      , 1000
    );
  })(); */

  return (

    <div asdf={props.handler(countdownNumber)}>
      Countdown: {countdownNumber}
    </div >

  )

}

export { Countdown };