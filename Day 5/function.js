// Day 5: Functions

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }
}

// Task 2: Write a function to calculate the square of a number and return the result.
function square(number) {
  return number * number;
}

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function (a, b) {
  const max = a > b ? a : b;
  console.log(`The maximum of ${a} and ${b} is ${max}.`);
};

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function (str1, str2) {
  return str1 + str2;
};

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => {
  return a + b;
};

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
  return a * b;
}

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old.`;
}

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
  return func2(func1(value), func1(value));
}

// Example usage of the functions

// Activity 1
isEvenOrOdd(3); // Output: 3 is odd.
console.log(square(4)); // Output: 16

// Activity 2
findMax(10, 20); // Output: The maximum of 10 and 20 is 20.
console.log(concatenateStrings("Hello, ", "world!")); // Output: Hello, world!

// Activity 3
console.log(sum(5, 10)); // Output: 15
console.log(containsCharacter("Hello", "e")); // Output: true

// Activity 4
console.log(multiply(5)); // Output: 5
console.log(greet("Alice")); // Output: Hello, Alice! You are 18 years old.

// Activity 5
repeatFunction(() => console.log("Hello!"), 3); // Output: Hello! (3 times)
console.log(applyFunctions(square, sum, 2)); // Output: 8 (square(2) + square(2))
