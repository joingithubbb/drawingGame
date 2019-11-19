import React, { useEffect, useState } from "react";
import { getPrediction } from "./helpers.js";
// import { URL_PROPERTIES } from "@tensorflow/tfjs-core/dist/environment_util";

function Prediction({ theCanvas, model, labels, pointEvaluation, currentLabel,
  round, /* assignPointYesOrNo,  */resetTheCountdown, setResetCountdownToFalse }) {
  let [prediction, setPrediction] = useState(""); // Sets default label to empty string.

  if(prediction === null){
    console.log("%c PREDICTION IS NULL!!", "color: #ff0000");
  }

  //Predict every second
  useEffect(() => {
    const interval = setInterval(() => {
      if(prediction === null){
        console.log("%c PREDICTION IS NULL!!", "color: #ff0000");
      }

      if (prediction !== null) {
        getPrediction(theCanvas, model).then(prediction =>
          setPrediction(labels[prediction[0]]));


        if (prediction === currentLabel) {
          console.log("It matches!");
          pointEvaluation(true);
          // assignPointYesOrNo(true);
        }
      }

    }, 1000);
    return () => clearInterval(interval);
  });



  return (
    <div>
    </div>
  );
}

export { Prediction };