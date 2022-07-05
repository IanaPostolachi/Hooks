import "./App.css";
import React, {useState} from "react";


const App = () => {
  const [count, setCount] = useState(0)

  function increment()
  {
    setCount(prevCount => prevCount +1 )
  }

  return <div className="App">
    <button onClick={ increment}>+</button>
    <h1>{count}</h1>
    <button>-</button>
  </div>;
};

export default App;
