// Array Basics

//In JavaScript, arrays aren't primitives but are instead Array objects

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = [ "shaktiman","Batman"] 
console.log(myArr[0])

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[2])

//Array Methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

myArr.unshift(9)
myArr.shift()
//console.log(myArr.includes(9))
//console.log(myArr.indexOf(10))

const newArr = myArr.join()

console.log(myArr)
console.log( typeof newArr)

//slice, splice

console.log("Tushar",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("S", myArr)

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

//Slice

//slice(start, end) returns a shallow copy of a portion of an array.
//start is included
//end is excluded
//Original array stays unchanged

//splice

//splice(start, deleteCount, item1, item2...) changes the original array.

/*Easy Way to Remember
slice = copy
splice = change original
*/