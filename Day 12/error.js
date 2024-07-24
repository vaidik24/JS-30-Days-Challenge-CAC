// Day 12: Error Handling

// Activity 1: Basic Error Handling with Try-Catch

// Task 1
function throwError() {
  throw new Error("Intentional error thrown");
}

try {
  throwError();
} catch (error) {
  console.error("Error caught:", error.message);
}

// Task 2
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  console.error("Error caught:", error.message);
}

// Activity 2: Finally Block

// Task 3
function tryCatchFinally() {
  try {
    console.log("In try block");
    throw new Error("Error in try block");
  } catch (error) {
    console.error("Error caught:", error.message);
  } finally {
    console.log("In finally block");
  }
}

tryCatchFinally();

// Activity 3: Custom Error Objects

// Task 4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error");
}

try {
  throwCustomError();
} catch (error) {
  console.error(`${error.name} caught: ${error.message}`);
}

// Task 5
function validateInput(input) {
  if (!input) {
    throw new CustomError("Input cannot be empty");
  }
  return true;
}

try {
  console.log(validateInput("Valid input"));
  console.log(validateInput(""));
} catch (error) {
  console.error(`${error.name} caught: ${error.message}`);
}

// Activity 4: Error Handling in Promises

// Task 6
let randomPromise = new Promise((resolve, reject) => {
  let isSuccess = Math.random() > 0.5;
  setTimeout(() => {
    if (isSuccess) {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise rejected with an error");
    }
  }, 1000);
});

randomPromise.catch((error) => {
  console.error("Error caught in promise:", error);
});

// Task 7
async function handlePromise() {
  try {
    let result = await randomPromise;
    console.log(result);
  } catch (error) {
    console.error("Error caught in async function:", error);
  }
}

handlePromise();

// Activity 5: Graceful Error Handling in Fetch

// Task 8
fetch("https://invalidurl.com")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });

// Task 9
async function fetchDataWithErrorHandling() {
  try {
    let response = await fetch("https://invalidurl.com");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error caught in async function:", error.message);
  }
}

fetchDataWithErrorHandling();

// Feature Request Scripts

// 1. Basic Error Handling Script
function basicErrorHandling() {
  try {
    throw new Error("Intentional basic error");
  } catch (error) {
    console.error("Basic error caught:", error.message);
  } finally {
    console.log("Basic error handling finally block executed");
  }
}

basicErrorHandling();

// 2. Custom Error Script
class AnotherCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "AnotherCustomError";
  }
}

function throwAnotherCustomError() {
  throw new AnotherCustomError("Another custom error thrown");
}

try {
  throwAnotherCustomError();
} catch (error) {
  console.error(`${error.name} caught: ${error.message}`);
}

// 3. Promise Error Handling Script
let anotherRandomPromise = new Promise((resolve, reject) => {
  let isSuccess = Math.random() > 0.5;
  setTimeout(() => {
    if (isSuccess) {
      resolve("Another promise resolved successfully");
    } else {
      reject("Another promise rejected with an error");
    }
  }, 1000);
});

anotherRandomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Another promise error caught:", error);
  });

async function handleAnotherPromise() {
  try {
    let result = await anotherRandomPromise;
    console.log(result);
  } catch (error) {
    console.error("Another async function error caught:", error);
  }
}

handleAnotherPromise();

// 4. Fetch Error Handling Script
async function fetchWithErrorHandling() {
  try {
    let response = await fetch("https://invalidurl.com");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error caught:", error.message);
  }
}

fetchWithErrorHandling();
