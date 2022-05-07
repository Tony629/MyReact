import Item from "../Item";

function List(props) {
  const { todos, deleteTodos } = props;
  return (
    <ul className="todo-main">
      {todos.map((item) => {
        return <Item {...item} key={item.id} deleteTodos={deleteTodos} />;
      })}
    </ul>
  );
}

export default List;
