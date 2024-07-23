// Day 11: Promises and Async/Await

// Activity 1: Understanding Promises

// Task 1
let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promise1.then((message) => {
  console.log(message);
});

// Task 2
let promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Promise rejected after 2 seconds");
  }, 2000);
});

promise2.catch((error) => {
  console.error(error);
});

// Activity 2: Chaining Promises

// Task 3
let promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data fetched from server 1");
  }, 1000);
});

promise3
  .then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched from server 2");
      }, 1000);
    });
  })
  .then((message) => {
    console.log(message);
  });

// Activity 3: Using Async/Await

// Task 4
async function asyncFunction1() {
  let result = await promise1;
  console.log(result);
}

asyncFunction1();

// Task 5
async function asyncFunction2() {
  try {
    await promise2;
  } catch (error) {
    console.error(error);
  }
}

asyncFunction2();

// Activity 4: Fetching Data from an API

// Task 6
fetch("https://api.publicapis.org/entries")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Task 7
async function fetchData() {
  try {
    let response = await fetch("https://api.publicapis.org/entries");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

// Activity 5: Concurrent Promises

// Task 8
let promise4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 4 resolved");
  }, 1500);
});

let promise5 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 5 resolved");
  }, 1000);
});

Promise.all([promise4, promise5]).then((messages) => {
  console.log(messages);
});

// Task 9
Promise.race([promise4, promise5]).then((message) => {
  console.log(message);
});

// Feature Request Scripts

// 1. Promise Creation Script
let creationPromise = new Promise((resolve, reject) => {
  let success = true; // Simulating success or failure
  if (success) {
    resolve("Promise successfully resolved!");
  } else {
    reject("Promise rejected with an error.");
  }
});

creationPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// 2. Promise Chaining Script
let chainPromise = new Promise((resolve) => {
  resolve("First promise resolved.");
});

chainPromise
  .then((message) => {
    console.log(message);
    return "Second promise resolved.";
  })
  .then((message) => {
    console.log(message);
    return "Third promise resolved.";
  })
  .then((message) => {
    console.log(message);
  });

// 3. Async/Await Script
async function asyncAwaitScript() {
  try {
    let result = await creationPromise;
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

asyncAwaitScript();

// 4. API Fetch Script
async function apiFetchScript() {
  try {
    let response = await fetch("https://api.publicapis.org/entries");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

apiFetchScript();

// 5. Concurrent Promises Script
let concurrentPromise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Concurrent promise 1 resolved.");
  }, 2000);
});

let concurrentPromise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Concurrent promise 2 resolved.");
  }, 1000);
});

Promise.all([concurrentPromise1, concurrentPromise2]).then((results) => {
  console.log("Promise.all results:", results);
});

Promise.race([concurrentPromise1, concurrentPromise2]).then((result) => {
  console.log("Promise.race result:", result);
});
