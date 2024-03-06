const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  const age = Number(input.value);
  const kid = age < 11;
  const grownUp = age > 18;
  const teenager =
    kid || grownUp ? "You are not a teenager" : "You are a teenager";
  output.textContent = teenager;
});

// Number(x) converts the string from the input to a number
// Beware: input values are *always* strings!

// Exercise:
// Use conditions and the logical AND operator to write
// "You are a teen." or "You are not a teen." into the output.
