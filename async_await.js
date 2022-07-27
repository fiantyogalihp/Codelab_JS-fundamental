import {
  brewCoffee,
  checkAvailability,
  checkStock,
  state,
} from "./promise/chaining_promises";
import { boilWater, grindCoffeeBeans } from "./promise/promise_all";

// * #Async-await
const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Kopi didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};
/** // ! kita bisa menggunakan method seperti ini untuk mendapatkan nilai promise, tetapi terlalu panjang
  function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
}

makeCoffee();

  output
Kopi didapatkan!
*/

/** // * jika kita tidak menggunakan output nya akan berbentuk object 
  function makeCoffee() {
      const coffee = getCoffee();
    console.log(coffee);
  }
  
  makeCoffee();

    output
  Promise { <pending> }
*/

// async function makeCoffee() {
//   const coffee = await getCoffee();
//   console.log(coffee);
// }

// * --------------------------------------------------------------------------
// * lalu kita akan menambahkan #Handle onRejected using async-await
// async function makeCoffee() {
//   try {
//     const coffee = await getCoffee();
//     console.log(coffee);
//   } catch (rejectedReason) {
//     console.log(`${rejectedReason.message}`);
//   }
// }

// * --------------------------------------------------------------------------
// * kemudian kita akan menambahkan #Chaining Promise using async-await
async function makeEspresso() {
  try {
    await checkAvailability();
    await checkStock();
    // * Terakhir untuk menjalankan beberapa promise sekaligus secara bersamaan dengan Promise.all, kita bisa menuliskannya seperti ini:
    await Promise.all([boilWater(), grindCoffeeBeans()]);
    const coffee = await brewCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason.message);
  }
}

makeEspresso();

/* output
Membuatkan kopi Anda...
Kopi sudah siap!
*/

// * Tugas akhir
/**
 * Ini adalah program untuk mendapatkan nama user dari internet.
 * Terdapat dua fungsi yang sudah dibuat, berikut penjelasanya:
 *   - fetchingUserFromInternet:
 *     - fungsi ini digunakan untuk mendapatkan data user seolah-olah dari internet.
 *     - fungsi ini menerima dua argumen yakni callback, dan isOffline.
 *     - Argumen callback membawa dua nilai yakni error dan user:
 *       - error: NetworkError akan dibawa oleh callback bila isOffline bernilai true.
 *       - user: data user akan dibawa oleh callback bila isOffline bernilai false.
 *   - gettingUserName:
 *      - fungsi ini memanggil fungsi fetchingUserFromInternet dengan nilai isOffline: false untuk mendapatkan data user name dari internet.
 *      - fungsi ini harus mengembalikan nilai user.name, namun sulit karena menggunakan pola callback.
 *      - Maka dari itu, ubahlah fetchingUserFromInternet dari callback menjadi promise
 *      - Dengan begitu, Anda bisa memanfaatkan .then atau async/await untuk mendapatkan user.name.
 *
 * TODO: 1
 * - Ubahlah fungsi fetchingUserFromInternet dengan memanfaatkan Promise. Anda bisa menghapus implementasi callback.
 *
 * TODO: 2
 * - Ubahlah cara mengonsumsi fungsi fetchingUserFromInternet dari callback ke Promise.
 * - Tips:
 *   - Agar penulisan kode lebih bersih dan mudah dibaca, coba manfaatkan async/await
 *
 *
 * Notes:
 * - Jangan ubah struktur atau nilai dari objek user yang dibawa oleh callback sebelumnya.
 * - Tetap gunakan NetworkError untuk membawa nilai error pada Promise
 */

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

// TODO: 1
const fetchingUserFromInternet = (isOffline) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isOffline) {
        resolve({ name: "John", age: 18 });
      } else {
        reject(new NetworkError("Gagal mendapatkan data dari internet"));
      }
    }, 500);
  });
};

// TODO: 2
const gettingUserName = async () => {
  try {
    const user = await fetchingUserFromInternet(false);
    return user.name;
  } catch (error) {
    return error.message;
  }
};

// * callback
gettingUserName().then((user) => {
  console.log(user);
});

/**
 * Abaikan kode di bawah ini
 */

export { fetchingUserFromInternet, gettingUserName, NetworkError };
