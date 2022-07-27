// * #array
const person = ["Rizki", 18, "programming", true, 4.00];

// ? cara menginisialisasi data array

// ? mengeluarkan data terakhir dari array => pop()
// ? menambahkan data terakhir dari array => push()
person.pop();
console.log(person);

person.push(3.22);
console.log(person);

// ? mengeluarkan data awal dari array => shift()
// ? menambahkan data awal dari array => unshift()
person.shift();
console.log(person);

person.unshift("Galih");
console.log(person);

// ? menghapus data dari array => splice()
// ! jangan menggunakan method 'delete()' karena akan hanya mnghapus data pada index yang ditentukan, lalu data pada index tersebut dibiarkan kosong
console.log(person.splice(2));

// ! carefully!
/* 
person.pop();
console.log(person); 

// ! tidak sama dengan

console.log(person.pop()); 
*/
