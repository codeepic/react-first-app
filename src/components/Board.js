import React, {Component} from "react";
import {Square} from "./Square";

export class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <Square />
            </div>
        );
    }
}