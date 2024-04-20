import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    console.log(data);
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.map((review, id) => (
        <>
          <p key={id}>Review: {review.title}</p>
          <p>{review.text}</p>
          <span>⭐️ 5/{review.rating}</span>
          <br />
        </>
      ))}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}