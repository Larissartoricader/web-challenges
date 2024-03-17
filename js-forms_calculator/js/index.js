console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const numberA = Number(event.target.elements.numberA.value);
  console.log(numberA);
  const numberB = Number(event.target.elements.numberB.value);
  console.log(numberB);
  const myOperator = event.target.operator.value;
  console.log(myOperator);

  if (myOperator === "addition") {
    result = add(numberA, numberB);
    console.log("add");
  } else if (myOperator === "subtraction") {
    result = subtract(numberA, numberB);
    console.log("subtract");
  } else if (myOperator === "multiplication") {
    result = multiply(numberA, numberB);
    console.log("multiply");
  } else if (myOperator === "division") {
    result = divide(numberA, numberB);
    console.log("divide");
  }

  // --v-- write your code here --v--

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
