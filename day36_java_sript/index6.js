// Function to add three numbers
function addNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

// Function to divide the result by another number
function divideResult(result, divisor) {
    if (divisor === 0) {
        return "Cannot divide by zero!";
    }
    return result / divisor;
}

// Example usage
var num1 = 10;
var num2 = 5;
var num3 = 3;
var divisor = 2;

var sum = addNumbers(num1, num2, num3);
var result = divideResult(sum, divisor);
console.log("Result:", result);
