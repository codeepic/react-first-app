import React, {Component} from "react";
import {Square} from "./Square";

export class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }

        console.log('BOARDDD state', this.state);
    }

    handleClick(i){
        // this.setState({squares: })
        console.log('clicked quare - MSG FROM BOARD ', i);
    }

    //now we're passing 2 props from Board to Square, value and onClick
    //The onClick prop is a function that square can call when clicked.
    // renderSquare(i){
    //     return <Square
    //         value={this.state.squares[i]}
    //         onSquareClick={() => this.handleSquareClick(i)}
    //     />
    // }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]} //passing null as initial value
                // value={i}
                onClick={() => this.handleClick(i)}
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