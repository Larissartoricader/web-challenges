export default function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  getRandomColor();
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}
