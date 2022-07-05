import "./App.css";
import React, {useState} from "react";


const App = () => {
  const [count, setCount] = useState(0)

  return <div className="App">
    <button onClick={(prevCount) => setCount(prevCount + 1) }>+</button>
    <h1>{count}</h1>
    <button>-</button>
  </div>;
};

export default App;
