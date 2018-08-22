import React, {Component} from "react";
import {Board, calculateWinner} from "./Board";


export class Game extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true,
            lastMoveIndex: null
        }
    }

    handleSquareClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            lastMoveIndex: i
        });
    }

    jumpTo(moveNum){
        this.setState({
            stepNumber: moveNum,
            xIsNext: moveNum % 2 === 0
        });
    }

    calculateLastMoveIndex(currMovesList, prevMovesList){
        if(!prevMovesList) return;

        for(let i = 0; i < currMovesList.squares.length; i++){
            if(currMovesList.squares[i] !== prevMovesList.squares[i]){
                return i;
            }
        }
    }

    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winnerObj = calculateWinner(current.squares);

        const lastMoveIndex = this.calculateLastMoveIndex(current, history[this.state.stepNumber -1]);

        const moves = history.map((step, moveNum) => {
           const desc = moveNum ?
            'Go to move #' + moveNum :
            'Go to game start';

           //https://reactjs.org/tutorial/tutorial.html#picking-a-key
            return (
                <li key={moveNum}>
                    <button onClick={() => this.jumpTo(moveNum)}>{desc}</button>
                </li>
            );
        });


        let status,
            winningSquares;

        if (winnerObj) {
            status = 'Winner: ' + winnerObj.winner;
            winningSquares = winnerObj.squares;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        function showWinningSquares(){
            if(winningSquares){
                return <p>Winning Squares are {winningSquares}</p>
            }else{
                return null;
            }
        }

        return (
            <div className="game">
                <div className="game-board">
                    <h2>game</h2>
                    <Board
                        winningSquares={winningSquares}
                        lastMoveIndex={lastMoveIndex}
                        squares={current.squares}
                        onClick={(i) => this.handleSquareClick(i)}
                    />
                </div>

                {showWinningSquares()}

                <div className="game-info">
                    <div className={winnerObj ? 'winner' : 'status'}>{status}</div>
                    <ol>{moves}</ol>
                </div>

            </div>
        );
    }
}
