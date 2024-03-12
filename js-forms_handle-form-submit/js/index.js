console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target.elements;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  formElement.firstName.focus();

  const badnessValue = event.target.elements.badness.value;
  console.log("badnessValue");
  const ageValue = event.target.elements.age.value;
  console.log("ageValue");
  const ageBadnessSum = badnessValue + ageValue;
  firstName = event.target.elements.firstName.value;
  console.log(`The age-badness-sum of ${firstName} is ${ageBadnessSum}`);

  event.target.reset();
});
