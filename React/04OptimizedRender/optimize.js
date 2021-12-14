import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    state = {
        number: 0
    }

    handleClick = () => {
        this.setState(
            () => {
                return {
                    number: Math.floor(Math.random()*3)
                }
            }
        )
    }
    render() {

        console.log(render)
        return (
            <div>
                <h1>
                    随机数
                </h1>
                <button onClick= {this.handleClick}> 重新生成</button>
            </div>
        )
    }
}