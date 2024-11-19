import "./App.css";
import { useState, useRef } from "react";
import Header from "./Component/Header";
import TodoEditor from "./Component/TodoEditor";
import TodoList from "./Component/TodoList";

const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo); 

  const onCreate = (content) => { 
    const newItem = {
      id: 0,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, setTodo]); 
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} />
    </div>
  );
}
export default App;
