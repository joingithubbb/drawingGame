import React from "react";
import { useRouteToHome } from "./End";

function Controls({ theCanvas }) {

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
      <button type="submit" onClick={useRouteToHome}>Home</button>
    </div>
  );
}

export { Controls };
