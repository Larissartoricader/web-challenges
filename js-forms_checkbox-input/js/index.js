console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  console.log(event.target.elements.tos.checked);
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  if (event.target.elements.tos.checked === true) {
    alert("Form submitted");
  } else {
    showTosError();
  }
});
