import './App.css';
import { useState } from 'react';
import Viewer from './component/Viewer.js';
import Controller from './component/Controller.js';
import Reset from './component/Reset.js';

function App() {
  const [count, setCount] = useState(0);
  const minCount = -500;
  const maxCount = 500;
  const handleSetCount = (value) => {
    setCount((prevCount) => {
      const newCount = prevCount + value;
      if(newCount < minCount) return minCount;
      if(newCount > maxCount) return maxCount;
      return newCount;
    });
    
  }
  const reZero = () => {
    setCount(0);
  } 
  
  return (
  <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <Viewer count={count} />
    </section>
    <section>
      <Controller handleSetCount={handleSetCount} />
    </section>
    <section>
      <Reset reZero={reZero} />
    </section>
  </div>
  );
}

export default App;
 
