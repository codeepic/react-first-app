import React, {Component} from "react";
import {Square} from "./Square";

export class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null) //make array of 9 nulls
        }

        console.log('BOARDDD state', this.state);
    }

    handleBtnClick(i){
        // this.setState({squares: })
        console.log('clicked square - MSG FROM BOARD ', i);

        const squares = this.state.squares.slice(); //immutable copy
        squares[i] = 'X';
        this.setState({squares: squares});

    }

    //now we're passing 2 props from Board to Square, value and onClick
    //The onBtnClick prop is a function that square can call when clicked.

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]} //passing null as initial value
                // value={i}
                onBtnClick={() => this.handleBtnClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player: Xavier';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board">
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>

        );
    }
}