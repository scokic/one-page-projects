// BMI = mass / height ** 2 = mass / (height*height)

const markWeightOne = 78;
const markHeightOne = 1.69;

const johnWeightOne = 92;
const johnHeightOne = 1.95;


const markBMIOne = markWeightOne / markHeightOne ** 2;
console.log (markBMIOne);

const johnBMIOne = johnWeightOne / johnHeightOne ** 2;
console.log (johnBMIOne);

const markWeightTwo = 95;
const markHeightTwo = 1.88;

const johnWeightTwo = 85;
const johnHeightTwo = 1.76;

const markBMITwo = markWeightTwo / markHeightTwo ** 2;
console.log (markBMIOne);

const johnBMITwo = johnWeightTwo / johnHeightTwo ** 2;
console.log (johnBMITwo);


const markHigherBMIOne = markBMIOne > johnBMIOne;
console.log (markHigherBMIOne);

const markHigherBMITwo = markBMITwo > johnBMITwo;
console.log (markHigherBMITwo);

