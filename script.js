/* String: greeting */

/* let askName = prompt('Как вас зовут?: ');

alert('Привіт ' + askName); */



/////////////////////////////////////////////////


/* String: gopni4ek */

/* let str = prompt("Пожалуйста вставте рядок: ");

let modString = str.replace(/,/g, ", блин");

console.log(modString); */


////////////////////////////////////////////////


/* String: capitalize */

/* let str = "cANBerRa";

let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

console.log(result); */


////////////////////////////////////////////////


/* String: word count */

/* let str = 'Посчитайте количество слов в этом рядке';

let words = str.split(" ");

let wordCount = words.length;

console.log(wordCount); */


//////////////////////////////////////////////////


/* String: credentials */

/* let lastName = prompt('Введите вашу фамилию: ');
let firstName = prompt('Введите ваше имя: ');
let middleName = prompt('Введите ваше отчество: ');

lastName = lastName.trim();
firstName = firstName.trim();
middleName = middleName.trim();

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
middleName = middleName.charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();


let fullName = lastName + " " + firstName + " " + middleName;

console.log(fullName); */


///////////////////////////////////////////////////////


/* String: beer */

/* let str = "Було жарко. Василь пив пиво вприкуску з креветками";
let result = str.split("пиво").join("чай");

console.log(result); */


///////////////////////////////////////////////////////


/* String: no tag */


/* let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let firstIndex = str.indexOf("<");
let closeIndex = str.indexOf(">");

let result = str.slice(0, firstIndex) + str.slice(closeIndex + 1);

console.log(result); */


////////////////////////////////////////////////////////


/* String: big tag */

/* let str = "якийсь текст у якому є один тег <br /> і всяке інше";
let tag = "<br />";
let capitalizedTag = tag.toUpperCase();

let result = str.split(tag).join(capitalizedTag);

console.log(result); */