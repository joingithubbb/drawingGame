import React, { useContext } from "react";
import { RouteToHome } from "./GameEngine";
import { PointsContext } from "./GameEngine";

    function Win () {

        return (
            <h3>Yes you won!</h3> 
        );
    }

    function Lose () {

        return (
            <h3>Oh no, you lost!</h3>
        );
    }


    function End() {

        const points = useContext(PointsContext);

        console.log(points);

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