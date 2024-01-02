import React, { Component } from "react";

export class MyClassComponents extends Component {
    constructor(props) {
        super(props);

        this.state = {value : 0}
    }

    Increment =() => {
        this.setState({value : this.state.value + 1})
    }

    Decrement =() => {
        this.setState({value : this.state.value - 1})
    }

    Multiply =() => {
        this.setState({value : this.state.value * 2})
    }

    Divide = () => {
        this.setState({value : this.state.value / 2})
    }

    Modules = () => {
        this.setState({value : this.state.value % 2})
    }

    render() {
        return <div>
            <h1>Class Components :</h1>
            <p>Value = <b>{this.state.value}</b></p>
            <button onClick={this.Increment}>+</button>
            <button onClick={this.Decrement}>-</button>
            <button onClick={this.Multiply}>*</button>
            <button onClick={this.Divide}>/</button>
            <button onClick={this.Modules}>%</button>
        </div>
        
    }
}

