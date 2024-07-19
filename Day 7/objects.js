// Day 7: Objects

// Activity 1: Object Creation and Access
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
console.log(book);

console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods
book.getDetails = function () {
  return `${this.title} by ${this.author}`;
};
console.log(book.getDetails());

book.updateYear = function (year) {
  this.year = year;
};
book.updateYear(2023);
console.log(book);

// Activity 3: Nested Objects
let library = {
  name: "City Library",
  books: [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  ],
};
console.log(library);

console.log(library.name);
library.books.forEach((book) => console.log(book.title));

// Activity 4: The this Keyword
book.getDetailsWithYear = function () {
  return `${this.title} (${this.year})`;
};
console.log(book.getDetailsWithYear());

// Activity 5: Object Iteration
for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}

console.log(Object.keys(book));
console.log(Object.values(book));

// Feature Request Scripts

// 1. Book Object Script
let bookFeature = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951,
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },
  updateYear: function (year) {
    this.year = year;
  },
};
console.log(bookFeature);
console.log(bookFeature.getDetails());
bookFeature.updateYear(2024);
console.log(bookFeature);

// 2. Library Object Script
let libraryFeature = {
  name: "Downtown Library",
  books: [
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ],
  getLibraryDetails: function () {
    return `${this.name} contains ${this.books.length} books.`;
  },
};
console.log(libraryFeature);
console.log(libraryFeature.getLibraryDetails());
libraryFeature.books.forEach((book) => console.log(book.title));

// 3. Object Iteration Script
let objectIteration = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
};
for (let key in objectIteration) {
  console.log(`${key}: ${objectIteration[key]}`);
}
console.log(Object.keys(objectIteration));
console.log(Object.values(objectIteration));
