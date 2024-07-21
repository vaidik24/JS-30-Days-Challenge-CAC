// Day 6: Arrays

// Activity 1: Array Creation and Access
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

// Activity 2: Array Methods (Basic)
numbers.push(6);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.unshift(1);
console.log(numbers);

// Activity 3: Array Methods (Intermediate)
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// Activity 4: Array Iteration
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach((num) => console.log(num));

// Activity 5: Multi-dimensional Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

console.log(matrix[1][2]);

// Feature Request Scripts

// 1. Array Manipulation Script
let arrayManipulation = [10, 20, 30];
arrayManipulation.push(40);
console.log(arrayManipulation);
arrayManipulation.pop();
console.log(arrayManipulation);
arrayManipulation.shift();
console.log(arrayManipulation);
arrayManipulation.unshift(10);
console.log(arrayManipulation);

// 2. Array Transformation Script
let arrayTransformation = [1, 2, 3, 4, 5];
let doubledArray = arrayTransformation.map((num) => num * 2);
console.log(doubledArray);
let filteredArray = arrayTransformation.filter((num) => num % 2 === 0);
console.log(filteredArray);
let reducedSum = arrayTransformation.reduce((total, num) => total + num, 0);
console.log(reducedSum);

// 3. Array Iteration Script
let arrayIteration = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayIteration.length; i++) {
  console.log(arrayIteration[i]);
}
arrayIteration.forEach((num) => console.log(num));

// 4. Two-dimensional Array Script
let twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(twoDimensionalArray);
console.log(twoDimensionalArray[2][1]);
