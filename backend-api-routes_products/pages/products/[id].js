import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }
  if (error) {
    return <div>Is Loading...</div>;
  }

  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.category}</h2>
      <p>
        {data.price}
        {data.currency}
      </p>
      <p>{data.description}</p>
      <Link href={"/products"}>Back to all products</Link>
    </>
  );
}
