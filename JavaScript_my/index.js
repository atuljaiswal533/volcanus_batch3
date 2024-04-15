const square = function (number) {
	return number * number;
};
const x = square(4); // x gets the value 16
console.log(x);
//This example explains the usage of the Function expression.



// //Arrow Function:
// It is one of the most used and efficient methods to create a function in JavaScript because of its comparatively easy implementation. It is a simplified as well as a more compact version of a regular or normal function expression or syntax.

// Syntax://

//This example describes the usage of the Arrow function.



const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
	return s.length;
});

console.log("Normal way ", a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]

// functions calling 

function welcomeMsg(name) {
	return ("Hello " + name + " welcome to GeeksforGeeks");

}

// creating a variable
let nameVal = "Admin";

// calling the function
console.log(welcomeMsg(nameVal));

