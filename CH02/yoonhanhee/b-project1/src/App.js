
import "./App.css";
import { useState } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const min = -1000; 
  const max = 1000; 

  const handleSetCount = (value) => {
    const newCount = count + value;
    if (newCount >= min && newCount <= max) {
      setCount(newCount);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} /> 
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} resetCount={resetCount} /> 
      </section>
    </div>
  );
}

export default App;
