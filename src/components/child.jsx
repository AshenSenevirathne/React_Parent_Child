import React, {Component} from "react";

export default class Child extends Component{
    constructor(props) {
        super(props);

        this.add = this.add.bind(this);
    }

    add(){
        this.props.sendfun(100)
    }

    render() {
        const num = 20;
        let val = num < 10 ? 1 : num > 10 ? 3 : 2;

        return (
            /*<button onClick={this.add}>Increment</button>*/
            <h1>{val}</h1>
        );
    }
}