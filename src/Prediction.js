import React, { useEffect, useState } from "react";
import { getPrediction } from "./helpers.js";

function Prediction({ theCanvas, model, labels }) {
  let [prediction, setPrediction] = useState(""); // Sets default label to empty string.

  //Predict every second
  useEffect(() => {
    const interval = setInterval(() => {
      //console.log(prediction);
      getPrediction(theCanvas, model).then(prediction =>
        setPrediction(labels[prediction[0]]));
        
/*         if(prediction === ){

        } */
    }, 1000);
    return () => clearInterval(interval);
  }, [prediction, theCanvas, model, labels]);






  return (
    <div>
    </div>
  );
}

export { Prediction };
