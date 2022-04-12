import { Component } from "react";

import React from "react";
import Item from "../Item";

class List extends Component {
  render() {
    const { todos, deleteTodos, updateTodos } = this.props;
    return (
      <ul className="list-group">
        {todos.map((item) => {
          return (
            <Item
              {...item}
              key={item.id}
              deleteTodos={deleteTodos}
              updateTodos={updateTodos}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
