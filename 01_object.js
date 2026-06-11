//singleton
Object.create //through constructor

//object literals

const mySym = Symbol("key1") 

const jsUser = {
name: "Tushar",
"full name": "Tushar Amrutkar",
mySym:"mykey1",
age: 20,
location: "Mussorrie",
email: "tushar@gmail.com",
isLoggedin: false,
lastLoginDays: ["monday", "saturday"],

}

//object ko access karna hain 

console.log(jsUser.email)//here we take . that why there is no need to take access
console.log(jsUser["email"])//string
console.log(jsUser["full name"])
console.log(jsUser["mySym"])

jsUser.email = "tushar@google.com"
console.log(jsUser)
jsUser.email = "tushar@microsoft.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this["full name"]}`);
}

Object.freeze(jsUser);

jsUser.greeting();
jsUser.greetingTwo();