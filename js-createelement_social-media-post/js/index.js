console.clear();

const htmlBody = document.body;
console.log(htmlBody);
const jsPost = document.querySelector("article");
const jsPostContent = document.querySelector(".post__content");
const jsPostFooter = document.querySelector(".post__footer");
const jsPostUsernamme = document.querySelector(".post__username");
const likeButton = document.querySelector('[data-js="like-button"]');

// const newSocialMediaPost = document.createElement("article");
// newSocialMediaPost.classList.add("post");
// htmlBody.append(newSocialMediaPost);
// console.log(newSocialMediaPost);

// const newPostContent = document.createElement("p");
// newPostContent.classList.add("post__content");
// newPostContent.textContent = "new Post for My Social Media Content";
// newSocialMediaPost.append(newPostContent);
// console.log(newPostContent);

// const footer = document.createElement("footer");
// footer.classList.add("post__footer");
// newSocialMediaPost.append(footer);

// const span = document.createElement("span");
// span.classList.add("post__username");
// span.textContent = "@newusername";
// footer.append(span);

// const button = document.createElement("button");
// button.setAttribute("data-js", "like-button");
// button.classList.add("post__button");
// button.textContent = " ♥ ♥ Like";
// footer.append(button);

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
  const newSocialMediaPost = document.createElement("article");
  newSocialMediaPost.classList.add("post");
  htmlBody.append(newSocialMediaPost);
  console.log(newSocialMediaPost);

  const newPostContent = document.createElement("p");
  newPostContent.classList.add("post__content");
  newPostContent.textContent = "new Post for My Social Media Content";
  newSocialMediaPost.append(newPostContent);
  console.log(newPostContent);

  const footer = document.createElement("footer");
  footer.classList.add("post__footer");
  newSocialMediaPost.append(footer);

  const span = document.createElement("span");
  span.classList.add("post__username");
  span.textContent = "@newusername";
  footer.append(span);

  const button = document.createElement("button");
  button.setAttribute("data-js", "like-button");
  button.classList.add("post__button");
  button.textContent = " ♥ ♥ Like";
  footer.append(button);
}

likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
