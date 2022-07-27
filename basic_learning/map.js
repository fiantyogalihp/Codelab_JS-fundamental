// * #Map
const myMap = new Map([
  ['1', '1 is a string key'],
  [2, '2 is a number key'],
  [true, true]
]);
/** 
// ? Array pertama (yang berada di luar) berfungsi untuk menyimpan masing-masing elemen atau pasangan key-value dari Map. Kemudian array di dalamnya, memiliki dua elemen, di mana elemen pertama adalah key dan array keduanya merupakan value. 
*/

console.log(myMap);

console.log(myMap.size); //* jumlah myMap adalah 3 pasangan key-value
console.log(myMap.get(2)); // * mendapatkan data dari Map 

console.log(myMap.set(Symbol('id'), 'id is a Symbol key')); // * menambahkan data ke Map yang tersedia
console.log(myMap.size); //* jumlah myMap bertambah menjadi 4 pasangan key-value

// --------------------------------
const wrongMap = new Map();

worngMap["my_key"] = "my_value";
console.log(wrongMap["my_key"]);
// * data seperti diatas adalah generic object. Ini akan mengakibatkan data tidak tersimpan dalam Map query dan tidak bisa menggunakan fitur dari Map seperti .has atau .delete.
// --------------------------------

// * #Set (Map)
/** 
// * Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.
*/

const numberSet = new Set([1, 1, 2, 3, 3]);
console.log(numberSet);

numberSet.add(4);
console.log(numberSet);

/** 
//  ? Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.
 */
numberSet.add([6, 7, 7]);
console.log(numberSet);

numberSet.delete(3);
console.log(numberSet);
/**
//  ! Ingat bahwa Set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.
 */
