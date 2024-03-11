/*

Switch the input values of the two input fields when clicking the button

- [ ] Add a second input element to the index.html
- [ ] Assign the second input element to a variable
- [ ] Add a third button (a switch button) to the index.html
- [ ] Assign the third button to a variable
- [ ] Make sure that when the switch button is clicked, the values of the two input fields are being switched
- [ ] Make sure that all three buttons work on both input fields

Hint: the HTML entity for the switch button is: &updownarrow

*/

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const switchButton = document.querySelector('[data-js="button-switch"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toLowerCase();
  console.log(firstInput.value.toUpperCase());
  console.log(secondInput.value.toLowerCase());
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  secondInput.value = secondInput.value.toLowerCase();
  console.log(firstInput.value.toUpperCase());
  console.log(secondInput.value.toLowerCase());
});

switchButton.addEventListener("click", () => {
  switchedFirstInput = firstInput.value.toUpperCase();
  switchedSecondInput = secondInput.value.toLowerCase();
  console.log("Old value " + switchedFirstInput);
  console.log("Old value " + switchedSecondInput);
  switchedFirstInput = secondInput.value.toLowerCase();
  switchedSecondInput = firstInput.value.toUpperCase();
  console.log("New value " + switchedFirstInput);
  console.log("New value " + switchedSecondInput);
});
