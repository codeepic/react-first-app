import React, {Component} from "react";
import {Square} from "./Square";

export class Board extends React.Component {

    // constructor(props){
    //     super(props);
    //
    //     this.state = {
    //         lastMoveIndex: null
    //     }
    // }

    // handleBtnClick(i){
    //     // this.setState({lastMoveIndex: i});
    //     this.props.onClick(i)
    // }

    renderSquare(i) {
        const isWinningSquare = this.props.winningSquares && this.props.winningSquares.indexOf(i) !== -1;

        return (
            <Square
                isWinningSquare = {isWinningSquare}
                isLastMove = {this.props.lastMoveIndex === i}
                value={this.props.squares[i]}
                // onBtnClick={() => this.handleBtnClick(i)}
                onBtnClick={() => this.props.onClick(i)}
            />
        )
    }

    //render function runs on every component state change
    render() {
        return (
            <div>

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

export function calculateWinner(squares) {
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
            // return squares[a];
            // return lines[i];
            return {
                winner: squares[a],
                squares: lines[i]
            }
        }
    }
    return null;
}