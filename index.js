import * as greatAuthors from "./OOP/reusable_function.js"; // * all import from destination file
// import { greatAuthors, blabla.. } from "./reusable_function.js"; // * spesific import 1 or 2 import only
import { greatAuthors as authors } from "./OOP/reusable_function.js"; // ? u can using alias in this import
import WhatsApp from "./OOP/inheritance.js"; // * Default Import
import { coffeeStock } from "./export_import.js";
import {
  createUserWithNewLastName,
  user,
} from "./OOP/functional_programming.js";

/** // * Terdapat beberapa perbedaan diantara kedua jenis export ini, antara lain:

 // * 1. Dalam 1 module, hanya boleh ada 1 default export, sedangkan untuk named export jumlahnya boleh lebih dari 1.
 // * 2. Ketika mengimpor hasil named export, kita perlu menyertakan kurung kurawal ( { } ) diantara objek yang diimpor, sedangkan untuk default export tidak perlu.
 */

console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");

// * Import
console.log(greatAuthors.greatAuthors);
console.log(authors);

const WA = new WhatsApp("Fiyuu", "fiantiogalih@gmail.com", false);

WA.sendChats(
  "Hello There I'm Using WhatsApp!",
  "fiantiogalih@gmail.com",
  "Fiyuu"
);

const makeCoffee = (type, milligrams) => {
  return coffeeStock[type] >= milligrams
    ? // ? type disini dimakasudkan untuk value dari type data property nya object coffeeStock
      "Kopi berhasil Dibuat!"
    : "Bijih Kopi habis!";
};

console.log(makeCoffee("robusta", 160));

const newUser = createUserWithNewLastName(user, "pottrer");

console.log(newUser);
