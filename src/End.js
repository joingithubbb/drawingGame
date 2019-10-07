import React, { useContext } from "react";
import { RouteToHome } from "./GameEngine";
import { PointsContext } from "./GameEngine";

    function Win () {

        return (
            <p1>Yes you won!</p1> 
        )
    }

    function Lose () {

        return (
            <p1>Oh no, you lost!</p1>
        )
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
            )
        }
        else {
            return(
                <div>
                    <Lose />
                    <button type="submit" onClick={RouteToHome}>Home</button>
                </div>
            )
        }
    }

 export { End };