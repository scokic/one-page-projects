// let dolphinsScore1 = 96;
// let dolphinsScore2 = 108;
// let dolphinsScore3 = 89;

// let koalasScore1 = 88;
// let koalasScore2 = 91;
// let koalasScore3 = 110;

// let dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// let koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log (dolphinsAverageScore);
// console.log (koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log ('Dolphins win!')
// } else if (dolphinsAverageScore === koalasAverageScore) {
//     console.log("Wow! It's a draw!")
// } else {
//     console.log('Koalas win!')
// }



// let dolphinsScore1 = 97;
// let dolphinsScore2 = 112;
// let dolphinsScore3 = 101;

// let koalasScore1 = 109;
// let koalasScore2 = 95;
// let koalasScore3 = 123;

// let dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// let koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log (dolphinsAverageScore);
// console.log (koalasAverageScore);


// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore > 100) {
//     console.log ('Dolphins win with over 100 points!')
// } else if (dolphinsAverageScore === koalasAverageScore) {
//     console.log("Wow! It's a draw!")
// } else if(koalasAverageScore > dolphinsAverageScore && koalasAverageScore > 100) {
//     console.log('Koalas win with over 100 points!')
// } else {
//     console.log('No one wins, the game was boring...')
// }


let dolphinsScore1 = 97;
let dolphinsScore2 = 112;
let dolphinsScore3 = 101;

let koalasScore1 = 109;
let koalasScore2 = 95;
let koalasScore3 = 106;

let dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
let koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log (dolphinsAverageScore);
console.log (koalasAverageScore);


if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore > 100) {
    console.log ('Dolphins win with over 100 points!')
} else if(koalasAverageScore > dolphinsAverageScore && koalasAverageScore > 100) {
    console.log('Koalas win with over 100 points!')
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore > 100 && koalasAverageScore > 100) {
    console.log("Wow! It's a draw and both teams scored over 100 points! What a game!")
} else {
    console.log('No one win because the game was boring...')
}