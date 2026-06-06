let score ='26abc'
//let score =null
//let score =undefined
//let score=true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof ValueInNumber);
console.log(valueInNumber);

//"33"= 33
//"33abc"=NaN(not a number)
//true =1 ; false= 0

//let isLoggedin= 1
//let isLoggedin=""
let isLoggedin="tushar"

let booleanIsLoggedin = Boolean(isLoggedin)
//console.log(booleanIsLoggedin)

//""= false , 0 =false
//"tushar"=true ,1 =true

let someNumber =26
let StringNumber =String(someNumber)
console.log(StringNumber)

console.log(typeof StringNumber)


//*************************Opeartions******************************

let value=5
let negvalue =-value
console.log(negvalue);

//Arithmetic operations

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

//String Confusing Parts:
console.log("2"+2); //string conactenation #22
console.log("2"+ "2");  //#22
console.log(2-"2"); //# 0
console.log(1+"2"+2)
console.log(1+2+"2")


str1 = "Hello"
str2 = " Tushar"

let str3 = str1 + str2
console.log(str3)


console.log((3+4)* 5 % 3)

console.log(true) 
console.log(+true) //1
console.log(+"") //#0  =>Basically not preferred for use

let num1, num2, num3

num1= num2= num3 = 7+26
console.table([num1, num2, num3])

//Prefix and postfix:

let GameCounter = 100
//GameCounter++ //POSTFIX INCREMENT    => for details study=prefix postfix js mdn
++GameCounter //PREFIX INCREMENT   
console.log(GameCounter)





