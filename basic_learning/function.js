// * #Function Decalration
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    if (!width < 0 || !height < 0) {
      return null;
    }
    throw {
      message: "Invalid width or height",
    };
  }
  return width * height;
}

// * #Expression Function
const getSquareArea = function (sideSquare) {
  return sideSquare * sideSquare;
};

// * #Arrow Function
/** 
 // * Selain perbedaan sintaksis, terdapat perbedaan perilaku antara 'arrow function' dan 'regular function'. 'Regular function' dapat berupa 'function declaration' dan 'function expression'. Namun, 'arrow function' hanya berupa 'expression function' saja. Itu sebabnya 'arrow function' memiliki nama lengkap “arrow function expression”.
 */

const getTriangleArea = (triangleBase, height) => {
  let formula = 1 / 2;
  const result = formula * triangleBase * height;

  if (isNaN(triangleBase) || isNaN(height)) {
    if (!triangleBase < 0 || !height < 0) {
      return null;
    }
    throw {
      message: "Invalid triangle base or height",
    };
  }
  return result;
};

console.log(getTriangleArea(8, 12));

/** 
  // * Parameter dari fungsi dapat berupa tipe data apa pun, mulai dari string, number, object, bahkan fungsi lain.

  // * Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya. Contohnya seperti berikut: 
  */

const user = {
  id: 24,
  displayName: "kren",
  fullName: "Kylo Ren",
};

const aliasName = ({ displayName, fullName }) => {
  console.log(`${displayName} is ${fullName}`); // * penggunaan log yang benar
  // console.log('${displayName} is ${fullName}'); // ! penggunaan log yang salah
}; // ? beda penggunaamn nya terletak pada tanda baca `` bukan ""/'', jika ingin mendeklarasikan suatu object value

aliasName(user);

/* output
kren is Kylo Ren
*/

// * kita juga dapat memberi default value pada parameter
const kucing = (kakiKucing = 4) => {
  console.log(`kaki Kucing berjumlah ${kakiKucing}`);
};

kucing(4);

// * #Rest Parameter

/** 
 // * Rest parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.



 // ? Namun bagaimana jika kita harus menggunakan banyak parameter ?
 // * Salah satu cara yang bisa digunakan agar code tetap clean adalah menggunakan rest parameter.

 // * Sebagai contoh adalah fungsi yang menjumlahkan seluruh nilai argumen seperti berikut:
*/

const sum = (...numbers) => {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
};
console.log(sum(1, 2, 3, 4, 5));

// * Karena semua argumen akan dijadikan ke dalam satu array maka kita bisa menambah argument sebanyak mungkin.

// * Yang perlu diperhatikan adalah rest parameter harus menjadi parameter yang terakhir.
// ! Jika kita menaruh rest parameter selain di bagian akhir maka kita akan mendapatkan error.

// ----------------------------------------------------------------

// ? Conclusion : apa perbedaan declaration function dengan expression function? yaitu karena declaration function bisa di tempatkan setelah declaration function dipanggil, jika memakai expression function, hal seperti ini akan error, contoh

laba_laba(8); // * memanggil function

// * declaration function
function laba_laba(kaki = 8) {
  return kaki.toString;
}
// ? Hal ini disebut dengan Function Hoisting, yaitu sebuah mekanisme dimana JavaScript Engine akan memindahkan semua function declaration ke bagian atas source code sebelum dieksekusi.

// * kelebihan dari expression function, yaitu bisa menyederhanakan function dengan simple

// * dari ini
const numbers1 = [1, 2, 3, 4, 5];
function doubleIt(number) {
  return number * 2;
}
const result = numbers1.map(doubleIt);

// * menjadi

// * ini
const numbers = [1, 2, 3, 4, 5];

const result1 = numbers.map((number) => number * 2);

// ----------------------------------------------------------------
