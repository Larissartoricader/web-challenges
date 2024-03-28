import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { uid } from "uid";

const initialTags = [
  { name: "css", id: 1 },
  { name: "html", id: 2 },
  { name: "react", id: 3 },
];

export default function App() {
  const [tags, setTags] = useState(initialTags);

  function handleAddTag(newTag) {
    setTags([...tags, { ...newTag, id: uid() }]);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} />
    </main>
  );
}
