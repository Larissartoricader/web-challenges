export function getRandomColor() {
  const newBackgroundColor = `hsl(${Math.floor(Math.random() * 360)} 80% 55%)`;
  return newBackgroundColor;
}
