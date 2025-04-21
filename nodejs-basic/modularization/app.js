// const coffee = require("./coffee.js");

// console.log(coffee);

/**
 * Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul.
 */

const { firstName, lastName, age } = require("./coffee.js");

console.log(firstName);
console.log(lastName);
console.log(age);
