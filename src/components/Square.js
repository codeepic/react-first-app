// functional component - easier way to write components that don't have their
// own state
import React from "react";

export function Square(props){
    return (
        <span className="square" onClick={props.onBtnClick}>
            {props.value}
        </span>
    );
}