const score = 400;
console.log(score); // 400

const balance = new Number(100);
console.log(balance); // [Number : 100]

console.log(balance.toString()); //100

console.log(balance.toFixed(2)); // 100.00


const j = 299.993940;
console.log(j.toFixed(2)) // 299.99

console.log(j.toPrecision(6)); // 299994

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN')); //1,00,000


//max value in js
console.log(Number.MAX_VALUE); //1.7976931348623157e+308

//min value in js
console.log(Number.MIN_VALUE); //5e-324


//++++++++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++++++++

console.log("+++++++++++++++++++++  Maths  +++++++++++++++++++++++")

// console.log(Math);


// console.log(Math.abs(-4)) //4   -ve converted to +ve


// console.log(Math.round(4.6)); // 5

// console.log(Math.floor(4.9)) // 4

// console.log(Math.ceil(4.2)); // 5

console.log(Math.ceil(Math.random()*6)); // give value from 1 to 6

console.log(Math.random()); // 0.0 , 0.1 , 0.2 --> 0.9

console.log(Math.random()*10); // shifts decimal to right 0. , 1. , 2. --> 9.

// to remove zero from list of ans , add 1


console.log(Math.random()*10); // now 0 will never be ans

console.log("++++++++++++++++++++++++")

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max-min) +1) + min);

