// functional component - easier way to write components that don't have their
// own state
import React from "react";

export function Square(props){
    function getClasses() {
        let s = 'square';

        if(props.isLastMove)
            s +=' last-move';

        if(props.isWinningSquare)
            s += ' winning';

        return s;
    }

    return (
        <span className={getClasses()} onClick={props.onBtnClick}>
            {props.value}
        </span>
    );
}