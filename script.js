/* Temperature */


/* toFahrenheit = (Celsium) => {
  return Fahrenheit = Celsium *2 + 30;
}

toFahrenheit(20);

toCelsuim = (Fahrenheit) => {
  return Celsuim = (Fahrenheit - 30) / 2;
}

toCelsuim(80); */

/* RGB */


/* function toHex(num) {
  const hex = num.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function numberToRGB(r, g, b) {
  const red = toHex(r);
  const green = toHex(g);
  const blue = toHex(b);

  return `#${red}${green}${blue}`;
}

const r = 255;
const g = 127;
const b = 64;
const colorCode = numberToRGB(r, g, b);
console.log(colorCode); */

/* Flats */

/* function findFlatLocation(totalFloors, flatsPerFloor, flatNumber) {
  const flatsPerEntrance = totalFloors * flatsPerFloor;

  const entrance = Math.ceil(flatNumber / flatsPerEntrance);

  const flatOnEntrance = (flatNumber - 1) % flatsPerEntrance;
  const floor = Math.floor(flatOnEntrance / flatsPerFloor) + 1;

  return { entrance, floor };
}

const totalFloorsInBuilding = 9;
const flatsPerFloor = 4;

const flatNumberToFind = 20;
const flatLocation = findFlatLocation(totalFloorsInBuilding, flatsPerFloor, flatNumberToFind);
console.log(flatLocation); */


/* Login And Password */


/* function loginAndPassword(correctLogin, correctPassword) {
  const enteredLogin = prompt("Введіть логін:");
  const enteredPassword = prompt("Введіть пароль:");

  const isCorrect = enteredLogin === correctLogin && enteredPassword === correctPassword;

  return isCorrect;
}

const correctLogin = "admin";
const correctPassword = "password";

const isLoggedIn = loginAndPassword(correctLogin, correctPassword);

if (isLoggedIn) {
  console.log("Вхід виконаний успішно");
} else {
  console.log("Невірний логін або пароль");
} */