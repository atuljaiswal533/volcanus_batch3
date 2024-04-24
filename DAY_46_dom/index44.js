function sum(a, b, operation) {
    switch(operation) {
        case 'add':
            console.log(`"sum" of ${a} and ${b} = ${a + b}`);
            break;
        case 'sub':
            console.log(`"difference" of ${a} and ${b} = ${a - b}`);
            break;
        case 'mul':
            console.log(`"product" of ${a} and ${b} = ${a * b}`);
            break;
        case 'div':
            console.log(`"division" of ${a} by ${b} = ${a / b}`);
            break;
        default:
            console.log('Invalid operation');
    }
}

let userOperation = prompt("Enter the operation: add, sub, mul, div");
let userChoice1 = parseInt(prompt("Enter the first number"));
let userChoice2 = parseInt(prompt("Enter the second number"));

switch(userOperation) {
    case 'add':
    case 'sub':
    case 'mul':
    case 'div':
        sum(userChoice1, userChoice2, userOperation);
        break;
    default:
        console.log('Invalid operation');
}
