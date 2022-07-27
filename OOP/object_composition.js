// * #Object Composition

// ? [1] list of abstractions
const canSendMessage = (self) => ({
  sendMessage: () => console.log(`Send Message:`, self.message),
});

const CheckisValidPhone = (self) => ({
  isValid: () => console.log(`Valid Phone:`, self.form),
});

// ? [2] create object composition
const PersonalEnterprise = (from, message, store) => {
  // ? [3] attributes
  const self = {
    from,
    message,
    store,
  };
  // * agar Object Composition berguna dengan baik, pada create object composition jangan lupa menambahkan parameter attribute yg digunakan untuk semua method yg ingin dibuat

  // ? [4] method
  const PersonalEnterpriseBehavios = (self) => ({
    createCatalog: () => console.log(`Catalog has Created`, self.store),
  });

  // ? [5] create object composition
  return Object.assign(
    self,
    PersonalEnterpriseBehavios(self),
    canSendMessage(self),
    CheckisValidPhone(self)
  );
};

// * initialize
const perEnterprise = PersonalEnterprise(
  "pengirim@gmail.com",
  "Hei produk Hot nih!",
  "Fyuu Store"
);

perEnterprise.createCatalog();
perEnterprise.sendMessage();

/** // ? Penjabaran kode di atas:
// * 1. Kita membuat sebuah abstraksi untuk method-method yang umum digunakan (di sini misalkan method mengirim pesan, dan validasi nomor hp).

// * 2. Kita membuat sebuah kelas baru dengan nama 'PersonalEnterprise', di mana seperti biasa kita dapat menggunakan parameter yang akan digunakan.

// * 3. Pada  object composition ini, penggunaan parameter biasa digunakan untuk mendaftarkan attribute-attribute dari kelas tersebut. Pada contoh di atas, kita mengumpulkan attribute tersebut pada konstanta bernama self atau state.

// * 4. Method, kita dapat juga menambahkan method/fungsi yang spesifik hanya ada pada kelas tersebut (kapabilitasnya hanya pada kelas tersebut / tidak umum).

// * 5. Proses pembuatan object dengan perintah Object.assign(attribute, method1, method2, methodN).


  // * Dari contoh kode di atas maka kita dapat membuat sebuah object dengan nama personalEnterprise tanpa harus melakukan pewarisan.
*/
