// * #Class

// * pada javascript, untuk membuat suatu class kita bisa menggunakan function(prototype) atau class

// * class menggunakan function dengan prototype
function Mail1() {
  this.from = "fiantiogalih@gmail.com";
}
Mail1.prototype.sendMessage = (message, to) => {
  console.log(`${message} sent to ${to}`);
};

// ? call Class
const mail1 = new Mail1();
mail1.sendMessage("hello", "pramudyagg@gmail.com");

// * class menggunakan function tanpa prototype
function Mail2() {
  this.from = "pramudyagg@gmail.com";
  this.sendMessage = (message, to) => {
    console.log(`${message} sent to ${to}`);
  };
}

// ? call Class
const mail2 = new Mail2();
mail2.sendMessage("Hi", "fiantiogalih@gmail.com");

// ! Dianjurkan menggunakan function dengan prototype, karena penggunaan prototype dapat menghemat alokasi memori yang digunakan.

// * class menggunakan Class
class Mail {
  constructor() {
    this.from = "fiantiogalih@gmail.com";
  }

  sendMessage(message, to) {
    console.log(`message: ${message} \nsent to: ${to}`);
  }
}

const mail = new Mail();
mail.sendMessage("Ayyyoooo", "pramudyagg@gmail.com");

/** // ? lalu bagaimana cara atrribute(variable) pada class bisa private? 
 * 
  //  ? #attribute cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`) 
  //  ? #attribute cara 2, menambahkan _ , cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
  //  ? #attribute cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
 */

class Gmail {
  // #contacts = []; // * #attribute cara 3

  // ? ada 2 cara menerapkan #Constructor dalam Js
  // * #Constructor cara 1, menginisiasi contructor menggunakan statement 'class'
  constructor(from) {
    this.from = from;
    // var contacts = []; // ! #attribute cara 1, cara ini hanya bisa digunakan pada penulisan kelas menggunakan statement 'function' !!
    this._contacts = []; // * #attribute  cara 2
    this._isInvited = false;
  }

  // ? untuk menggunakan method pada class ada 2 cara:

  // ? #Method cara 1
  sendMessage(message, to, from) {
    console.log(`you sent this ${message} to ${to} from ${from}`);

    this._contacts.push(`${to}`); // * cara pemanggilan 'cara 2'
    // this.#contacts.push(`${to}`); // * cara pemanggilan 'cara 3'
  }
  /**
    // ? method cara 1, cara ini perlu inisialisasi agar bisa digunakan, contoh:

    // const gmail = new Gmail(); // ? bentuk Inisialisasi
    // gmail.sendMessage("Ohayou gozaimasu", "fiantiogalih@gmail.com"); // ? pemanggilan method
   */

  // ? #Method cara 2
  static isValidPhone(phone) {
    if (typeof phone === "number") {
      return "the phone is valid";
    }

    return "phone number is invalid";
  }
}

/**
  // * Catatan : cara membuat atrribute private dengan 'cara 2' merupakan standarisasi pembeda variable public/private para Js Dev, tetapi cara ini bukan cara murni yang diusung JavaScript dalam menetapkan atrribute private

  //  * sedangkan untuk cara 3, belum sepenuhnya didukung oleh JavaScript engine versi lama. ini merupakan proposal pengembangan JavaScript terkait dengan identifier pada js (https://github.com/tc39/proposal-private-methods).
 */

// * #Classs method
// * #Method cara 1
const gmail = new Gmail(); // ? initialization
gmail.sendMessage(
  "Ohayou gozaimasu",
  "fiantiogalih@gmail.com",
  "pramudyagg@gmail.com"
);

// * #Static method
// * #Method cara 2
console.log(Gmail.isValidPhone(2398427837426));

// * #Contructor
function isValidPhone(phone) {
  // * #Contructor cara 2
  this.isValid = phone;
  return typeof phone === "number";
}

/**
//  ? Dari contoh constructor di atas, maka cara pemanggilannya menjadi seperti di bawah ini:

  // const mail1 = new Mail("emailku@dicoding.com"); // * cara pemanggilan constructor
// * Karena JavaScript bukan bahasa dengan dukungan static type maka sebenarnya kita dapat melakukan instansiasi dengan parameter sesuka kita:

  // const mail1 = new Mail(085000111222); // * misalkan untuk SMS
  // const mail2 = new Mail("emailku@dicoding.com"); // * misalkan untuk Email
 */
