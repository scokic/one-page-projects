// const jonas = {
//     name: 'Jonas',
//     lastName: "Schmidt",
//     friends: ['Michael', 'Peter', 'John'],
// }

// console.log(jonas);

// console.log(`${jonas.name} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);

/* TIP CALCULATOR */

// console.log(calcAverage('tips', 3));

// console.log(tips.reduce((a, b) => a + b, 0));

// tips.reduce((a, b)) => a + b, 0);

const billValue = [125, 555, 44];
const averageBillValue = billValue.reduce((a, b) => a + b, 0) / 3;

// const totalTip;

function calcTip(bill) {
  if (bill > 50 && bill < 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

// console.log(calcTip(averageBillValue));
// console.log(typeof totalTip);

console.log(billValue);

const tips = [
  calcTip(billValue[0]),
  calcTip(billValue[1]),
  calcTip(billValue[2]),
];

console.log(tips);

const total = [
  billValue[0] + tips[0],
  billValue[1] + tips[1],
  billValue[2] + tips[2],
];

console.log(total);
