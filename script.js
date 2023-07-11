/* Number: odd */



/* const userInput = prompt("Введіть число:");

const number = parseInt(userInput);


if (isNaN(number)) {
  console.log("Помилка! Некоректне число.");
} else {
  if (number % 2 === 0) {
    alert("Введене число є парним.");
  } else {
    alert("Введене число є непарним.");
  }
} */


/* Boolean */

/* 
const answer1 = confirm("Чи володієте ви водійським посвідченням?");
const answer2 = confirm("Як ви ставитесь до електромобілів?");

console.log("Відповідь на перше питання:", answer1);
console.log("Відповідь на друге питання:", answer2);

 */


/* Boolean: if */


/* const answer = confirm("Яка ваша стать?");

console.log("Відповідь на питання:", answer);

if (answer) {
  alert("Ви жінка");
} else {
  alert("Ви чоловік");
} */


/* Ternary */

/* 
const ansMale = confirm("Ви чоловік?");

const message = ansMale ? "Ви чоловік" : "Ви жінка";
alert(message); */


/* // bool type cast
!!2 - true
!!0 - false
!!1 - true
// or
2 || 1 - 2
2 || 0 - 2
//and
2 && 1 - 1
1 && 2 - 2
0 && 2 - 0
// or and and difference
0 || 1 || 2 - 1
0 && 1 && 2 - 0 
2 || 1 || 0 - 2
2 && 1 && 0 - 0
confirm('left') || confirm('right')
confirm('left') && confirm('right')
//null, undefined, so on
null || 2 - 2
undefined && 1 - undefined
alert("Hello") && confirm('Are you sexy?');
alert("Hello") || confirm('Are you drunk?');
//brackets and complex expressions
(undefined || 2) && (3 || 0) - 2 && 3 - 3
(2 && 1) || (null && 0) - 1 || null - 1
(2 > 1) && "greater" - 2 && "greater" - "greater"
(2 < 1) && null - false && null - false
// ternary operator
1 ? "one" : "not one" - "one"
0 ? "zero" : "not zero" - "not zero"
"0" ? "\"zero\"" : "not `zero`" - "\zero\""
parseInt("0") ? 'true' : 'false' - 'false'
("" || 2) && (3 || "3.5") || (4 && 5) - (2 && 3 || 5)  (3 || 5)  (3)
(-1 + 1) && "zero" - 0 && "zero" - 0
"-1" + 1 && "oups" - -11 && "oups" - "oups"
(typeof null === 'object') ? "null is object" : "null is null" - true ? "null is object" : "null is null" - "null is object"
// ternary && ||
Math.random() < 0.5 && 'less' || 'more' - false && 'less' || 'more' - false || 'more' - 'more' (шанс 50% так як Math.random це число від 0 до 1)
(a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a - false && 'less: '+a || 'more: '+a  Тут неможу зрозуміти
//in for array
[2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found' - true ? 'prime': 'not found' - 'prime' */


/* Prompt: or */

/* 
let age = prompt("Введіть ваш вік:");

if (!age) {
  alert("Помилка! Вік не введений або скасовано.");
} else {
  alert("Ваш вік: " + age);
}
 */



/* Confirm: or this days */

/* confirm("Шопінг?") || alert("Ти - бяка"); */


/* 
Confirm: if this days */

/* let shopping = confirm("Шопінг?");

if (!shopping) {
  alert("Ти - бяка");
} */




/* Default: or */



/* let firstName = prompt("Введіть ім'я:") || "Іван";
let lastName = prompt("Введіть прізвище:") || "Іванов";
let fullName = prompt("Введіть повне ім'я:") || (firstName + " " + lastName);

console.log("Ім'я: " + firstName);
console.log("Прізвище: " + lastName);
console.log("Повне ім'я: " + fullName); */


/* Default: if */


/* let firstName = prompt("Введіть ім'я:");
if (!firstName) {
  firstName = "Іван";
}

let lastName = prompt("Введіть прізвище:");
if (!lastName) {
  lastName = "Іванов";
}

let fullName;
if (!fullName) {
  fullName = firstName + " " + lastName;
}

console.log("Ім'я: " + firstName);
console.log("Прізвище: " + lastName);
console.log("Повне ім'я: " + fullName); */




/* Login and password */

/* let login = prompt("Введіть логін:");

if (login === "admin") {
  let password = prompt("Введіть пароль:");
  
  if (password === "qwerty") {
    alert("Логін успішний! Вітаємо, admin!");
  } else {
    alert("Помилка! Невірний пароль.");
  }
} else {
  alert("Помилка! Невірний логін.");
} */


/* Scissors */

/* let userChoice = prompt("Введіть свій варіант: камінь, ножиці або папір").toLowerCase();

let computerChoice = Math.random();
if (computerChoice < 0.33) {
  computerChoice = "камінь";
} else if (computerChoice < 0.66) {
  computerChoice = "ножиці";
} else {
  computerChoice = "папір";
}

alert("Варіант програми: " + computerChoice);

if (userChoice === computerChoice) {
  alert("Нічия!");
} else if (
  (userChoice === "камінь" && computerChoice === "ножиці") ||
  (userChoice === "ножиці" && computerChoice === "папір") ||
  (userChoice === "папір" && computerChoice === "камінь")
) {
  alert("Ви перемогли!");
} else {
  alert("Комп'ютер переміг!");
} */




