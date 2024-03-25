import React from "react";
import "./styles.css";
export default function App() {
  return (
    <div>
      <Smiley isHappy={false} />
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </div>
  );
}

export function Smiley({ isHappy }) {
  return (
    <div>
      <h1>Are you Happy?</h1>
      {isHappy ? <span>😊</span> : <span>🫠</span>}
    </div>
  );
}
