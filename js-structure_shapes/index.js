import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./utils/Circle.js";

console.clear();

const root = document.getElementById("root");

const CircleElement = Circle();

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
});

root.append(CircleElement, square, pentagon);
