console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newToastMessage = document.createElement("li");
  newToastMessage.textContent = "I'm a GREAT Toast message!";
  newToastMessage.classList.add("toast-container__message");

  toastContainer.append(newToastMessage);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = `
	<li></li>
`;
});
