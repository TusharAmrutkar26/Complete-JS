const tinderUser = new Object() // Singleton object 
//const tinderUser = {} //non-singleton object 
 tinderUser.idd = "123abc" 
tinderUser.name = "Tushar" 
tinderUser.isLoggedin = true 
//console.log(tinderUser) 


const regularUser = {
 email: "some@gmail.com", 
 fullname: { 
    userfullname: { 
        firstname: "tushar", lastname: "amrutkar" 
    } 
} 
}
//  console.log(regularUser.fullname.userfullname.firstname); //optional chaining ->? if name or anything that is not exist 
// 
const obj1 = {1:"a", 2:"b"} 
const obj2 = {3:"a", 4:"b"} 
const obj4 = {3:"a", 4:"b"} 

//const obj3 = { obj1 ,obj2 } 
//const obj3 = Object.assign({},obj1, obj2, obj4) // {}-> target , obj-> source 

const obj3 = {...obj1, ...obj2} //spread operator 
console.log(obj3); 

const users = [ 
    { 
        id: 1,
         email: "t@gmail.com" 
        } 
    ] 
    
users[0].email
//console.log(users[0].email); 

//console.log(Object.keys(tinderUser)); 
//console.log(Object.values(tinderUser)); 
//console.log(Object.entries(tinderUser)); 

//console.log(tinderUser.hasOwnProperty('isLoggedin'));


