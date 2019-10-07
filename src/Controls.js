import React from "react";

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
    </div>
  );
}

export { Controls };
