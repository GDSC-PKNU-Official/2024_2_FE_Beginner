import "./App.css";
import Viewer from "./component/Viewer"; ①

function App() {
  return (
    <div className="App">
      <h1>Simple Counter</h1> ②
      <section>
        <Viewer /> ③
      </section>
    </div>
  );
}

export default App;