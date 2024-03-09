console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

function calculatePizzaGain(diameter1, diameter2) {
  area1 = Math.PI * (diameter1 / 2) ** 2;
  area2 = Math.PI * (diameter2 / 2) ** 2;
  console.log("The areaa of Pizza1 is " + area1);
  console.log("The areaa of Pizza2 is " + area2);
  const pizzaGain = Math.round(((area2 - area1) / area1) * 100);
  console.log(
    "The rounded difference in the areas of the pizzas is " + pizzaGain + "%"
  );
  return pizzaGain;
}

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  console.log(pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize2 = pizzaInput2.value;
  console.log(pizzaSize2);
});

calculatePizzaGain(pizzaSize1, pizzaSize2);
// --------

// let diameter1 = pizzaInput1.value;
// console.log(diameter1);

// let diameter2 = pizzaInput2.value;
// console.log(diameter2);

// // Task 1
// // define the function calculatePizzaGain here

// function calculatePizzaGain() {
//   area1 = Math.PI * (diameter1 / 2) ** 2;
//   area2 = Math.PI * (diameter2 / 2) ** 2;
//   console.log("The areaa of Pizza1 is " + area1);
//   console.log("The areaa of Pizza2 is " + area2);
//   const pizzaGain = Math.round(((area2 - area1) / area1) * 100);
//   console.log(
//     "The rounded difference in the areas of the pizzas is " + pizzaGain + "%"
//   );
//   return pizzaGain;
// }
// calculatePizzaGain();

// let pizzaSize1 = Math.round(area1);
// let pizzaSize2 = Math.round(area2);

// console.log("The Area of Pizza 1 is " + pizzaSize1 + "cm");
// console.log("The Area of Pizza 2 is " + pizzaSize2 + "cm");

// pizzaInput1.addEventListener("input", () => {
//   pizzaInput.value;
//   console.log(pizzaInput1);
// });

// pizzaInput2.addEventListener("input", () => {});

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
