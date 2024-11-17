import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo }) => {
  return (
    <div className="TodoList">
      (...)
      <div className="list_wrapper">
        {todo.map((it) => (
          <TodoItem key={it.id} {...it} /> 
        ))}
      </div>
    </div>
  );
};
export default TodoList;