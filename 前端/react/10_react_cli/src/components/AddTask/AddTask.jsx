import {Component} from "react";
import './AddTask.css'
import {nanoid} from 'nanoid'


export default class AddTask extends Component {
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyDown={this.handleInput}/>
            </div>
        )
    }
    // 回调函数
    handleInput = (event) => {
        if(event.code == 'Enter') { // 表示需要添加
            // 不能添加
            if(event.target.value == '') {
                return alert("名称不能为空");
            }
            // 添加任务 - 通知App添加todoList
            let newTask = {id: nanoid(), name: event.target.value, done: false}
            console.log(JSON.stringify(newTask))
            this.props.addTask(newTask)
        }

    }
}