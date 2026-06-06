//Declaring a string

const name = "Tushar"
const  repoCount = 18

//console.log(name + "repoCount" + "Value") // not to be prefrred for concatenation
console.log(name + " " + repoCount) // better than above but still not prefrred

console.log(`Hello, my name is ${name} and I have ${repoCount} GitHub repositories.`) 
//``called as string interpolation
// and it is the best way to concatenate string and variable together

const gameName = new String("Cricket") // creating string using constructor
console.log(gameName[1])
console.log(gameName.__proto__); //objects

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

 const newString = gameName.substring(0, 4)//last 4 include nhi hoga
 console.log(newString);

const anotherString = gameName.slice(-7 , 3)
console.log(anotherString);

//trim
const newStringOne = "   Tushar   "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim -> it simply removes the space in the string

//The trim() method of String values removes whitespace from both ends of this string and 
// returns a new string, without modifying the original string.
//To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd()

const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

//Replace function
const url = "https://tushar.com/tushar%20amrutkar"

console.log(url.replace( '%20', '-'))

//we also ask like
console.log(url.includes("tushar"))
console.log(url.includes("rohit"))

console.log(gameName.split('-'));

