const measureBucket = () => {
    let bucketOne = 5;
    let bucketTwo = 3;

    return function() {
        bucketOne -= 1;
        bucketTwo += 1;
        return ("В первом ведре: " + bucketOne + " л, а во втором ведре: " + bucketTwo + " л")
    };
};

const measure = measureBucket();
const finalMeasure = measure();
console.log(finalMeasure); 






// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  

//   const roundsToWin = 3;
  

//   let teamAScore = 0;
//   let teamBScore = 0;
//   let currentRound = 1;
  
//   while (teamAScore < roundsToWin && teamBScore < roundsToWin) {
//     console.log(`Раунд ${currentRound}`);
    

//     const zones = [1, 2, 3, 4];
//     for (let i = zones.length - 1; i > 0; i--) {
//       const j = getRandomInt(0, i);
//       [zones[i], zones[j]] = [zones[j], zones[i]];
//     }
    

//     const winningZone = zones[getRandomInt(0, 2)];
//     console.log(`Победившая зона: ${winningZone}`);
    

//     if (winningZone === 4) {
//       teamBScore++;
//       console.log("Команда B получает очко!");
//     } else {
//       teamAScore++;
//       console.log("Команда A получает очко!");
//     }
    
//     console.log(`Счет: Команда A - ${teamAScore}, Команда B - ${teamBScore}\n`);
//     currentRound++;
//   }
  

//   if (teamAScore >= roundsToWin) {
//     console.log("Команда A выигрывает матч!");
//   } else {
//     console.log("Команда B выигрывает матч!");
//   }
