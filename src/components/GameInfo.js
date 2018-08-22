import React from 'react';

export function GameInfo(props){
    return (
        <div className="game-info">
            <p>Game Info</p>
            <div className={props.winnerObj ? 'winner' : 'status'}>{props.status}</div>
        </div>
    );
}