import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([
    { id: "001", name: "Coding", done: true },
    { id: "002", name: "逛街", done: false },
    { id: "003", name: "打篮球", done: false },
  ]);

  const addTodo = (newObj) => {
    const newTodos = [newObj, ...todos];
    setTodos(newTodos);
  };

  const deleteTodos = (id) => {
    const arr = todos.filter((x) => x.id !== id);
    setTodos(arr);
  };

  return (
    <div className="todo-container">
      <Header addTodo={addTodo}></Header>
      <List todos={todos} deleteTodos={deleteTodos}></List>
    </div>
  );
}

export default App;
