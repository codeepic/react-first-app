// functional component - easier way to write components that don't have their
// own state
export function Square(props){
    return (
        <button className="square" onClick={props.onBtnCLick}>
            {props.value}
        </button>
    );
}