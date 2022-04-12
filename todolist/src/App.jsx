import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <div className="todo-header">
            <input type="text" placeholder="请输入任务名称" />
          </div>
          <ul className="todo-main">
            <li>
              <label>
                <input type="checkbox" />
                <span>xxxxx</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>xxxxx</span>
              </label>
            </li>
          </ul>
          <div className="todo-footer"></div>
        </div>
      </div>
    );
  }
}

export default App;
