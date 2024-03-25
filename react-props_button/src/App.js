import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Buttons</h1>
      <Button text={"Click Me1"} color={"#D81919"} />
      <br />
      <Button text={"Click Me2"} color={"#32CD32"} />
      <br />
      <Button text={"Click Me3"} color={"#6495ED"} />
      <br />
    </div>
  );
}

// Inserir a propriedade Disable

export function Button({ text, color }) {
  return (
    <button type="button" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
