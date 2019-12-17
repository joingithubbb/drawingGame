import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {

        return (
            <div>
                <h1>Sketch</h1>
                <InfoTextHome />
                <PlayGameButton />
            </div>
        );
    }
}

class InfoTextHome extends Component {
    render() {

        return (
            <div>
                <h2>Welcome to Sketch the Drawing Game!</h2>
                <h3>This is a game inspired by Google's "Quick, Draw!" - You'll have to draw quickly!</h3>
                <br></br>
            </div>
        );
    }
}


class PlayGameButton extends Component {
    render() {

        return (
            <Link to="./game">Proceed</Link>
        );
    }
}

export { Home, PlayGameButton };