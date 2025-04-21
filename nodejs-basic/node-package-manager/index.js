// Pasang package lodash pada proyek nodejs-basic.
// Gunakan package lodash pada TODO sehingga index.js dapat dieksekusi dengan baik.

const _ = require("lodash"); // Import lodash
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEvenArray);
console.log("Odd numbers: ", myOddEvenArray[0]); // Fix the console log to display odd numbers
console.log("Even numbers: ", myOddEvenArray[1]); // Add a log for even numbers
