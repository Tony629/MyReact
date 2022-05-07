import { nanoid } from "nanoid";
import { Component } from "react";
import "./index.css";

class Header extends Component {
  handleKeyUp = (event) => {
    const x = event.which || event.keyCode;
    if (x != 13) return;

    if (event.target.value.trim() === "") {
      alert("输入不能为空");
      return;
    }

    const todo = {
      id: nanoid(),
      name: event.target.value,
      done: false,
    };

    this.props.addTodoObj(todo);
    event.target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

export default Header;
