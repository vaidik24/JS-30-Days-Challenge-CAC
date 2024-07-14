// Activity 1: Arithmetic Operations
// Task 1
let addResult = 5 + 3;
console.log("Addition Result:", addResult);

// Task 2
let subtractResult = 10 - 4;
console.log("Subtraction Result:", subtractResult);

// Task 3
let multiplyResult = 7 * 6;
console.log("Multiplication Result:", multiplyResult);

// Task 4
let divideResult = 20 / 5;
console.log("Division Result:", divideResult);

// Task 5
let remainderResult = 17 % 3;
console.log("Remainder Result:", remainderResult);

// Activity 2: Assignment Operators
// Task 6
let assignVar = 10;
assignVar += 5;
console.log("After += operation:", assignVar);

// Task 7
assignVar -= 3;
console.log("After -= operation:", assignVar);

// Activity 3: Comparison Operators
// Task 8
let compareGreater = 8 > 6;
let compareLesser = 8 < 6;
console.log("8 > 6:", compareGreater);
console.log("8 < 6:", compareLesser);

// Task 9
let compareGreaterOrEqual = 8 >= 8;
let compareLesserOrEqual = 7 <= 8;
console.log("8 >= 8:", compareGreaterOrEqual);
console.log("7 <= 8:", compareLesserOrEqual);

// Task 10
let compareEqual = 5 == "5";
let compareStrictEqual = 5 === "5";
console.log('5 == "5":', compareEqual);
console.log('5 === "5":', compareStrictEqual);

// Activity 4: Logical Operators
// Task 11
let andResult = 5 > 3 && 10 < 15;
console.log("Logical AND result:", andResult);

// Task 12
let orResult = 5 > 6 || 10 < 15;
console.log("Logical OR result:", orResult);

// Task 13
let notResult = !(5 > 6);
console.log("Logical NOT result:", notResult);

// Activity 5: Ternary Operator
// Task 14
let number = -7;
let isPositive = number > 0 ? "Positive" : "Negative";
console.log("The number is:", isPositive);

// Feature Request: Arithmetic Operations Script
function arithmeticOperations(a, b) {
  console.log("Addition:", a + b);
  console.log("Subtraction:", a - b);
  console.log("Multiplication:", a * b);
  console.log("Division:", a / b);
  console.log("Remainder:", a % b);
}

// Feature Request: Comparison and Logical Operators Script
function comparisonAndLogicalOperators(a, b) {
  console.log(`${a} > ${b}:`, a > b);
  console.log(`${a} < ${b}:`, a < b);
  console.log(`${a} >= ${b}:`, a >= b);
  console.log(`${a} <= ${b}:`, a <= b);
  console.log(`${a} == ${b}:`, a == b);
  console.log(`${a} === ${b}:`, a === b);
  console.log(`(${a} > ${b}) && (${a} < ${b + 5}):`, a > b && a < b + 5);
  console.log(`(${a} > ${b}) || (${a} < ${b + 5}):`, a > b || a < b + 5);
  console.log(`!(${a} > ${b}):`, !(a > b));
}

// Feature Request: Ternary Operator Script
function checkPositiveOrNegative(num) {
  let result = num > 0 ? "Positive" : "Negative";
  console.log("The number is:", result);
}

arithmeticOperations(12, 4);
comparisonAndLogicalOperators(8, 5);
checkPositiveOrNegative(-3);
