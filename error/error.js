class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

let json = '{ "name": "Yoda", "age": 20 }';

try {
  let user = JSON.parse(json);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// --------------------------------------------------------
let json2 = '{ "name": "John", "age": 18 }';

try {
  let user = JSON.parse(json2);

  // if (!user.name) throw new SyntaxError(`'name' is required!`); // ! - (error kedua)
  if (!user.name) throw new ValidationError(`'name' is required!`);
  if (!user.age) throw new ValidationError(`'age' is required!`);

  // errorCode; // ! - (error ketiga)

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  // console.log(error.name); // ! - (error pertama)
  // console.log(error.message); // ! - (error pertama)

  // console.log(`JSON Error: ${error.message}`); // ! - (error kedua)

  // ! - (error ketiga)
  if (error instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(`Invalid data: ${error.message}`);
  } else {
    console.log(error.stack);
  }
}
// ? bagaimana jika ada bug, format json tidak sesuai, data user.name diatas 'undefined' tetapi tidak error oleh blok 'catch', namun jika user.name = 'undefined' bagi developer adalah 'error', cara mengatasinya adalah menggunakan 'Throw' - (error kedua)

// ? Sekarang anggaplah json sudah sesuai, tetapi ternyata ada eror lain yang terjadi, misalnya karena variabel yang belum terdefinisi, solusinya menggunakan if statement! - (error ketiga)
// * Dengan operator 'instanceOf', kita bisa mendapatkan tipe dari eror yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.

export { ValidationError };
