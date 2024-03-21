const peopleList = document.querySelector('[data-js="people"]');

console.log(peopleList);
const url = "http://api.open-notify.org/astros.json";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log("Only a Data Text: ", data);
  console.log("Number of people in space: " + data.number);
  peopleList.textContent = data.number;
  return data;
}

// async function namesOfPeopleInSpace() {
//   const data = await getData();
//   const newList = document.createElement("ul");
//   const nameElement = document.createElement("li");
//   nameElement.textContent = data.people[4].name;
//   nameElement.style.color = "white";

//   people.append(newList);
//   newList.append(nameElement);
// }

// namesOfPeopleInSpace();

async function namesOfPeopleInSpace() {
  const data = await getData();
  const newList = document.createElement("ul");
  peopleList.append(newList);

  data.people.forEach((person) => {
    const nameElement = document.createElement("li");
    nameElement.textContent = person.name;
    nameElement.style.color = "white";
    newList.append(nameElement);
  });
  return data;
}

async function spaceCraft() {
  const data = await namesOfPeopleInSpace();
  const buttonsDiv = document.createElement("div");
  buttonsDiv.style.backgroundColor = "lightgrey";
  document.body.append(buttonsDiv);

  buttonOne = document.createElement("button");
  buttonOne.textContent = "All";

  buttonTwo = document.createElement("button");
  buttonTwo.textContent = "Tiangong";

  buttonThree = document.createElement("button");
  buttonThree.textContent = "ISS";

  buttonsDiv.append(buttonOne, buttonTwo, buttonThree);

  const craftList = document.createElement("p");
  document.body.append(craftList);

  buttonThree.addEventListener("click", () => {
    const craftISS = data.people.filter((person) => person.craft === "ISS");
    console.log(craftISS);
    if (craftISS.length > 0) {
      const names = craftISS.map((person) => person.name).join(" - ");
      craftList.textContent = names;
    } else {
      craftList.textContent = "No one is inside this Craft";
    }
  });

  buttonTwo.addEventListener("click", () => {
    const craftTiangong = data.people.filter(
      (person) => person.craft === "Tiangong"
    );
    console.log(craftTiangong);
    if (craftTiangong.length > 0) {
      const names = craftTiangong.map((person) => person.name).join(" - ");
      craftList.textContent = names;
    } else {
      craftList.textContent = "No one is inside this Craft";
    }
  });

  buttonOne.addEventListener("click", () => {
    const craftALL = data.people.filter((person) => person.craft);
    if (craftALL.length > 0) {
      const names = craftALL.map((person) => person.name).join(" - ");
      craftList.textContent = names;
    } else {
      craftList.textContent = "No one is inside this Craft";
    }
  });
}
spaceCraft();

// allButton();
