import React from "react";
import { Link } from "react-router-dom";

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
      {/* <button type="submit" onClick={HomeRouter}>Home</button> */}
      <Link to="./">Home</Link>
    </div>
  );
}

export { Controls };
