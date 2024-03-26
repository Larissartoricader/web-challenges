import { useState } from "react";
import "./styles.css";

export default function App() {
  // let isActive = false;
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    // isActive = !isActive;
    // console.log(isActive);
    setIsActive(!isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
