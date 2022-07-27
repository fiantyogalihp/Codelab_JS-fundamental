console.log("Selamat datang!");
setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?");

//----------------------------------------------------------------

/** // * example 
  const orderCoffee = () => {
  let coffee = null;
  console.log("Sedang membuat kopi, silakan tunggu...");
  setTimeout(() => {
    coffee = "Kopi sudah jadi!";
  }, 3000);
  return coffee;
};

const coffee = orderCoffee();
console.log(coffee);
*/
/* output
Sedang membuat kopi, silakan tunggu...
null
*/

// ? bagaimana cara fix nya?
// * tambahkan callback di saat pemanggilan data yang dibawa oleh asynchronous program

const orderCoffee = (callback) => {
  // * tambahkan parameter callback
  let coffee = null;
  console.log("Sedang membuat kopi, silakan tunggu...");
  setTimeout(() => {
    coffee = "Kopi sudah jadi!";
    callback(coffee);
  }, 3000);
  // return coffee; // *  return pada function orderCoffee dihilangkan
};

// const coffee = orderCoffee();
// console.log(coffee);
// * ubah pemanggilan ke:
orderCoffee((coffee) => {
  console.log(coffee);
});
