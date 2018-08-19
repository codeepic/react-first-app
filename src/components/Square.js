import React, {Component} from "react";


export class Square extends React.Component {
    constructor(props){
        super(props);
        console.log('square props: ', this.props)
    }

    render(){
        //onClick calls parent onClick function that was passed as a prop
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         value: null
    //     }
    // }
    //
    // showMessage(){
    //     console.log('I am message');
    //     console.log('props:: ', this.props);
    //     // console.log('thisisL ', this);
    //     //
    //     //
    //     // console.log('clicked on btn ', this.props.value);
    //     // console.log('props are::: ', this.props);
    // }
    //
    // render(){
    //     return (
    //         <button className="square" onClick={() => this.setState({value: 'X'})}>
    //         {/*<button className="square" onClick={() => this.showMessage()}>*/}
    //         {/*<button className="square" onClick={this.showMessage.bind(this)}>*/}
    //             props {this.props.value}&nbsp;
    //             state {this.state.value}
    //         </button>
    //     );
    // }
}