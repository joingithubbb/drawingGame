
import React from "react";
import { RouteToHome } from "./GameEngine";

 function End() {

     return(
         <div>
            <h2>End</h2>
            <button type="submit" onClick={RouteToHome}>Home</button>
        </div>
     )
 }

 export { End };