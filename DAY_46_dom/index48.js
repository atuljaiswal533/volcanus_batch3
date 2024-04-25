// It ignores leading and trailing spaces. 
a = parseFloat(" 100 ") 
console.log('parseFloat(" 100 ") = ' + a); 

// It returns floating point Number until 
// it encounters Not a Number character 
b = parseFloat("2018@geeksforgeeks") 
console.log('parseFloat("2018@geeksforgeeks") = '
	+ b); 

// It returns NaN on Non numeral character 
c = parseFloat("geeksforgeeks@2018") 
console.log('parseFloat("geeksforgeeks@2018") = '
	+ c); 

d = parseFloat("3.14") 
console.log('parseFloat("3.14") = '
	+ d); 

// It returns only first Number it encounters 
e = parseFloat("22 7 2018") 
console.log('parseFloat("22 7 2018") = '
	+ e);
