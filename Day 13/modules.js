// Day 13: Modules

// Activity 1: Creating and Exporting Modules

// Task 1
// create a file named 'math.js'
export function add(a, b) {
    return a + b;
}

// create a file named 'main.js'
import { add } from './math.js';

console.log(add(5, 3)); // Output: 8

// Task 2
// create a file named 'person.js'
export const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// create a file named 'main.js'
import { person } from './person.js';

console.log(person.name); // Output: John Doe
person.greet(); // Output: Hello, my name is John Doe

// Activity 2: Named and Default Exports

// Task 3
// create a file named 'utils.js'
export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

// create a file named 'main.js'
import { multiply, divide } from './utils.js';

console.log(multiply(6, 3)); // Output: 18
console.log(divide(6, 3)); // Output: 2

// Task 4
// create a file named 'subtract.js'
export default function subtract(a, b) {
    return a - b;
}

// create a file named 'main.js'
import subtract from './subtract.js';

console.log(subtract(10, 4)); // Output: 6

// Activity 3: Importing Entire Modules

// Task 5
// create a file named 'constants.js'
export const PI = 3.14;
export const E = 2.71;
export function add(a, b) {
    return a + b;
}

// create a file named 'main.js'
import * as constants from './constants.js';

console.log(constants.PI); // Output: 3.14
console.log(constants.add(3, 5)); // Output: 8

// Activity 4: Using Third-Party Modules

// Task 6
// npm install lodash
import _ from 'lodash';

console.log(_.capitalize('hello world')); // Output: Hello world

// Task 7
// npm install axios
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error fetching data:', error));

// Activity 5: Module Bundling (Optional)

// Task 8
// Assuming you have a webpack.config.js set up
// Run the following command in your terminal:
// npx webpack

// Feature Request Scripts

// 1. Basic Module Script
// create a file named 'math.js'
export function add(a, b) {
    return a + b;
}

// create a file named 'main.js'
import { add } from './math.js';

console.log(add(5, 3)); // Output: 8

// 2. Named and Default Exports Script
// create a file named 'utils.js'
export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

export default function subtract(a, b) {
    return a - b;
}

// create a file named 'main.js'
import subtract, { multiply, divide } from './utils.js';

console.log(multiply(6, 3)); // Output: 18
console.log(divide(6, 3)); // Output: 2
console.log(subtract(10, 4)); // Output: 6

// 3. Third-Party Module Script
// npm install lodash axios
import _ from 'lodash';
import axios from 'axios';

console.log(_.capitalize('hello world')); // Output: Hello world

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error fetching data:', error));