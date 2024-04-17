import useSWR from "swr";
import Link from "next/link";

export default function ListOfAllProducts() {
  const { data, isLoading } = useSWR("/api/products");

  console.log(data);

  if (isLoading) {
    return <h1>Still Loading...</h1>;
  }
  if (!data) {
    return;
  }

  return (
    <>
      <h1>List of All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
