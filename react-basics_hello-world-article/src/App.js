import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>First Article</h1>
      <p>
        Bacon ipsum dolor amet pork capicola short ribs jowl boudin. Landjaeger
        tenderloin pastrami drumstick chicken andouille chuck cupim ground round
        turducken pork loin chislic ribeye. Pancetta beef salami filet mignon
        strip steak. Cupim salami strip steak meatloaf, short ribs filet mignon
        spare ribs leberkas kielbasa tail pork belly bresaola. Chuck cupim pork
        loin picanha, tenderloin shoulder meatloaf landjaeger turkey flank
        capicola jerky beef ribs kevin rump.
      </p>
      <button type="button" className="buttonClass">
        Read More
      </button>
    </article>
  );
}
