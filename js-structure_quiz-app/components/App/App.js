import Header from ":/Header/Header";
import { Form } from "./components/Form/Form.js";
import CardList from "./components/CardList/CardList.js";

export default function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
