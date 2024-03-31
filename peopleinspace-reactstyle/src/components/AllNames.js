export default function AllNames({ data }) {
  const peopleInsideAll = data.people.filter(
    (person) => person.craft.length > 0
  );

  const nameOfPeopleInsideAll = peopleInsideAll.map(
    (personInsideAll, index) => <p key={index}>{personInsideAll.name}</p>
  );

  return nameOfPeopleInsideAll;
}
