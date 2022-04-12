import React, { Component } from "react";

class Item extends Component {
  state = { mouseState: false };

  handleMouseEvent = (flag) => {
    return () => {
      this.setState({ mouseState: flag });
    };
  };

  deleteTodo = (id) => {
    return () => {
      if (window.confirm("确定删除吗?")) {
        this.props.deleteTodos(id);
      }
    };
  };

  updateTodo = (id) => {
    return () => {
      this.props.updateTodos(id);
    };
  };

  render() {
    const { id, name, done } = this.props;
    const mouseState = this.state;

    return (
      <li
        className="list-group-item"
        style={{ backgroundColor: mouseState ? "#ddd" : "#fff" }}
        onMouseEnter={this.handleMouseEvent(true)}
        onMouseLeave={this.handleMouseEvent(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.updateTodo(id)}
          />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" onClick={this.deleteTodo(id)}>
          删除
        </button>
      </li>
    );
  }
}

export default Item;
