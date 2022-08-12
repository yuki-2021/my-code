import {Component} from "react";
import Task from "../Task/Task"
import './TaskList.css'

export default class TaskList extends Component {
    render() {
        return (
            <ul className="todo-main">
                {
                    this.props.todoList.map((item) => {
                        return  <Task key={item.id} {...item}/>;
                    })
                }
            </ul>
        )
    }
    // state
    state = {
        cat: {name: 'cat', age: 12}
    }
    // props
    // ref
    // 生命周期
    static getDerivedStateFromProps(currentProps, prevContext) {
        console.log("getDerivedStateFromProps")
        console.log(currentProps, prevContext)
        return currentProps
    }

    /*
    *   {
                    this.props.todoList.map((item) => {
                        return item;
                    })
                }
    * */

}