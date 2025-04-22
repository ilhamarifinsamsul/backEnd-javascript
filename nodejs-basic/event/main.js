// Learn event
// eventEmitter

// const { eventEmitter } = require("events");

// const myEvenEmitter = new eventEmitter();

// // fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffee = ({ name }) => {
//   console.log(`Kopi ${name} sudah siap`);
// };

// // mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEvenEmitter.on("coffee-order", makeCoffee);
// myEvenEmitter.emit("coffee-order", { name: "Arabica" });

// const { EventEmitter } = require("events");

// const myEventEmitter = new EventEmitter();

// const makeCoffee = ({ name }) => {
//   console.log(`Kopi ${name} sudah siap!`);
// };

// myEventEmitter.on("coffee-order", makeCoffee);
// myEventEmitter.emit("coffee-order", { name: "Arabica" });

// Fungsi on lebih dari satu event
// const { EventEmitter } = require("events");

// const myEventEmitter = new EventEmitter();

// const makeCoffee = ({ name }) => {
//   console.log(`Kopi ${name} telah dibuat!`);
// };

// const makeBill = ({ price }) => {
//   console.log(`Tagihan anda sebesar ${price} telah dibuat!`);
// };

// myEventEmitter.on("coffee-order", makeCoffee);
// myEventEmitter.on("coffee-order", makeBill);

// myEventEmitter.emit("coffee-order", { name: "Arabica", price: 20000 });
// myEventEmitter.emit("coffee-order", { name: "Robusta", price: 25000 });

// membuat satu fungsi khusus untuk menangani event. fungsi ini memiliki nama ‘handler’ atau ‘listener’ pada akhir penamaanya.

const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} sudah siap!`);
};

const makeBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

const onCoffeeOrderListener = ({ name, price }) => {
  makeCoffee({ name });
  makeBill({ price });
};

myEventEmitter.on("coffee-order", onCoffeeOrderListener);

myEventEmitter.emit("coffee-order", { name: "Arabica", price: 20000 });
