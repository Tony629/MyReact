import { Component } from "react";
import { nanoid } from "nanoid";

class Header extends Component {
  handleKeyUp = (event) => {
    const x = event.which || event.keyCode;
    if (x !== 13) return;

    const todoObj = {
      id: nanoid(),
      name: event.target.value,
      done: false,
    };

    this.props.addTodoObj(todoObj);
    event.target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

export default Header;
