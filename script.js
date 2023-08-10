

// Квартира в ней комнаты - в каждой комнате ширина и длинна => вернуть площадь квартиры


    const apartmentRooms = {
      kitchen: {
        width: 50,
        length: 20
      },
  
      livingRoom: {
        width: 40,
        length: 50
      },
  
      bedroom: {
        width: 70,
        length: 29
      },
  
      bathroom: {
        width: 15,
        length: 32
      }
    };

    const apartmentRoomsSquare = (roomName) => {
      const room = apartmentRooms[roomName];
      if (room) {
        const square = room.width * room.length;
        return square;
      } else {
        return "Комната не найдена";
      }
    };

    const totalSquare = (
      apartmentRoomsSquare("kitchen")+
      apartmentRoomsSquare("bedroom")+
      apartmentRoomsSquare("bathroom")+
      apartmentRoomsSquare("livingRoom")
    );
  
    console.log("Общая площадь: ", totalSquare);





    // PROMPT и ты вводишь слово => найти сколько гласных и согласных букв 
    
    const word = prompt("Введите слово: ");


    const searchVowelsAndConsonants = (word) => {
      const vowels = "аеёиоуыэюя";
      const vowelsArr = vowels.split('');
      let vowelsCount = 1;

      for (const letter of word) {
        if (vowelsArr.includes(letter)) {
          vowelsCount++;
        }
      };

      const consonants = "бвгджзйклмнпрстфхцчшщ";
      const consonantsArr = consonants.split('');
      let consonantsCount = 1;

      for (const letter of word) {
        if (consonantsArr.includes(letter)) {
          consonantsCount++;
        }
      };

      return ["Гласных: " + vowelsCount, "согласных: " + consonantsCount];
    } 

    searchVowelsAndConsonants(word);
    

    // У вас есть дистанция и длина шага => покажите за сколько мы ее пройдем и ответ должен быть вы прошли за (0 часов 12 минут 10 секунд)

    const indicators = {
      distance: +prompt("Введите дистанцию в метрах: "),
      strideLength: +prompt("Введите длину одного шага в метрах: "),
      timeStride: +prompt("Введите время одного шага в секундах: ")
    };

    const timeDistance = () => {
      speed = indicators.strideLength * indicators.timeStride;
      time = indicators.distance / speed;
      timeAllSec = Math.round(time);

      timeHourInAllSec = timeAllSec / 3600;
      timeHour = Math.floor(timeHour);

      timeSecInAllMin = timeAllSec - (timeHour * 3600);
      timeAllMin = timeSecInAllMin / 60;
      timeMin = Math.floor(timeAllMin);

      timeSecInMin = timeMin * 60;
      timeSec = timeSecInAllMin - timeSecInMin; 

      return [timeHour + " часов", timeMin + " минут", timeSec + " секунд"];
    }

    timeDistance();
     /* timeAllSec = 10417
      10417 / 3600 = 2.89; timeHourInAllSec
      2 часа = timeHour
      в 2 часах 7200 секунд;
      из общих 10417 - 7200 сек = 3217 сек; timeSecInAllMin
      3217 / 60 = 53.61 в остаточных; timeAllMin
      округляем 53
      53 * 60 = 3180
      3217 - 3180 = 37 сек

      2 часа 53 мин 37 сек */



    // К примеру в вас есть кофе (1кг, 2кг) => задача сделать функцию,// запытаете зерна - ставите помол (грамм за порцию) и считаете кол-во чашек


    const coffeeAmount = {
      coffeeQuantity: +prompt('Введите количество кофе в килограммах: '),
      spoonfulsOfCoffee: +prompt('Введите количество ложек на одну чашку кофе: ')
    };

    const cupCount = () => {
      const countPerCoffeeInSpoon = 3; // Количество грамм кофе в одной ложке 
      coffeeQuantityInGrams = coffeeAmount.coffeeQuantity * 1000;
      cupOfCoffeeCount = coffeeQuantityInGrams / (coffeeAmount.spoonfulsOfCoffee * countPerCoffeeInSpoon);
      cupOfCoffeeCount = Math.round(cupOfCoffeeCount);
      return 'У вас выходит: ' + cupOfCoffeeCount + ' чашек кофе';
    };

    cupCount();

    /* 1000 грамм
    6 грамм на одну чашку, если две ложки, а в одной ложке 3 грамма

    1000 / 6 = количество чашек, только округляем с round (166) */




  // Инпут в HTML => вводим имейл и проверяем его на валидность => проверяем на наличие @ .com / .ua /

    const email = prompt('Введите свой Email: ');

    const emailValidity = () => {
    if (email.includes("@") && (email.includes(".ua") || email.includes(".com"))) {
      console.log ('Вы ввели верный E-mail');
    } else {
      console.log('Вы ввели неверный E-Mail');
    }
  };
    
  emailValidity();
  





  // У вас телефон с памятью в ГБ - и при вызове функции вы передаете массив с данными(в МБ) по типу [0.2, 5.5, 2.3] 


  const phoneMemory = +prompt(`Введите количество памяти на вашем телефоне: `);
    
  
  const games = {
    NeedForSpeedNoLimit: 3.14,
    Sims4: 3.62,
    ARKMobile: 7.75,
    PubgMobile: 5.31,
    GtaSA: 2.36
  };

  const questionWatch = () => {
    const questionWatchGames = confirm(`Вы хотите увидить список игр и их размер в ГБ?`);
    if (questionWatchGames) {
      console.log(games);
    } else {
      console.log(`Выбирайте игры`);
    }
  };

  questionWatch();

const gameKeys = Object.keys(games);
const selectedGames = [];
let totalSize = 0;

for (let i = 0; i < gameKeys.length; i++) {
  let key = gameKeys[i];
  let questionDownloadsGames = confirm(`Вы хотите загрузить игру ${key}`);
  
  if (questionDownloadsGames) {
    const sizeGames = games[key];
    selectedGames.push({games: key, size: (sizeGames * 1000) + ` МБ`});
    totalSize += sizeGames;
  }
};

console.log(`Выбранные игры: ${selectedGames} Всего игры будут занимать: ${totalSize} ГБ места на вашем телефоне`);

const finalCounting = () => {
  let freeMemory = phoneMemory - totalSize;
  freeMemory = freeMemory.toFixed(2);
  totalSize = totalSize.toFixed(2);
  if (phoneMemory > totalSize) {
    console.log(`На вашем телефоне ${phoneMemory} ГБ памяти, из них будет использовано ${totalSize} ГБ. У вас остается свободной памяти ${freeMemory} ГБ`);
  } else {
    console.log(`На вашем телефоне ${phoneMemory} ГБ памяти, а вам нужно минимум ${totalSize} ГБ, чтобы установить все игры`)
  }
};

finalCounting ();

