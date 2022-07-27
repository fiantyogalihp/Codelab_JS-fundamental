/**  // * #Built-in Class
 * 
 * 
// * Dalam JavaScript sendiri terdapat built-in class bawaan, misalnya Date, Object, Array, Math, dan String. Built-in class tersebut dapat digunakan untuk memanipulasi data-data terkait dengan array, perintah matematik, manipulasi karakter, dan manipulasi objek.

// * Date merupakan built-in object bawaan dari bahasa pemrograman JavaScript yang digunakan untuk utilitas terkait tanggal dan waktu. Ini sangat membantu ketika dalam program yang kita buat terdapat penggunaaan dan manipulasi tanggal dan waktu.
*/

const myDate = new Date();
// ? inisialisasi diatas bisa diisi oleh parameter dalam bentuk String, number, dan parameter tanggal dalam bentuk number(7parameter)

const dateString = "january 01, 2021";
const myDate1 = new Date(dateString);
console.log(myDate1);

const dateNumber = 87400000;
const myDate2 = new Date(dateNumber);
console.log(myDate2);

const year = 2021;
const month = 11;
const day = 3;
const myDate3 = new Date(year, month, day);

// *  parameter birthday dapat berupa miliseconds ataupun date string
const myAge = (birthday) => {
  const birtday = new Date(birthday);
  const today = Date.now(); // ? today menghasilkan nilai miliseconds saat ini

  const diff_ms = today - birtday.getTime();
  const diffDate = new Date(diff_ms); // ? menghitung selisih nilai miliseconds hari ini dan tanggal lahir

  return diffDate.getFullYear() - 1970; // ? 1970 adalah representasi 0 dari miliseconds
};

console.log(myAge("2004-07-30")); // * result is your input age date

const listOfContent = [1, 2, "President", {}];
console.log(Array.isArray(listOfContent)); // * result is true

const splitText = "12:20:00".split(":");
console.log(splitText); // * result is [ '12', '20', '00' ]
