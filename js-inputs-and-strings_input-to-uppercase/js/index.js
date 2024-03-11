console.clear();

firstInput = document.querySelector('[data-js="first-input"]');
console.log(firstInput);
buttonUppercase = document.querySelector('[data-js="button-uppercase"]');
console.log(buttonUppercase);

// function upperCaseWord(inputWord) {

// }

buttonUppercase.addEventListener("click", () => {
  const inputWord = firstInput.value;
  console.log(`Here is the ${inputWord}!`);
  newWord = inputWord.toUpperCase();
  console.log(newWord);
});

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/
