import React, { useState, useEffect } from "react";



function Round(props) {
    // var [round, setRound] = useState(1);


    // useEffect(() => {
    //     if (props.countdownNumber === 0) {
    //         setRound(round + 1);
    //     }
    // });

    return (
        <div>
            Round: {props.countdownNumber}
        </div>
    );
}

export { Round };