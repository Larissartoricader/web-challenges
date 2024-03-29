import { useState } from "react";
import "./App.css";

function App() {
  const [peopleNumber, SetPeopleNumber] = useState(0);

  async function fetchDate() {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    SetPeopleNumber(data.people.length);
    console.log(data);
    return data;
  }

  fetchDate();
  return (
    <div>
      <h1>📡 People in Space - React Style 🚀</h1>
      <h2>Current {peopleNumber} people are in space</h2>
    </div>
  );
}

export default App;
