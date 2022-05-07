import { Component } from "react";
import Item from "../Item";

class List extends Component {
  render() {
    const { todos, updateTodos } = this.props;

    return (
      <ul className="todo-main">
        {todos.map((item) => {
          return (
            <Item {...item} key={item.id} updateTodos={updateTodos}></Item>
          );
        })}
      </ul>
    );
  }
}

export default List;
