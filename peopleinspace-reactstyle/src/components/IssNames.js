export default function IssNames({ data }) {
  // Filtrar as pessoas do espaco que estao dentro da nave ISS
  const peopleInsideIss = data.people.filter(
    (person) => person.craft === "ISS"
  );
  // Criar uma lista de NOMES de todas as pessoas dentro da nave ISS
  const nameOfPeopleInsideIss = peopleInsideIss.map(
    (personInsideIss, index) => <p key={index}>{personInsideIss.name}</p>
  );

  return nameOfPeopleInsideIss;
}
