# JavaScript Day 1 - Data Types & Typeof

## 1. Strict Mode

```javascript
"use strict";
```

* Treats JavaScript code as a newer version.
* Helps catch common mistakes and unsafe actions.

---

## 2. Output in JavaScript

```javascript
console.log("Hello World");
```

* Used to print output in the console.
* In Node.js, `alert()` does not work.

---

## 3. Variables

```javascript
let name = "Tushar";
let age = 20;
let isLoggedIn = true;
```

### Variable Types

* `let` → value can be changed.
* `const` → value cannot be reassigned.
* `var` → old way of declaring variables (avoid using).

---

## 4. Primitive Data Types

### Number

```javascript
let age = 20;
```

* Stores numeric values.
* Safe range: `-(2^53 - 1)` to `(2^53 - 1)`.

### BigInt

```javascript
let bigNumber = 12345678901234567890n;
```

* Used for very large integers.

### String

```javascript
let name = "Tushar";
```

* Stores text inside quotes (`""`, `''`, ````).

### Boolean

```javascript
let isLoggedIn = true;
```

* Only two values: `true` or `false`.

### Null

```javascript
let temperature = null;
```

* Represents an intentionally empty value.

### Undefined

```javascript
let state;
```

* Variable declared but no value assigned.

### Symbol

```javascript
const id = Symbol("123");
```

* Creates unique values.

---

## 5. Object

```javascript
const user = {
    name: "Tushar",
    age: 20
};
```

* Stores data in key-value pairs.
* Non-primitive data type.

---

## 6. typeof Operator

### Syntax

```javascript
typeof variable
```

### Examples

```javascript
typeof "Tushar"      // string
typeof 20            // number
typeof true          // boolean
typeof undefined     // undefined
typeof null          // object
```

### Important Interview Point

```javascript
typeof null // object
```

* This is a historical bug in JavaScript.
* Remember it for interviews and quizzes.

---

## Quick Revision

Primitive Data Types:

1. Number
2. BigInt
3. String
4. Boolean
5. Null
6. Undefined
7. Symbol

Non-Primitive:

* Object

Most Important Points:
✅ Use `"use strict"`
✅ Prefer `let` and `const` over `var`
✅ `null` = empty value
✅ `undefined` = value not assigned
✅ `typeof null` returns `"object"`
✅ `typeof undefined` returns `"undefined"`
