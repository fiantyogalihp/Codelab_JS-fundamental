// const coffee = new Promise(); // ! Error Karena Promise tidak menerima method executor function
// * Di dalam constructor Promise, kita perlu menetapkan resolver function atau bisa disebut executor function. Fungsi tersebut akan dijalankan secara otomatis ketika constructor Promise dipanggil.

const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin kopi tidak bisa digunakan");
  }
};

const makeCoffee = () => {
  return new Promise(executorFunction);
};
const coffeePromise = makeCoffee();
console.log(coffeePromise);

/* output
Promise { 'Kopi berhasil dibuat' }
*/

//----------------------------------------------------------------
// * 1. kita membuat object yg menampung stock
const stock = {
  coffeeBeans: 250,
  water: 1000,
};

// * 2. berikan validate penecekan untuk apakah promise resolve / reject | [fungsi yang mengembalikan objek Promise.]
const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 16 && stock.water >= 250) {
      resolve("Stok cukup. Bisa membuat kopi");
    } else {
      reject("Stok tidak cukup");
    }
  });
};

// * 3. buat function yang menangani kasus dari resolve dan reject
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

// * 4. Terakhir panggil method .then() pada checkStock() untuk menangani hasil yang dikembalikan dari promise.
// checkStock().then(handleSuccess, handleFailure); // * code ini tidak rapi
// * kita harus menerapkan prinsip separation of concerns agar kode yg kita buat mudah untuk menemukan suatu masalah

// * gunakan kode seperti ini
checkStock().then(handleSuccess).catch(handleFailure);
