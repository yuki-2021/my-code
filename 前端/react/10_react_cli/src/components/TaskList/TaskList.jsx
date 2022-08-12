import {Component} from "react";
import Task from "../Task/Task"
import './TaskList.css'

export default class TaskList extends Component {
    render() {
        return (
            <ul className="todo-main">
                <Task />
                <Task />
            </ul>
        )
    }
}