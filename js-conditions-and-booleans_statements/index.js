console.clear();
("h4x0r1337");
// Part 1: Password

const receivedPassword = "password1234";
const SUPER_SECRET_PASSWORD = "h4x0r1337";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 4;
const rest = number % 2;
if (rest >= 1) {
  console.log("Oh Odd!");
} else {
  console.log("Even");
}

// Part 3: Hotdogs
const numberOfHotdogs = 383874;

if (numberOfHotdogs < 5) {
  console.log("2 Euro per Hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1,5 Euro per Hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1 Euro per Hotdog");
} else {
  console.log("0,10 Euro per Hotdog");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

greetings = (userName = "Andrea") ? "Hello Coach" : "Hello Archibald";

console.log(greetings);
