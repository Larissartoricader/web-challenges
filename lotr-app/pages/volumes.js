import { volumes } from "@/data";
import Link from "next/link";
export default function Volumes() {
  return (
    <div>
      <h1>Lord of the Rings: The Overview</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.tile}>
            <a href={"/volumes/" + volume.slug}>{volume.title}</a>
          </li>
        ))}
      </ul>
      <Link href="/">Back</Link>
    </div>
  );
}
