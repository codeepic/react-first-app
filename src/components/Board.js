import React, {Component} from "react";
import {Square} from "./Square";

export class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null), //make array of 9 nulls
            xIsNext: true
        }

        console.log('BOARDDD state', this.state);
    }

    handleBtnClick(i){
        // this.setState({squares: })
        console.log('clicked square - MSG FROM BOARD ', i);

        const squares = this.state.squares.slice(); //immutable copy
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });

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
        )
    }

    //render function runs on every component state change
    render() {
        console.log('render fn RUUUNS S');
        const winner = calculateWinner(this.state.squares);
        let status;

        if(winner){
            status = 'Winner is ' + winner;
        }else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }

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

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}