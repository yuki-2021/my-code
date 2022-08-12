import React,{Component} from "react";
import './Task.css'

export default class Task extends Component{
    // render
    render() {
        return (
            <li>
                <label>
                    <input type="checkbox" defaultChecked={this.props.done}/>
                    <span>{this.props.name}</span>
                </label>
            </li>
        );
    }

}