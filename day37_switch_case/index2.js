// Function to perform addition
function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

// Function to perform division
function divide(num1, num2, num3) {
    if (num2 === 0 || num3 === 0) {
        return "Cannot divide by zero!";
    } else {
        return num1 / num2 / num3;
    }
}

// Main function to take user input and perform operations
function calculate() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var operation = prompt("Choose operation: 'add' for addition, 'divide' for division:");

    var result;
    switch(operation) {
        case 'add':
            result = add(num1, num2, num3);
            break;
        case 'divide':
            result = divide(num1, num2, num3);
            break;
        default:
            result = "Invalid operation!";
            break;
    }

    alert("Result: " + result);
}

// Calling the main function
calculate();
