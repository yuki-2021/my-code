import React, {Component} from "react";
import Weather from "../Weather/Weather";

export default class App extends Component {
  // 渲染函数
  render() {
    return (
      <div>
        <h3>App</h3>
        <Weather />
      </div>
    )
  }
}

