import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character");

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }
  if (error) {
    return <h1>There is Loading Error...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h1>{data.firstName}</h1>
      <h1>{data.lastName}</h1>
      <h1>{data.age}</h1>
      <h1>{data.cpf}</h1>
    </>
  );
}
