import { Component } from "react";

class Item extends Component {
  updateTodo = (id) => {
    return () => {
      this.props.updateTodos(id);
    };
  };

  deleteTodo = (id) => {
    return () => {
      if (window.confirm("确定删除吗？")) {
        this.props.deleteTodo(id);
      }
    };
  };

  render() {
    const { id, name, done } = this.props;
    return (
      <li>
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
