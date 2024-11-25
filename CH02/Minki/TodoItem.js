import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <div className="checkbox_col"> ①
        <input type="checkbox" />
      </div>
      <div className="title_col">할 일</div> ②
      <div className="date_col">{new Date().toLocaleDateString()}</div> ③
      <div className="btn_col"> ④
        <button>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;
