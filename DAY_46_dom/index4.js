function createPyramid(rows) {
    let pyramid = '';
    for (let i = 1; i <= rows; i++) {
        // Add spaces before the stars
        for (let j = 1; j <= rows - i; j++) {
            pyramid += ' ';
        }
        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            pyramid += '*';
        }
        // Move to the next line
        pyramid += '\n';
    }
    return pyramid;
}

// Define the number of rows for the pyramid
const numberOfRows = 5;

// Call the function to create the pyramid
const pyramid = createPyramid(numberOfRows);

// Output the pyramid
console.log(pyramid);
