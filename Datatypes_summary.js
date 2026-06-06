//primitive data types -> call by value
//reference data types -> call by reference

const Score = 100;
const scoreValue = 100.3 

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const ID = Symbol("777");
const anotherID = Symbol("777");

console.log(ID === anotherID); // false, because symbols are unique

const bigNumber = BigInt("9007199254740991");
console.log(bigNumber);


//primitive
//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//symbol => used to create unique identifiers for objects
//bigint => used to represent integers larger than 2^53 - 1

//reference
//object => collection of key-value pairs
//array => ordered list of values
//function => reusable block of code that performs a specific task  

const Services = ["IAS", "IPS" , "IFS", "IRS"];
let myObj =  {
    name : "Tushar",
    age : "20"

}

const myFunc = function() {
    console.log("Hello World");
}

console.log(typeof Services); 

