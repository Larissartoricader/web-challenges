import "./Tag.css";

export default function Tag({ tag }) {
  // {tag === "Admin"? "tag--highlight" : ""}
  return (
    <li className={`tagClass ${tag === "admin" ? "tag--highlight" : ""}`}>
      {tag}
    </li>
  );
}
