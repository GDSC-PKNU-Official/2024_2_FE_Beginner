import "./App.css"; 
import { useState } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const minCount = -100;  
  const maxCount = 100;   

  const handleSetCount = (value) => {
    if (value === 'reset') {
      setCount(0);  
    } else {
      setCount((prevCount) => {
        const newCount = prevCount + value;
        
        if (newCount < minCount) {
          return minCount;
        } else if (newCount > maxCount) {
          return maxCount;
        } else {
          return newCount;
        }
      });
    }
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} /> 
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} /> 
      </section>
    </div>
  );
}

export default App;