import React, {Component} from "react";
import {Board} from "./Board";


export class Game extends React.Component{
    render(){
        return (
            <div className="game">
                <Board />
            </div>
        );
    }
}
