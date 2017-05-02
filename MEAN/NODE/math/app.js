var mylib = require("./mathlib");
var math = new mylib();

num1 = 1;
num2 = 35;

console.log("Sum of " + num1 + " and " + num2 + " is: ", math.add(num1, num2));
console.log("Product of " + num1 + " and " + num2 + " is: ", math.multiply(num1, num2));
console.log("Square of " + num2 + " is: ", math.square(num2));
console.log("Random number between " + num1 + " and " + num2 + ": ", math.random(num1, num2));