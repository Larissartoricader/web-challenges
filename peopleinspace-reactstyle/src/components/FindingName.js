export default function FindingName({ data }) {
  if (!data || !data.people) {
    return null;
  }
  return (
    <div>
      {data.people.map((person, index) => (
        <p key={index}>{person.name}</p>
      ))}
    </div>
  );
}
