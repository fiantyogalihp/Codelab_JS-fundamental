const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile("todo.txt", "UTF-8", fileReadCallback);

// * Sebagai alternatif, Anda juga bisa gunakan method versi synchronous fs.readFileSync().
// const fs = require('fs');

// const data = fs.readFileSync('todo.txt', 'UTF-8');
// console.log(data);
