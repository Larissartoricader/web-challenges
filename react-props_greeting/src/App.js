import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Larissa" />
      <Greeting name="Nathasha" />
      <Greeting name="Arne" />
    </div>
  );
}

export function Greeting({ name }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  );
}
