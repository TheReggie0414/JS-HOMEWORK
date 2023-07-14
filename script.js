
/* Confirms */

/* let answers = [
  confirm("Вам подобається колір синій?"),
  confirm("Ви вважаєте, що сонце світлить?"),
  confirm("Ви любите піцу?")
]; */


/* Prompts */

/* let answers = [];

answers[0] = prompt("Яке ваше ім'я?");
answers[1] = prompt("Скільки вам років?");
answers[2] = prompt("Яка ваша улюблена книга?");

console.log(answers); */

/* Item access */

/* let arr = ["apple", "banana", "orange", "grape"];

let index = prompt("Введіть індекс у масиві:");

if (index >= 0 && index < arr.length) {
  let element = arr[index];
  console.log("Значення елемента з індексом " + index + ": " + element);
} else {
  console.log("Введено недійсний індекс.");
}
 */


/* Item change */

/* let arr = ["apple", "banana", "orange", "grape"];

let index = prompt("Введіть індекс у масиві:");
let value = prompt("Введіть значення для цього індексу:");

if (index >= 0 && index < arr.length) {
  arr[index] = value;
  console.log("Значення за індексом " + index + " було змінено на: " + value);
} else {
  console.log("Введено недійсний індекс.");
}

console.log("Оновлений масив:", arr); */


/* IndexOf Word */

/* let sentence = prompt("Введіть рядок із кількох слів:");
let targetWord = prompt("Введіть слово, яке потрібно знайти:");

let words = sentence.split(" ");

let index = words.indexOf(targetWord);

if (index !== -1) {
  let position = index + 1;
  console.log("Слово '" + targetWord + "' знаходиться на позиції " + position + " у рядку.");
} else {
  console.log("Слово '" + targetWord + "' не знайдено у рядку.");
}

 */

/* Reverse */

/* let sentence = prompt("Введіть рядок із кількох слів:");
let targetWord = prompt("Введіть слово, яке потрібно знайти:");

let words = sentence.split(" ");

let index = words.indexOf(targetWord);

if (index !== -1) {
  let position = index + 1;
  console.log("Слово '" + targetWord + "' знаходиться на позиції " + position + " у рядку.");
} else {
  console.log("Слово '" + targetWord + "' не знайдено у рядку.");
} */


/* Destruct */

/* let inputString = prompt("Введіть рядок:");

let [firstLetter, , , , fifthLetter, , , , ninthLetter] = inputString;

console.log("Перша літера:", firstLetter);
console.log("П'ята літера:", fifthLetter);
console.log("Дев'ята літера:", ninthLetter); */

/* Destruct default */

/* let inputString = prompt("Введіть рядок:");

let [, secondLetter = "!", , fourthLetter = "!", fifthLetter = "!"] = inputString;

console.log("Друга літера:", secondLetter);
console.log("Четверта літера:", fourthLetter);
console.log("П'ята літера:", fifthLetter); */

/* 
Map Capitalize */

/* function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

let inputString = prompt("Введіть рядок:");

let words = inputString.split(" ");
let capitalizedWords = words.map(capitalize);

let result = capitalizedWords.join(" ");

console.log(result);
 */









