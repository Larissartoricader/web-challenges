// console.clear();

// const userElement = document.querySelector(".user");

// async function getUser(url) {
//   const response = await fetch(url);
//   console.log(response);
//   const json = await response.json();
//   return json.data;
// }

// document.querySelectorAll("button[data-url]").forEach((button) =>
//   button.addEventListener("click", async (event) => {
//     const user = await getUser(event.target.dataset.url);
//     userElement.innerHTML = `
//     <h2>${user.first_name} ${user.last_name}</h2>
//     <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
//     `;
//   })
// );

console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function getUser(url) {
  userElement.innerHTML = "";
  errorElement.textContent = "";

  const response = await fetch(url);
  if (!response.ok) {
    console.log("Network error");
    return null;
  }

  const json = await response.json();
  return json.data;
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      const user = await getUser(event.target.dataset.url);
      console.log(user);
      if (!user) {
        errorElement.textContent = "User not found";
        return;
      }

      userElement.innerHTML = `
        <h2>${user.first_name} ${user.last_name}</h2>
        <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
        `;
    } catch (errorElement) {
      console.info(error);
      errorElement.textContent = error.message;
      return;
    }
  })
);
