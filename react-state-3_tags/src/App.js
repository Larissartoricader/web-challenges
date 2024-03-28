import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { uid } from "uid";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleOnAddTag(tag) {
    setTags([...tags, { ...tag, id: uid() }]);
    // setTags([...tags, tag]);
  }

  // function handleOnDelete(tag) {
  //   setTags(tags.filter(tag) => tag)
  // }

  return (
    <main className="app">
      <Form onAddTag={handleOnAddTag} />
      <List tags={tags} />
    </main>
  );
}
