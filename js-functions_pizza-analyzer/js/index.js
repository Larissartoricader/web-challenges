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
  console.log("This is area1 " + area1);
  console.log("This is area2 " + area2);
  const pizzaGain = ((area2 - area1) / area1) * 100;
  console.log("This is the pizza gain in percente " + pizzaGain + "%");
  return pizzaGain;
}

function updatePizzaDisplay(pizzaElement, newSize) {
  newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = newDisplaySize + "px";
}

function updateOutputColor(size1, size2) {
  if (size1 < size2) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "var(--red)";
  }
}

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  console.log("Size of Pizza 1 is " + pizzaSize1);
  let pizzaSize2 = pizzaInput2.value;
  console.log("Size of Pizza 2 is " + pizzaSize2);

  let finalPizzaGain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  let roundedPizzaGain = Math.round(finalPizzaGain);
  output.textContent = roundedPizzaGain;

  updatePizzaDisplay(pizza1, pizzaSize1);

  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  console.log("Size of Pizza 1 is " + pizzaSize1);
  let pizzaSize2 = pizzaInput2.value;
  console.log("Size of Pizza 2 is " + pizzaSize2);

  let finalPizzaGain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  let roundedPizzaGain = Math.round(finalPizzaGain);
  output.textContent = roundedPizzaGain;

  updatePizzaDisplay(pizza2, pizzaSize2);

  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
