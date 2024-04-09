import { volumes } from "@/data";
import Image from "next/image";
import Link from "next/link";
export default function Fellowship() {
  const firstVolume = volumes[0];
  return (
    <div>
      <article>
        <h1>First Movie</h1>
        <h2>{firstVolume.title}</h2>
        <p>{firstVolume.description}</p>
        <Image
          src={firstVolume.cover}
          height={140}
          width={230}
          alt="Cover of The Fellowship of the Ring"
        />
        <h3>Books:</h3>
        <ul>
          {firstVolume.books.map((book) => (
            <li key={book.ordinal}>{book.title}</li>
          ))}
        </ul>
        <Link href="/volumes">Back</Link>
      </article>
    </div>
  );
}
