import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([
    { id: "001", name: "Coding", done: true },
    { id: "002", name: "逛街", done: false },
  ]);

  const deleteTodos = (id) => {
    const arr = todos.filter((x) => x.id !== id);
    setTodos(arr);
  };

  return (
    <div className="todo-container">
      <List todos={todos} deleteTodos={deleteTodos}></List>
    </div>
  );
}

export default App;
