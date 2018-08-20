import React, {Component} from "react";
import {Board, calculateWinner} from "./Board";


export class Game extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        }
    }

    handleSquareClick(i){
        const history = this.state.history;
        const current = history[history.length -1];
        const squares = current.squares.slice();

        if(calculateWinner(squares) || squares[i]){
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !this.state.xIsNext
        });

        // console.log('clicked square - GAME ', i);
        // // this.setState({squares: })
        //
        // const squares = this.state.squares.slice(); //immutable copy
        // squares[i] = this.state.xIsNext ? 'X' : 'O';
        //
        // this.setState({
        //     squares: squares,
        //     xIsNext: !this.state.xIsNext
        // });
    }

    render(){
        const history = this.state.history;
        const current = history[history.length -1];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <h2>game</h2>
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleSquareClick(i)}
                    />
                </div>

                <div className="game-info">
                    <div>{status}</div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}
