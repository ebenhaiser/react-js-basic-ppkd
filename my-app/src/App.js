import logo from './logo.svg';
import './App.css';
import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="App">
        <button onClick={() => setCount(count + 1)}>Plus</button>
        <button onClick={() => setCount(count - 1)}>Minus</button>
        <p>{count}</p>
      </div>
  );
}

export default App;
