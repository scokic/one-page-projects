'use strict'

let dolphinsScoreOne = 85;
let dolphinsScoreTwo = 54;
let dolphinsScoreThree = 41;
let koalasScoreOne = 23;
let koalasScoreTwo = 34;
let koalasScoreThree = 27;

let calcAverage = (a,b,c) => (a+b+c)/3;

const dolphinsAverageScore = calcAverage(dolphinsScoreOne, dolphinsScoreTwo, dolphinsScoreThree);
const koalasAverageScore = calcAverage(koalasScoreOne, koalasScoreTwo, koalasScoreThree);

console.log(dolphinsAverageScore, koalasAverageScore)


// function avgScr(a, b, c) {
//     let scr = (a + b + c)/ 3;
//     return(scr);
// }

// console.log(avgScr(dolphinsScoreOne, dolphinsScoreTwo, dolphinsScoreThree));
// console.log(avgScr(koalasScoreOne, koalasScoreTwo, koalasScoreThree));

let checkWinner = function(a, b) {
    if (a >= (b*3)) {
        console.log(`Dolphins win ${dolphinsAverageScore} vs. ${koalasAverageScore}`)
    } else if (b >= (a*3)) {
        console.log("Koalas win!")
    } else {
        console.log("No one wins, the game was boring...")
    }
}

checkWinner(dolphinsAverageScore, koalasAverageScore);