import { useState } from "react";

function Item(props) {
  const { id, name, done, deleteTodos } = props;
  const [mouseState, setMouseState] = useState(false);

  const deleteTodo = (id) => {
    deleteTodos(id);
  };

  return (
    <li
      style={{ backgroundColor: mouseState ? "#ddd" : "#fff" }}
      onMouseEnter={() => setMouseState(true)}
      onMouseLeave={() => setMouseState(false)}
    >
      <label>
        <input type="checkbox" checked={done} />
        <span>{name}</span>
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        删除
      </button>
    </li>
  );
}

export default Item;
