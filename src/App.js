import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // function increment() {
  //   setCount((prevCount) => prevCount + 1);
  // }

  // function decrement() {
  //   setCount((prevCount) => prevCount - 1);
  // }

  return (
    <div className="App">
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  );
};

export default App;
