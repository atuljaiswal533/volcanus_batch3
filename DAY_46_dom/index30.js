// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.





// Define a function named test50 that takes two parameters, x and y
function test50(x, y) {
    // Return true if x is equal to 50 or y is equal to 50 or the sum of x and y is equal to 50; otherwise, return false
    return ((x == 50 || y == 50) || (x + y == 50));
  }
  
  // Log the result of calling the test50 function with the arguments 50 and 50 to the console
  console.log(test50(50, 50));
  
  // Log the result of calling the test50 function with the arguments 20 and 50 to the console
  console.log(test50(20, 50));
  
  // Log the result of calling the test50 function with the arguments 20 and 20 to the console
  console.log(test50(20, 20));
  
  // Log the result of calling the test50 function with the arguments 20 and 30 to the console
  console.log(test50(20, 30));
  