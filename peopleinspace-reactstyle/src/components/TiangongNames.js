export default function TiangongNames({ data }) {
  // Filtrar as pessoas do espaco que estao dentro da nave ISS
  const peopleInsideTiangong = data.people.filter(
    (person) => person.craft === "Tiangong"
  );
  // Criar uma lista de NOMES de todas as pessoas dentro da nave ISS
  const nameOfPeopleInsideTiangong = peopleInsideTiangong.map(
    (personInsideTiangong, index) => (
      <p key={index}>{personInsideTiangong.name}</p>
    )
  );

  return nameOfPeopleInsideTiangong;
}
