import { volumes } from "@/lib/data";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolum = volumes.find((volume) => volume.slug === slug);

  if (!currentVolum) {
    return null;
  }

  const { title, description, books, cover } = currentVolum;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      <br />
      {/* {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null} */}
      {/* <Link href="/volumes">Back to all Volumes</Link> */}
    </>
  );
}
