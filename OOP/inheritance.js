// * #Overriding Method

class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }
  sendMessage(message, to) {
    console.log("you send:", message, "to", to, "from", this.from);
    this._contacts.push(to);
  }
  showAllContacts() {
    return this._contacts;
  }
}

// * #Inherintance cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
export default class WhatsApp extends Mail {
  constructor(author, username, isBussinessAccount) {
    super(author);
    this.me = "Fiantyo Galih P.";
    this.username = username;
    this.isBussinessAccount = isBussinessAccount;
  }

  sendChats(message, to, from) {
    super.sendMessage(message, to, from);
  }

  myProfile() {
    console.log(
      `${WhatsApp.prototype.me} \n ${WhatsApp.prototype.username} \n ${WhatsApp.prototype.isBussinessAccount} `
    );
  }
}

// * #Inherintance cara 2: menggunakan `prototype` jika menggunakan statement `function` / `class`
// WhatsApp.prototype = new Mail();

// * Misal
const Whatsapp = new WhatsApp("Fiyuu", "fiantiogalih@gmail.com", false);

Whatsapp.sendChats("Hello There i'm using WhatsApp ", "pramudya");
Whatsapp.sendMessage("Hello there i'm using Gmail ", "pramudya");
