import { useEffect, useState } from "react";

export default function Counter({ data }) {
  const [people, setPeople] = useState(0);

  useEffect(() => {
    if (data && data.people) {
      setPeople(data.people.length);
    }
  }, [data]);

  useEffect(() => {
    console.log(people);
  }, [people]);

  return <h2>Current {people} people are in Space</h2>;
}
