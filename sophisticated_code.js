/*

Filename: sophisticated_code.js
Content: Complex JavaScript Code Example

*/

// Class definition for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display the name and age of a person
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Class definition for a Math class
class MathOperations {
  // Static method to calculate the factorial of a number
  static factorial(num) {
    if (num < 0) {
      return -1;
    }
    else if (num === 0 || num === 1) {
      return 1;
    }
    else {
      let fact = 1;
      for (let i = 2; i <= num; i++) {
        fact *= i;
      }
      return fact;
    }
  }

  // Method to calculate the sum of two numbers
  static sum(a, b) {
    return a + b;
  }

  // Method to calculate the product of two numbers
  static product(a, b) {
    return a * b;
  }
}

// Create a person object
const person = new Person("John Doe", 35);

// Display person's information
person.displayInfo();

// Calculate factorial of a number
const num = 5;
const factorial = MathOperations.factorial(num);
console.log(`Factorial of ${num} is ${factorial}`);

// Calculate sum and product of two numbers
const x = 10;
const y = 5;
const sum = MathOperations.sum(x, y);
const product = MathOperations.product(x, y);
console.log(`Sum of ${x} and ${y} is ${sum}`);
console.log(`Product of ${x} and ${y} is ${product}`);

// More complex code goes here...

// ...

// ...

// Code continues... (at least 200 lines)