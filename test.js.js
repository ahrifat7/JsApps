// test.js

function greet(name) {
  return `Hello, ${name}! Welcome to GitHub.`;
}

function add(a, b) {
  return a + b;
}

function isEven(number) {
  return number % 2 === 0;
}

// Test the functions
console.log(greet("World"));
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`4 is even: ${isEven(4)}`);
console.log(`7 is even: ${isEven(7)}`);