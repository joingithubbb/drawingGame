import React, { useEffect, useState } from "react";
import { getPrediction } from "./helpers.js";

function Prediction({ theCanvas, model, labels }) {
  let [prediction, setPrediction] = useState(""); // Sets default label to empty string.


  useEffect(() => {
    console.log(prediction);
  });

  //Predict every second
  useEffect(() => {
    predict();
  }, []);

  function predict() {
    setInterval(
      function pred() {
        getPrediction(theCanvas, model).then(prediction =>
          setPrediction(labels[prediction[0]])
        )
      }
      , 1000
    );
  }




  return (
    <div>
      <button
        onClick={() =>
          getPrediction(theCanvas, model).then(prediction =>
            setPrediction(labels[prediction[0]])
          )
        }
      >
        Predict the drawing.
      </button>
    </div>
  );
}

export { Prediction };
