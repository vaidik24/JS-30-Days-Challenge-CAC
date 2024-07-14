// Activity 1: Variable Declaration
// Task 1
var numberVar = 10;
console.log("var numberVar:", numberVar);

// Task 2
let stringLet = "Hello, World!";
console.log("let stringLet:", stringLet);

// Activity 2: Constant Declaration
// Task 3
const booleanConst = true;
console.log("const booleanConst:", booleanConst);

// Activity 3: Data Types
// Task 4
let numberType = 42;
let stringType = "JavaScript";
let booleanType = false;
let objectType = { name: "Vaidik", age: 21 };
let arrayType = [1, 2, 3, 4, 5];

console.log("numberType:", numberType, "typeof:", typeof numberType);
console.log("stringType:", stringType, "typeof:", typeof stringType);
console.log("booleanType:", booleanType, "typeof:", typeof booleanType);
console.log("objectType:", objectType, "typeof:", typeof objectType);
console.log("arrayType:", arrayType, "typeof:", typeof arrayType);

// Activity 4: Reassigning Variables
// Task 5
let reassignVar = "Initial Value";
console.log("Before reassignment:", reassignVar);
reassignVar = "New Value";
console.log("After reassignment:", reassignVar);

// Activity 5: Understanding const
// Task 6
const immutableConst = "Cannot change this";
console.log("Before trying to reassign const:", immutableConst);
try {
  immutableConst = "Trying to change";
} catch (error) {
  console.error("Error while reassigning const:", error.message);
}

// Feature Request: Variable Types Console Log
function logVariableTypes() {
  let num = 123;
  let str = "TypeScript";
  let bool = true;
  let obj = { framework: "React", language: "JavaScript" };
  let arr = [10, 20, 30];

  console.log("num:", num, "typeof:", typeof num);
  console.log("str:", str, "typeof:", typeof str);
  console.log("bool:", bool, "typeof:", typeof bool);
  console.log("obj:", obj, "typeof:", typeof obj);
  console.log("arr:", arr, "typeof:", typeof arr);
}

// Feature Request: Reassignment Demo
function demoReassignment() {
  let mutableLet = "Initial Let Value";
  console.log("mutableLet before reassignment:", mutableLet);
  mutableLet = "Reassigned Let Value";
  console.log("mutableLet after reassignment:", mutableLet);

  const immutableConst = "Initial Const Value";
  console.log("immutableConst before reassignment:", immutableConst);
  try {
    immutableConst = "Reassigned Const Value";
  } catch (error) {
    console.error("Error while reassigning immutableConst:", error.message);
  }
}

logVariableTypes();
demoReassignment();
