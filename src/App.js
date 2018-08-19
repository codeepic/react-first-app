import logo from "../src/logo.svg";
import React, {Component} from "react";
import {Game} from "./components/Game";


class App extends Component {
    render() {
        return (
            <div className="app">
                <img src={logo} className="App-logo" alt="logo" />
                I am the react app ttt
                <Game />
            </div>
        )
    }
}

export default App;