// Day 8: ES6+ Features

// Activity 1: Template Literals
let name = "Alice";
let age = 30;
let greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting);

let multiLineString = `This is a string
that spans multiple
lines.`;
console.log(multiLineString);

// Activity 2: Destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(first, second);

let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
let { title, author } = book;
console.log(title, author);

// Activity 3: Spread and Rest Operators
let newNumbers = [...numbers, 6, 7, 8];
console.log(newNumbers);

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Activity 4: Default Parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2));
console.log(multiply(5));

// Activity 5: Enhanced Object Literals
let methodName = "greet";
let person = {
  name,
  age,
  [methodName]() {
    return `Hello, my name is ${this.name}.`;
  },
};
console.log(person);
console.log(person.greet());

// Feature Request Scripts

// 1. Template Literals Script
let personName = "Bob";
let personAge = 25;
let info = `Person's name is ${personName} and age is ${personAge}.`;
console.log(info);

let multiLine = `This is an example
of a multi-line string
using template literals.`;
console.log(multiLine);

// 2. Destructuring Script
let array = [10, 20, 30, 40];
let [firstElement, secondElement] = array;
console.log(firstElement, secondElement);

let obj = { prop1: "value1", prop2: "value2" };
let { prop1, prop2 } = obj;
console.log(prop1, prop2);

// 3. Spread and Rest Operators Script
let originalArray = [1, 2, 3];
let extendedArray = [...originalArray, 4, 5, 6];
console.log(extendedArray);

function combine(...elements) {
  return elements.join(", ");
}
console.log(combine("apple", "banana", "cherry"));

// 4. Default Parameters Script
function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));

// 5. Enhanced Object Literals Script
let propertyName = "status";
let user = {
  username: "admin",
  [propertyName]: "active",
  login() {
    return `${this.username} is ${this.status}`;
  },
};
console.log(user);
console.log(user.login());
