import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return <Counter />;
}

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
            // console.log("?");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count - 1);
            // console.log("?");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
