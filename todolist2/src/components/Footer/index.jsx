import { Component } from "react";

class Footer extends Component {
  render() {
    const {
      length,
      doneLength,
      deleteAllDoneTodo,
      toggleAllSelect,
    } = this.props;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={(event) => toggleAllSelect(event.target.checked)}
          />
        </label>
        <span>已完成{doneLength}</span> 全部{length}
        <button className="btn btn-danger" onClick={deleteAllDoneTodo}>
          清除已完成任务
        </button>
      </div>
    );
  }
}

export default Footer;
