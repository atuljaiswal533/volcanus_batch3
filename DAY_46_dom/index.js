// Original car object
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};

// Additional properties
const additionalProperties = {
    color: 'Blue',
    mileage: 20000
};

// Create a new object with the original properties and additional properties using the spread operator
const newCar = { ...car, ...additionalProperties };

console.log(newCar);
