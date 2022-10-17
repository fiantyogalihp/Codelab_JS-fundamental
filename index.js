// Object.getOwnPropertyNames(global);

const initialMemoryUsage = process.memoryUsage().heapUsed; // TODO 1
const yourName = process.argv[2]; // TODO 2
const environment = process.env.NODE_ENV; // TODO 3

for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed; // TODO 4
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);

const coffee = require("./lib/coffee");

console.log(coffee);

const moment = require("moment");

const date = moment().format("MMM Do YY");
console.log(date);

//----------------------------------------------------------------
const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on("coffee-order", makeCoffee);
// myEventEmitter.on("coffee-order", makeBill);

myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });

/**
 * output:
 * Kopi Tubruk telah dibuat!
 */
