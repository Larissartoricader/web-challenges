// import React from "react";
// import "./styles.css";

// export default function App() {
//   return (
//     <main>
//       <Button description={"Click me! One"} />
//       <Button description={"Click me! Two"} />
//       <Button description={"Click me!"} />
//       <Button description={"Click me!"} />
//     </main>
//   );
// }

// function Button({ description }) {
//   return (
//     <button className="button" type="button">
//       {description}
//     </button>
//   );
// }

import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>{"Click ONE"}</Button>
      <Button>{"Click TWO"}</Button>
      <Button>{"Click THREE"}</Button>
      <Button>{"Click FOUR"}</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
