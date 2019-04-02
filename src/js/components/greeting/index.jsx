import React, {Component} from 'react';
import DisplayName from './DisplayName.jsx';

export default class Greetings extends Component{
    constructor(){
        super();
        this.state = {name:'kanak'};
        this.bind.changeName = this.changeName();
    }

    changeName() {
        this.setState({name:'tarun'});
    };

    render(){
        return(
            <DisplayName name={this.state.name} changeName= {this.changeName()} />
        );
    }
};