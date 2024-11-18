import logo from './logo.svg';
import './App.css';
import React from "react";
import { useState } from "react";

const Button = ({ onPress, count }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: "red", padding: 10, borderRadius: 8 }}
        onClick={onPress}
      >
        Click me
      </button>
      <p>{count}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <p>{count}</p>

      <Button onPress={() => setCount(count + 1)} count={count} />
    </div>

  );
}

export default App;
