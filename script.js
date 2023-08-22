
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("submit");
    const userCountElement = document.getElementById('userCount');
    const maxNameElement = document.getElementById('maxName');
    const maxWeightElement = document.getElementById('maxWeight');
    const maxHeightElement = document.getElementById('maxHeight');

    let userCount = 0;
    let nameCount = {};
    let maxWeightValues = [];
    let maxHeightValues = [];
 

button.addEventListener('click', () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    userCount++;

    if (nameCount[name]){
        nameCount[name]++;
    }else{
        nameCount[name] = 1;
    }

const dataBase = {
    email,
    password,
    name,
    weight,
    height
};


localStorage.setItem("dataBase", JSON.stringify(dataBase));

maxWeightValues.push(weight);
maxHeightValues.push(height);


let maxName = "";
let maxCount = 0;

for(const key in nameCount) {
    if(nameCount[key] > maxCount) {
        maxCount = nameCount[key];
        maxName = key;
    }
}

const maxWeight = Math.max(...maxWeightValues);
const maxHeight = Math.max(...maxHeightValues);



userCountElement.textContent = `Количество людей: ${userCount}`;
 maxNameElement.textContent = `Самое частое имя: ${maxName} (${maxCount} раз)`;
 maxWeightElement.textContent = `Максимальный вес: ${maxWeight}`;
 maxHeightElement.textContent = `Максимальный рост: ${maxHeight}`;


alert("Данные сохранены");

setTimeout(() => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("name").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    
}, 1000);





});
});


