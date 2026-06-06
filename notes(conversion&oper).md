# JavaScript Day 3 - Type Conversion & Operations

## Introduction

In JavaScript, data often comes from users, forms, APIs, or databases. Sometimes we need to convert one data type into another.

This process is called **Type Conversion**.

Example:

* User enters age as `"25"` (string)
* We need `25` (number) for calculations

So we convert the string into a number.

---

# 1. Number Conversion

We use the `Number()` function to convert values into numbers.

```javascript
let score = "26";

let valueInNumber = Number(score);
```

### Examples

```javascript
Number("33")      // 33
Number("33abc")   // NaN
Number(true)      // 1
Number(false)     // 0
Number(null)      // 0
Number(undefined) // NaN
```

### What is NaN?

`NaN` means **Not a Number**.

```javascript
Number("26abc")
```

Output:

```javascript
NaN
```

JavaScript tried converting the value but failed because it contains letters.

---

# 2. Boolean Conversion

We use the `Boolean()` function to convert values into `true` or `false`.

```javascript
let isLoggedIn = "Tushar";

let booleanIsLoggedIn = Boolean(isLoggedIn);
```

### Examples

```javascript
Boolean(1)        // true
Boolean(0)        // false
Boolean("")       // false
Boolean("Tushar") // true
Boolean(null)     // false
Boolean(undefined)// false
```

### Rule

Values that contain something usually become `true`.

Empty values usually become `false`.

---

# 3. String Conversion

We use the `String()` function to convert values into strings.

```javascript
let someNumber = 26;

let stringNumber = String(someNumber);
```

Output:

```javascript
"26"
```

Type:

```javascript
string
```

---

# 4. typeof Operator

The `typeof` operator is used to check the data type of a value.

```javascript
typeof "Tushar"   // string
typeof 26         // number
typeof true       // boolean
```

Very useful while debugging.

---

# 5. Arithmetic Operators

JavaScript supports normal mathematical operations.

```javascript
2 + 2
2 - 2
2 * 2
2 / 2
2 % 2
2 ** 3
```

### Meaning

| Operator | Meaning        |
| -------- | -------------- |
| +        | Addition       |
| -        | Subtraction    |
| *        | Multiplication |
| /        | Division       |
| %        | Remainder      |
| **       | Power          |

Example:

```javascript
2 ** 3
```

Output:

```javascript
8
```

---

# 6. String Concatenation

The `+` operator joins strings.

```javascript
"Hello" + " Tushar"
```

Output:

```javascript
Hello Tushar
```

---

# 7. Confusing JavaScript Operations

JavaScript evaluates expressions from left to right.

### Example 1

```javascript
"2" + 2
```

Output:

```javascript
"22"
```

Because one value is a string, JavaScript converts the number into a string.

---

### Example 2

```javascript
2 - "2"
```

Output:

```javascript
0
```

The minus operator converts both values into numbers.

---

### Example 3

```javascript
1 + "2" + 2
```

Output:

```javascript
"122"
```

Steps:

```javascript
1 + "2" = "12"
"12" + 2 = "122"
```

---

### Example 4

```javascript
1 + 2 + "2"
```

Output:

```javascript
"32"
```

Steps:

```javascript
1 + 2 = 3
3 + "2" = "32"
```

### Important Rule

If a string appears first, most additions become string concatenation.

---

# 8. Unary Plus Operator

```javascript
+true
```

Output:

```javascript
1
```

```javascript
+""
```

Output:

```javascript
0
```

Although valid JavaScript, this style is generally avoided because it reduces readability.

---

# 9. Assigning Multiple Variables

```javascript
let num1, num2, num3;

num1 = num2 = num3 = 7 + 26;
```

Output:

```javascript
33
33
33
```

Avoid writing code like this in real projects because it hurts readability.

Prefer:

```javascript
let num1 = 33;
let num2 = 33;
let num3 = 33;
```

---

# 10. Increment Operators

Used to increase a value by 1.

```javascript
let gameCounter = 100;

gameCounter++;
```

Output:

```javascript
101
```

---

## Postfix Increment

```javascript
x++
```

First use the value, then increase it.

---

## Prefix Increment

```javascript
++x
```

First increase the value, then use it.

Example:

```javascript
let x = 5;

console.log(++x);
```

Output:

```javascript
6
```

---

# Best Practices

✅ Use explicit conversions (`Number()`, `Boolean()`, `String()`)

✅ Use meaningful variable names

✅ Avoid confusing expressions like `+"", +true`

✅ Avoid assigning multiple variables in one line

✅ Prefer readable code over clever code

---

# Quick Revision

* Type Conversion = changing one datatype into another.
* `Number()` converts values to numbers.
* `Boolean()` converts values to true/false.
* `String()` converts values to strings.
* `NaN` = Not a Number.
* `typeof` checks datatype.
* `+` joins strings.
* `-`, `*`, `/` convert strings to numbers if possible.
* JavaScript evaluates expressions left to right.
* Prefix (`++x`) updates first.
* Postfix (`x++`) uses first, updates later.
