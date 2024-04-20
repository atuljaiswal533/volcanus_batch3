const inr = 1;
const dollar = 83.34;
const mexican = 69.30;
const french = 14.36;
const chinese = 52.25;

let fromCurrency = prompt("Enter the currency you want to convert from (1: Dollar, 2: Mexican Peso, 3: French Franc, 4: Chinese Yuan):");
let toCurrency = prompt("Enter the currency you want to convert to (1: Dollar, 2: Mexican Peso, 3: French Franc, 4: Chinese Yuan):");
let amount = parseFloat(prompt("Enter the amount you want to convert:"));

let result;

switch (fromCurrency) {
    case '1':
        switch (toCurrency) {
            case '1':
                result = amount * inr;
                break;
            case '2':
                result = amount * (mexican / dollar);
                break;
            case '3':
                result = amount * (french / dollar);
                break;
            case '4':
                result = amount * (chinese / dollar);
                break;
            default:
                console.log("Invalid input for 'toCurrency'.");
        }
        break;
    case '2':
        // similar cases for other currencies if needed
        break;
    case '3':
        // similar cases for other currencies if needed
        break;
    case '4':
        // similar cases for other currencies if needed
        break;
    default:
        console.log("Invalid input for 'fromCurrency'.");
}

if (result !== undefined) {
    console.log(`Result: ${result.toFixed(2)}`);
}
