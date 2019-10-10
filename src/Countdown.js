import React, { useState } from "react";



  function Countdown() {

    var [countdownNumber, setCountdownNumber] = useState(20);

    (function startCountdown() {
        setInterval(
          function countd() {
            setCountdownNumber(countdownNumber -= 1);
          }
          , 1000
        );
      })();

    return (
        <div>
            { countdownNumber }
        </div>
    );
}

export { Countdown };