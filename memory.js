// Stack(Primitive),Heap(Non-Primitive)

let myName = "TUSHAR"

let anothername = myName
anothername = "ANKIT"

console.log(myName);
console.log(anothername);

let userOne = {
    email:"Tushar@gmail.com",
    upi: "user@xyz"

}

let userTwo =userOne

userTwo.email = "Ankit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);