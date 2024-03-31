import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import FindingName from "./components/FindingName";
import IssNames from "./components/IssNames";
import AllNames from "./components/AllNames";
import TiangongNames from "./components/TiangongNames";

function App() {
  const [data, setData] = useState(null);
  const [showIssList, setShowIssList] = useState(false);
  const [showTiangongList, setShowTiangongList] = useState(false);
  const [showAllList, setShowAllList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://api.open-notify.org/astros.json");
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    };
    fetchData();
  }, []);

  function handleIssButton() {
    setShowIssList(!showIssList);
  }

  function handleTiangongButton() {
    setShowTiangongList(!showTiangongList);
  }
  function handleAllButton() {
    setShowAllList(!showAllList);
  }

  return (
    <div>
      <h1>People in Space</h1>
      <Counter data={data} />
      <h2>WHO is in Space?</h2>
      <ol>
        <FindingName data={data} />
      </ol>
      <h2>In which Craft are the people?</h2>
      <button onClick={handleIssButton}>
        {showIssList
          ? "Hide People Inside the Craft ISS"
          : "Show People Inside the Craft ISS"}
      </button>
      {showIssList && <IssNames data={data} />}
      <br />
      <button onClick={handleTiangongButton}>
        {showTiangongList
          ? "Hide People Inside the Craft Tiangong"
          : "Show People Inside the Craft Tiangong"}
      </button>
      {showTiangongList && <TiangongNames data={data} />}
      <br />
      <button onClick={handleAllButton}>
        {showAllList
          ? "Hide People Inside the all Crafts"
          : "Show People Inside the all Crafts"}
      </button>
      {showAllList && <AllNames data={data} />}
    </div>
  );
}
export default App;
