
Example: This example shows the use of a function constructor in Javascript.



// Creating the function
function Person(name, age) {
	this.name = name;
	this.age = age;
}

// Calling the function 
let person = new Person("Vikah", 22);

console.log(person.name);
console.log(person.age);
