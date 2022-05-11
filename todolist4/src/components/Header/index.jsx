import { Component } from "react";
import { nanoid } from "nanoid";

function Header(props) {
  const handleKeyUp = (event) => {
    const x = event.which || event.keyCode;
    if (x != 13) {
      return;
    }

    if (event.target.value.trim() === "") {
      alert("请输入内容");
      return;
    }

    const newObj = {
      id: nanoid(),
      name: event.target.value,
      done: false,
    };

    props.addTodo(newObj);
    event.target.value = null;
  };

  return (
    <div className="todo-header">
      <input
        type="text"
        placeholder="请输入任务名称，按回车键确认"
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}

export default Header;
