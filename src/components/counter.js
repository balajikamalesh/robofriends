import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }

    shouldComponenetUpdate(nextProps, nextState) {
        return this.state.count !== nextState.count;
    }

    render(){
        return (
            <button
                id="counter"  
                color={this.props.color}
                onClick={() => this.setState(state => ({count: state.count + 1}))}>
                Count: {this.state.count}
            </button>
        )
    }
}

export default Counter;