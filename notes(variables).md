# JavaScript Day 2 - Variables & Scope

## Introduction

Variables are containers used to store data in JavaScript. Instead of writing the same value multiple times, we store it in a variable and use the variable name whenever needed.

Example:

```javascript
let name = "Tushar";
```

Here, `"Tushar"` is the value and `name` is the variable that stores it.

---

## const

The `const` keyword is used when the value should remain constant throughout the program.

```javascript
const accountId = 112240150;
```

### Key Points

* Must be initialized during declaration.
* Cannot be reassigned later.
* Best choice when the value should not change.

```javascript
const accountId = 112240150;

// Error
accountId = 12345;
```

Use `const` whenever possible because it makes the code safer and easier to understand.

---

## let

The `let` keyword is used when the value may change later in the program.

```javascript
let city = "Dhule";

city = "Pune";
```

Output:

```javascript
Pune
```

### Key Points

* Value can be updated.
* Has block scope.
* Preferred for variables that need modification.

Real-life example:

```javascript
let score = 0;

score = score + 10;
```

The score changes as the game progresses, so `let` is appropriate.

---

## var

`var` is the old way of declaring variables before `let` and `const` were introduced.

```javascript
var name = "Tushar";
```

Although it still works, it is generally avoided in modern JavaScript.

### Why avoid var?

Because it does not follow block scope properly and can create unexpected bugs.

Example:

```javascript
var name = "Tushar";

if (true) {
    var name = "Rahul";
}

console.log(name);
```

Output:

```javascript
Rahul
```

The value changes outside the block as well.

This behavior can make large programs difficult to manage.

---

## Variable Without Keyword

```javascript
accountCity = "Dhule";
```

JavaScript allows this, but it is not recommended.

Why?

Because it creates a global variable automatically, which may lead to bugs and confusion.

Always use:

```javascript
let
const
var
```

---

## Undefined

```javascript
let accountState;
```

Output:

```javascript
undefined
```

A variable is `undefined` when it has been declared but no value has been assigned.

Think of it as an empty box that exists but currently contains nothing.

---

## Updating Variables

Variables declared with `let` can be updated.

```javascript
let email = "old@gmail.com";

email = "new@gmail.com";
```

This is useful when information changes during program execution.

---

## console.table()

When multiple values need to be displayed together, `console.table()` provides a cleaner output.

```javascript
console.table([
    accountId,
    accountEmail,
    accountCity
]);
```

Instead of printing values one by one, it displays them in a table format.

This is very useful while debugging.

---

## Scope

Scope defines where a variable can be accessed in the code.

### Block Scope

A block is any code written inside curly braces `{}`.

```javascript
{
    let a = 10;
}
```

The variable `a` exists only inside that block.

Trying to access it outside will produce an error.

Block scope helps prevent accidental changes to variables.

---

### Function Scope

Variables declared inside a function are available only inside that function.

```javascript
function test() {
    let x = 20;
}
```

Outside the function, `x` cannot be accessed.

---

## Best Practice

1. Use `const` by default.
2. Use `let` when the value needs to change.
3. Avoid `var`.
4. Give variables meaningful names.
5. Never create variables without `let`, `const`, or `var`.

---

# Quick Revision

* Variables store data.
* `const` = value cannot be reassigned.
* `let` = value can be reassigned.
* `var` = old keyword, avoid using it.
* `undefined` = declared but no value assigned.
* `console.table()` = displays data in table format.
* Scope decides where a variable can be accessed.
* Prefer `const` and `let` in modern JavaScript.
