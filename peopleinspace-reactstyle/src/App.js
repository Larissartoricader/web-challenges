import { useState } from "react";
import "./App.css";

function App() {
  const [peopleNumber, SetPeopleNumber] = useState(0);
  const [names, setNames] = useState();
  const [craftISS, setCraftISS] = useState();

  async function fetchData() {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    SetPeopleNumber(data.people.length);
    setNames(
      data.people.map((person) => {
        return <li>{person.name}</li>;
      })
    );

    setCraftISS(
      data.people.map((person) => {
        return person.craft === "ISS" ? <li>{person.name}</li> : null;
      })
    );
    // console.log(data);
    // console.log(data.people[3].name);
    return data;
  }

  fetchData();
  return (
    <div>
      <h1>📡 People in Space - React Style 🚀</h1>
      <h2>Current {peopleNumber} people are in space</h2>
      <h2>Names</h2>
      <ol setNames={setNames}>{names}</ol>
      <div className="button-box">
        <button>All</button>
        <button onClick={setCraftISS}>ISS</button>
        <button>Tiangong</button>
      </div>
      <h2>Craft Names</h2>
      <ol>{craftISS}</ol>
    </div>
  );
}

export default App;
