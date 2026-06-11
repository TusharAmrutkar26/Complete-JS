

function sayMyName(){
    console.log("T");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("R");
}

//sayMyName()

//function addTwoNumbers(num1 ,num2){ //parameters
  //  console.log(num1 + num2)
//}

function addTwoNumbers(num1 ,num2){ 
   //let result = num1 + num2
   //return result
   //console.log("tushar"); //excecute nhi hoga becoz retrun ke baad koi bhi kaam nnhi karta 
   return num1 + num2
}

//addTwoNumbers()
//addTwoNumbers(3,"4")// jab fun ko call akrte tab usme jo parameter lete hain usko bolte hain"Argument"
//addTwoNumbers(4,"a")
//addTwoNumbers(3,null)

const result = addTwoNumbers(3,5)
console.log("Result:",result)

function loginUserMessage(username="Tushar"){
    if(username === undefined){ ///instead we also write(!username)
        console.log("please enter a username");
        return

    }
    return`${username} just logged in`
}

//console.log(loginUserMessage("Tushar"))
console.log(loginUserMessage())