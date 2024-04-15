
// parseInt usesm

// Base 10
a = parseInt("100", 10);
console.log('parseInt("100",10) = ' +
	a);

// Base 8
b = parseInt("8", 8);
console.log('parseInt("8",8) = ' +
	b);

// Base 8
c = parseInt("15", 8);
console.log('parseInt("15",8) = ' +
	c);

// Base 16
d = parseInt("16", 16);
console.log('parseInt("16",16) = ' +
	d);

// Leading and trailing spaces are ignored
// in parseInt() function
e = parseInt(" 100 ");
console.log('parseInt(" 100 ") = ' +
	e);

// Base 16(hexadecimal)
f = parseInt("0x16");
console.log('parseInt("0x16") = ' +
	f);

    // This example describes the Map() method to create the map object that contains the multiple [key, value] pair to the map & displays the element that is associated with the specific key using the Map.get() method.



    // Creating a map object
let myMap = new Map();

// Adding [key, value] pair to the map
myMap.set(0, 'GeeksforGeeks');
myMap.set(1, 'is an online portal');
myMap.set(2, 'for geeks');

// Displaying the elements which are 
//associated with the keys '0', '2' 
// and '4' using Map.get() method
console.log(myMap.get(0));
console.log(myMap.get(2));
console.log(myMap.get(4));

