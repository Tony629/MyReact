import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    todos: [
      { id: "001", name: "Coding", done: true },
      { id: "002", name: "逛街", done: true },
      { id: "003", name: "泡妞", done: false },
    ],
  };

  addTodoObj = (todo) => {
    const { todos } = this.state;
    const newTodos = [todo, ...todos];

    this.setState({ todos: newTodos });
  };

  updateTodos = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((item) => {
        return item.id === id ? { ...item, done: !item.done } : item;
      }),
    });
  };

  deleteTodo = (id) => {};

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <Header addTodoObj={this.addTodoObj}></Header>
        <List todos={todos} updateTodos={this.updateTodos}></List>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
