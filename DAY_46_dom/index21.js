// JavaScript program for 
// simple mathematical calculations 

// Add two numbers 
function add(num1, num2) { 
	return num1 + num2; 
} 
// Function for subtraction 
function subtract(num1, num2) { 
	return num1 - num2; 
} 

// For multiplying of two numbers 
function multiply(num1, num2) { 
	return num1 * num2; 
} 
// Function for division of 
// two numbers 
function divide(num1, num2) { 
if(num2 === 0) return undefined; 
	return num1 / num2; 
} 
// Creating variable 
// for operation 
let operation = '+'; 

// Creating variables for 
// num1 and num2 
let num1 = 4; 
let num2 = 5; 

// Creating result variable 
let result; 

// Switch case statement 
switch (operation) { 
	case "+": 
		result = add(num1, num2); 
		break; 
	case "-": 
		result = subtract(num1, num2); 
		break; 
	case "*": 
		result = multiply(num1, num2); 
		break; 
	case "/": 
		result = divide(num1, num2); 
		break; 
	default: 
		result = "Invalid operation"; 
} 
// Printing the final result 
console.log("The Result of this operation is : " + result);
