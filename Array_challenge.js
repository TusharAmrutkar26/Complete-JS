//1] push() :- Adds a new element at the end of an array.

let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);

// Output: ["Apple", "Banana", "Mango"]


//2] pop() :- Removes the last element from an array.

let cart = ["Shoes", "Watch", "Bag"];
cart.pop();
console.log(cart);

// Output: ["Shoes", "Watch"]


//3] unshift() :- Adds a new element at the beginning of an array.

let tasks = ["Coding", "Meeting"];
tasks.unshift("Assignment");
console.log(tasks);

// Output: ["Assignment", "Coding", "Meeting"]


//4] shift() :- Removes the first element from an array.

let notifications = ["Msg1", "Msg2"];
notifications.shift();
console.log(notifications);

// Output: ["Msg2"]


//5] includes() :- Checks whether an element exists in an array.

let users = ["Tushar", "Rohit", "Akash"];
console.log(users.includes("Tushar"));

// Output: true


//6] indexOf() :-Returns the position of an element in an array.

let friends = ["Raj", "Vijay", "Sameer"];
console.log(friends.indexOf("Vijay"));

// Output: 1


//7] slice() :- Extracts a portion of an array without modifying it.

let products = [1, 2, 3, 4, 5];
console.log(products.slice(0, 3));

// Output: [1, 2, 3]


//8] splice() :- Adds, removes, or replaces elements in an array.

let orders = ["Mobile", "Laptop", "TV"];
orders.splice(1, 1);
console.log(orders);

// Output: ["Mobile", "TV"]


//9] map() :- 

let marks = [70, 80, 90];
console.log(marks.map(mark => mark + 5));

// Output: [75, 85, 95]


//10] filter() :- Creates a new array with elements that match a condition.

let results = [35, 80, 25, 90];
console.log(results.filter(mark => mark >= 40));

// Output: [80, 90]


//11] reduce() :-

let expenses = [500, 1000, 1500];
console.log(expenses.reduce((sum, val) => sum + val, 0));
// Output: 3000