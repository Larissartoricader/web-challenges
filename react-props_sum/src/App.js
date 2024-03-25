import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={3} valueB={5} />;
}

export function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <div>
      <h1>{`${valueA} + ${valueB} = ${sum}`}</h1>
    </div>
  );
}
