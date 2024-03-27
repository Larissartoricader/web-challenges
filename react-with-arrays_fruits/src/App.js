import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: "01",
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: "02",
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: "03",
      name: "🍇 Grapes",
      color: "purple",
    },
    {
      id: "04",
      name: "🍉 Watermelon",
      color: "green",
    },
    {
      id: "05",
      name: "🍈 Melon",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
