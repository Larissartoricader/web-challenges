console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const myHeader = document.querySelector("h1");
console.log(myHeader);
myHeader.textContent = "The Network !";
const myText = document.querySelector("p");
console.log(myText);
const myLikes = 1;
const myAuthor = "Author Name";
myText.textContent = `A new great Social Media. You have ${myLikes} likes.`;
console.log(myText);

const isReported = true;

// const newText = document.createElement("p");
// newText.textContent = "You have X Likes";
// const likeContainer = document.getElementById("header");
// likeContainer.appendChild(newText);

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
