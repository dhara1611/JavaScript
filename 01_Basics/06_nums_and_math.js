const number =  50;
console.log(number);

const anothernumber = new Number(100)
console.log(anothernumber);

console.log(anothernumber.toString());

const balance = 345860205;
console.log(balance.toLocaleString('en-IN'));

// #################### Math
// console.log(Math) //object
// console.log(Math.abs(-100)); //100
// console.log(Math.round(5.65522145));//6
// console.log(Math.ceil(5.589423));//6
// console.log(Math.floor(5.689423)); //5


console.log(Math.min(7,8,3,5,4,4,2,3))
console.log(Math.max(7,8,3,5,4,4,2,3))
console.log(Math.random());// any random value  between 0- 0.99
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10)+1)

const min = 45;
const max = 65;

console.log(Math.floor(Math.random()*(max-min))+min);// value should be between in 45-65
