// * #WeakMap & WeakSet

// * pada Map() akan ada yang namanya 'garbage collection', yaitu ketika data pada map dihapus salah satu tidak akan terhapus sepenuhnya, melainkan akan tersimpan di memory sampai kita benar-benar menghapusnya

let visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(visitsCountMap);
}, 10000);

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/

// * Ketika reference objek 'jonas' dihapus dengan mengubahnya menjadi null, seharusnya map tidak lagi menyimpan data 'user' (garbage collected). Namun, kenyataannya data 'jonas' masih tersedia di dalam Map. Artinya, data 'jonas' masih tersimpan di dalam memori sampai kita benar-benar menghapusnya.

// * Berbeda jika kita menggunakan WeakMap seperti ini.

// let visitsCountMapExample = new WeakMap();

// * Ketika nilai jonas sudah tidak bisa dijangkau, object 'jonas' akan dihapus dari memori termasuk informasi yang disimpan di dalam WeakMap.

import { inspect } from "util";

let visitsCountWeakMap = new WeakMap(); // Menyimpan daftar user

function weakMapCountUser(user) {
  let count = visitsCountWeakMap.get(user) || 0;
  visitsCountWeakMap.set(user, count + 1);
}

let jonas1 = { name: "Jonas" };
weakMapCountUser(jonas1); // Menambahkan user "Jonas"

jonas1 = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(inspect(visitsCountWeakMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/

// ? WeakMap tidak dapat dilihat secara langsung menggunakan console.log. Ini merupakan issue yang terjadi pada Node.js (lihat: https://github.com/nodejs/node/issues/19001). Itulah mengapa kami menggunakan fungsi 'inspect' untuk melihat data yang ada di dalam WeakMap

// ! jika masih bingung liat materi JS pada directory komputer(Fiyuu) E:\Materi\materi js
