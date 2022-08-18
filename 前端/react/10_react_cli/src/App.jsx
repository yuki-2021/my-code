import React,{Component} from "react";
import AddTask from "./components/AddTask/AddTask"
import TaskList from "./components/TaskList/TaskList"
import RemoveTask from "./components/RemoveTask/RemoveTask"
import './app.css'


export default  class App extends Component {
    render() {
        return (
            <div className="todo-container">

                <div className="todo-wrap">
                    <AddTask addTask={this.addTask}/>
                    <TaskList {...this.state} />
                    <RemoveTask />
                </div>
            </div>
        )
    }
    // 回调函数
    addTask = (newTask) => {
        console.log(newTask)
        this.setState({todoList: [newTask,...this.state.todoList]})
    }
    // state - 数据
    state = {
        todoList: [
            {id: 1, name: '吃饭', done: true},
            {id: 2, name: '睡觉', done: false},
            {id: 3, name: '写代码', done: false}
        ]
    }
    // props
    // 生命周期
}