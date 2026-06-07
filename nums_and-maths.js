const score = 95
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

//const otherNumber  = 1123.8966
const otherNumber = 124.6795

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //use , betn nos.

//**************************MATHS**************************************//

console.log(Math); //it is a object
console.log(Math.abs(-4)); //absolute ,it convert neg value into positive
console.log(Math.abs(4));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.2));
console.log(Math.min(4,5,2,8));
console.log(Math.max(7,9,3,26))
 
console.log(Math.random()) //in this fun the value lies betn 0 to 1
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

