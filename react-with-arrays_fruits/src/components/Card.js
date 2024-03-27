import "./Card.css";

export default function Card({ name, id, color }) {
  return (
    <p key={id} className={`card--${color}`}>
      {name}
    </p>
  );
}
