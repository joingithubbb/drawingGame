import React, { useEffect, useState } from "react";
import { getPrediction } from "./helpers.js";

function Prediction({ theCanvas, model, labels }) {
  let [prediction, setPrediction] = useState(""); // Sets default label to empty string.

  //Predict every second
  useEffect(() => {
    console.log(prediction);

    const intervalId = setInterval(
      function pred() {
        getPrediction(theCanvas, model).then(prediction =>
          setPrediction(labels[prediction[0]])
        )
      }
      , 500
    );

    clearInterval(intervalId);
  }, []);

/*   var intervalId;

  function predict() {

  } */




  return (
    <div>
    </div>
  );
}

export { Prediction };
