import React, {Component} from "react";
import Child from "./child";

export default class Parent extends Component{
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.state = {
            count : 0
        }

    }

    increment(val){
        this.setState({
            count : val
        })
    }

    render() {

        const Asdfg = "aaaaaaaaaaaaaaaa"
        return (
            <div>
                {/*<h1>{this.state.count}</h1>*/}
                {/*<Child sendfun={ val=>this.increment(val)}/>*/}
                <Child sendfun={Asdfg}/>

            </div>
        );
    }
}