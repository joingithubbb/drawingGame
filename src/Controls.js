import React from "react";
import { RouteToHome } from "./GameEngine";

function Controls({ theCanvas, model, labels }) {

  return (
    <div>
      <button
        onClick={() => {
          const canvas = theCanvas.current;
          const ctx = canvas.getContext("2d");
          ctx.fillRect(0, 0, canvas.height, canvas.width);
        }}
      >
        Clear the canvas.
      </button>
      <button type="submit" onClick={RouteToHome}>Home</button>
    </div>
  );
}

export { Controls };
