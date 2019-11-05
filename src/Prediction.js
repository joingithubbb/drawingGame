import React, { useEffect, useState } from "react";
import { getPrediction } from "./helpers.js";
// import { URL_PROPERTIES } from "@tensorflow/tfjs-core/dist/environment_util";

function Prediction({ theCanvas, model, labels, pointEvaluation, currentLabel, round }) {
  let [prediction, setPrediction] = useState(""); // Sets default label to empty string.

  //Predict every second
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(prediction);
      // console.log(prediction + " sollte " + currentLabel + " sein");
      // console.log("round: " + round)

      getPrediction(theCanvas, model).then(prediction =>
        setPrediction(labels[prediction[0]]));

      if (prediction === currentLabel) {
        // console.log("It matches!");
        pointEvaluation(true);
      }

    }, 1000);
    return () => clearInterval(interval);
  }, [prediction, theCanvas, model, labels, pointEvaluation, currentLabel, round]);






  return (
    <div>
    </div>
  );
}

export { Prediction };
