console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

// async function getUser(url) {
//   const response = await fetch(url);
//   const json = await response.json();
//   return json.data;
// }

async function getUser(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Problems with API!");
    }
    const json = await response.json();
    return json.data;
  } catch (errorElement) {
    throw errorElement;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      const user = await getUser(event.target.dataset.url);
      userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
      errorElement.innerText = "";
    } catch (errorParameter) {
      errorElement.innerText = "Problems with API!";
    }
  })
);
