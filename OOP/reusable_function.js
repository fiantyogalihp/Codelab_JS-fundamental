// * Array Filter
const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);

console.log(truthyArray);

// * Contoh penggunaan Array reduce, yaitu untuk mengetahui jumlah total nilai siswa
const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const totalScore = students.reduce((acc, students) => acc + students.score, 0);

// * Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.

console.log(totalScore); // output 313

// * Array Some, mengembalikan nilai boolean
// * Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka genap.
const array = [1, 2, 3, 4, 5];
const even = array.some((element) => element % 2 === 0);

console.log(even);

// * Array find, yaitu find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array.

const findJames = students.find((student) => student.name === "James");
console.log(findJames);

// * Array Sort, yaitu  array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

// ! Contoh diatas adalah bentuk pengurutan sesuai type data string A-Z;0-9
// *  Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri.

const compareNumber = (a, b) => {
  return a - b;
};

const sorting = array1.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/

// * #Array every, merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah nilai Boolean.

// ? Sebagai contoh, kita akan mengecek apakah seorang siswa telah lulus semua uji materi:
const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed);

// * perbedaan dengan Array Some adalah array every mengecheck semua element dalam array, sedangkan array some tidak mengecheck semua element dalam array
// * di array some jika ada salah satu element ada yang bersifat false, maka output nya akan bernilai true
// * sedangkan pada array every jika salah satu element ada yang bersifat false, maka output nya akan bernilai false

/**
output
true
**/

// * #array ForeEach
// ! Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator 'break' atau 'continue' pada proses perulangan (Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku ketika pada fungsi map dan filter.

const names = ["Harry", "Ron", "Jeff", "Thomas"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Jeff") continue; // Bisa!

  console.log(`Hello, ${names[i]}!`);
}

names.forEach((name) => {
  if (name === "Jeff")
    // continue;
    // ! Error!
    console.log(`Hello, ${name}`);
});

const books = [
  { title: "The Da Vinci Code", author: "Dan Brown", sales: 5094805 },
  { title: "The Ghost", author: "Robert Harris", sales: 807311 },
  { title: "White Teeth", author: "Zadie Smith", sales: 815586 },
  { title: "Fifty Shades of Grey", author: "E. L. James", sales: 3758936 },
  { title: "Jamie's Italy", author: "Jamie Oliver", sales: 906968 },
  { title: "I Can Make You Thin", author: "Paul McKenna", sales: 905086 },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K Rowling",
    sales: 4475152,
  },
];

export const greatAuthors = books
  .filter((book) => Boolean(book.sales > 1000000))
  .map((filter) => {
    return `${filter.author} adalah penulis buku ${filter.title} yang sangat hebat!`;
  });

/** ----------------------------------------------
 * 
 // export const greatAuthors = [];

// ? filterisasi dan menampilkan text custom dengan map yang telah difilterisasi
// books
//   .filter((book) => Boolean(book.sales > 1000000))
//   .map((filter) => {
//     return greatAuthors.push(
//       `${filter.author} adalah penulis buku ${filter.title} yang sangat hebat!`
//     );
//   });
 *
 *  ----------------------------------------------
*/
