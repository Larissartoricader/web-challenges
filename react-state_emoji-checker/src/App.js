import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [bubbleFish, setBubbleFish] = useState("?");
  const [whale, setWhale] = useState("?");
  const [nemo, setNemo] = useState("?");

  const validCode = "🐡🐠🐋";
  const [code, setCode] = useState("");

  const updateCode = (fish) => {
    setCode((prevCode) => prevCode + fish);
  };

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setBubbleFish("🐡");
            updateCode("🐡");

            // console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setWhale("🐋");
            updateCode("🐋");
            // console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setNemo("🐠");
            updateCode("🐠");
            // console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("");
          setBubbleFish("?");
          setWhale("?");
          setNemo("?");
        }}
      >
        Reset
      </button>
      {code}

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
