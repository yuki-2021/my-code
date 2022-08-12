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
                    <AddTask />
                    <TaskList />
                    <RemoveTask />
                </div>
            </div>
        )
    }
}