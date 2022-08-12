import {Component} from "react";
import './AddTask.css'

export default class AddTask extends Component {
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}