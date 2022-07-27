import {
  brewCoffee,
  checkAvailability,
  checkStock,
  state,
} from "./chaining_promises";

export const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Memanaskan air...");
    setTimeout(() => {
      resolve("Air panas sudah siap!");
    }, 2000);
  });
};

export const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log("Menggiling biji kopi...");
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 1000);
  });
};

// * Function code sebelumnya ada pada file 'chaining_promises.js'
function makeEspresso() {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    // * menggunakan method promise all
    // * menambahkan proses untuk memanaskan air dan menggiling biji kopi.
    .then((value) => {
      console.log(value);
      const promises = [boilWater(), grindCoffeeBeans()];
      return Promise.all(promises);
      // * promise all, menjalankan kode asynchronous secara bersamaan walaupun waktu prosesnya berbeda, waktu menunggu paling lama ialah waktu terlama dalam array yg diterima 'promise.all()'
    })
    .then((value) => {
      console.log(value);
      return brewCoffee();
    })
    .then((value) => {
      console.log(value);
      state.isCoffeeMachineBusy = false;
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
      state.isCoffeeMachineBusy = false;
    });
}

makeEspresso();

/* output
Mesin kopi siap digunakan.
Stok cukup. Bisa membuat kopi.
Memanaskan air...
Menggiling biji kopi...
[ 'Air panas sudah siap!', 'Kopi sudah siap!' ]
Membuatkan kopi Anda...
Kopi sudah siap!
*/
