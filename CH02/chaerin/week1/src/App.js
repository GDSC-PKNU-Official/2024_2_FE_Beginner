import "./App.css";
import { useState } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const minCount = 200;
  const maxCount = 1200;

  const handleSetCount = (value) => {
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
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} handleReset={handleReset} />
      </section>
    </div>
  );
}
export default App;