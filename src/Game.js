import { Canvas } from "./Canvas";
import { Controls } from "./Controls";

import React from "react";
import "./index.css";
import * as tf from "@tensorflow/tfjs";



function Game(){

    const model = tf.loadModel("./model/model.json");
    const labels = require("./labels.json");
    let ref = React.createRef();

    return(
    <div>
        <Canvas ref={ref} />
        <Controls theCanvas={ref} model={model} labels={labels} />
    </div>
        )
};

export { Game };
