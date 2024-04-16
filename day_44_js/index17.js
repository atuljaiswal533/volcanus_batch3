
// Actions that can be performed on objects are what we term JavaScript methods.
// The objects can also be called without using parenthesis.
// This refers to the owner object in a method.
// Example: The following example shows the method that is invoked with an object called employee.




let employee = {
	empname: "Rahul",
	department: "sales",
	details: function () {
		return this.empname +
			" works with Department " +
			this.department;
	}
};
console.log(employee.details());

// let person = Person ()
// Example of Function Expression: This example shows the function expression

// Function declaration
function person() { }
let person = person()

// Printing the return value
// of the person() function
console.log(person)

function person1(name) {
	return name;
}

let person1 = person1("Aayush")

// Printing the value of person1
console.log(person1)

