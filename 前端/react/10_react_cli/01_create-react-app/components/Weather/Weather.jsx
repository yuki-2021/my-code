import React, {Component} from "react";
import { ReactDOM } from "react-dom/client";

export default class Weather extends Component {
    // 渲染函数
    render() {
        return (

            <div>
                <div >今天天气很{this.isHot? '炎热': '凉爽'}</div>
                <button onClick={this.changeWeather}>修改天气</button>
            </div>
            
        )
    }
    // 数据
    state = {
        isHot: false,
    }
    // 方法  ==> 作为回调函数，this的指向是undefined
    changeWeather = (event) => {
       this.setState({isHot:!this.state.isHot});
    }
}
