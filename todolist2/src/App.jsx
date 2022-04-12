import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    todos: [
      { id: "001", name: "打游戏", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "coding", done: false },
      { id: "004", name: "逛街", done: false },
    ],
  };

  addTodoObj = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];

    this.setState({ todos: newTodos });
  };

  deleteTodos = (id) => {
    this.setState({ todos: this.state.todos.filter((x) => x.id !== id) });
  };

  deleteAllDoneTodo = () => {
    this.setState({ todos: this.state.todos.filter((x) => !x.done) });
  };

  updateTodos = (id) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });

    this.setState({
      todos: newTodos,
    });
  };

  toggleAllSelect = (status) => {
    this.setState({
      todos: this.state.todos.map((x) => {
        return { ...x, done: status };
      }),
    });
  };

  render() {
    const { todos } = this.state;
    const length = todos.length;

    const doneLength = todos.reduce(
      (total, item) => (item.done ? total + 1 : total),
      0
    );

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodoObj={this.addTodoObj} />
          <List
            todos={todos}
            deleteTodos={this.deleteTodos}
            updateTodos={this.updateTodos}
          />
          <Footer
            length={length}
            doneLength={doneLength}
            deleteAllDoneTodo={this.deleteAllDoneTodo}
            toggleAllSelect={this.toggleAllSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
