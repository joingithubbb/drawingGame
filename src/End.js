import React, { useContext } from "react";
import { RouteToHome } from "./GameEngine";
import { PointsContext } from "./GameEngine";

    function Win () {
        const points = useContext(PointsContext);

        return (
            <div>
                <h2>Yes you won!</h2> 
                <h3>Score: {points}</h3>
            </div>
        );
    }

    function Lose () {
        const points = useContext(PointsContext);

        return (
            <div>
                <h2>Oh no, you lost!</h2>
                <h3>Score: {points}</h3>
            </div>
        );
    }


    function End() {

        const points = useContext(PointsContext);

        if(points >= 5){
            return(
                <div>
                    <Win />
                    <button type="submit" onClick={RouteToHome}>Home</button>
                </div>
            );
        }
        else {
            return(
                <div>
                    <Lose />
                    <button type="submit" onClick={RouteToHome}>Home</button>
                </div>
            );
        }
    }

 export { End };