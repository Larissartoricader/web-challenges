import { volumes } from "@/data";
import Image from "next/image";
import Link from "next/link";
export default function Fellowship() {
  const thirdVolume = volumes[2];
  return (
    <div>
      <article>
        <h1>Third Movie</h1>
        <h2>{thirdVolume.title}</h2>
        <p>{thirdVolume.description}</p>
        <Image
          src={thirdVolume.cover}
          height={144}
          width={300}
          alt="Cover of The Fellowship of the Ring"
        />
        <h3>Books:</h3>
        <ul>
          {thirdVolume.books.map((book) => (
            <li key={book.ordinal}>{book.title}</li>
          ))}
        </ul>
        <Link href="/volumes">Back</Link>
      </article>
    </div>
  );
}
