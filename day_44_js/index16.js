
// This JavaScript code defines a `product()` function that returns the product of two numbers. It then calls `product()` using `call()` with `this` as the context (which is typically the global object), passing 20 and 5 as arguments. It logs the result, which is 100.

// Example 2: This example display the use of function calls with arguments.


// let employee = {


let employee = {
	details: function (designation, experience) {
		return this.name
			+ " "
			+ this.id
			+ designation
			+ experience;
	}
}

// Objects declaration
let emp1 = {
	name: "A",
	id: "123",
}
let emp2 = {
	name: "B",
	id: "456",
}
let x = employee.details.call(emp2, " Manager ", "4 years");
console.log(x);
