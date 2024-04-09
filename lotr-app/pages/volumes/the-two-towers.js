import { volumes } from "@/data";
import Image from "next/image";
import Link from "next/link";
export default function Fellowship() {
  const secondVolume = volumes[1];
  return (
    <div>
      <article>
        <h1>Second Movie</h1>
        <h2>{secondVolume.title}</h2>
        <p>{secondVolume.description}</p>
        <Image
          src={secondVolume.cover}
          height={144}
          width={300}
          alt="Cover of The Fellowship of the Ring"
        />
        <h3>Books:</h3>
        <ul>
          {secondVolume.books.map((book) => (
            <li key={book.ordinal}>{book.title}</li>
          ))}
        </ul>
        <Link href="/volumes">Back</Link>
      </article>
    </div>
  );
}
