import React from "react";
import "./styles.css";

export default function App() {
  return article();
}

export function article() {
  return (
    <article>
      <h2 className="article__title">A Headline</h2>
      <h3>A great Subheadline</h3>
      <form className="formClass">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="Write your name"></input>
        <label htmlFor="birthday">Your Birthday</label>
        <input type="date" id="birthday"></input>
      </form>
      <a className="article__link" href="https://baconipsum.com/">
        Read More
      </a>
    </article>
  );
}
