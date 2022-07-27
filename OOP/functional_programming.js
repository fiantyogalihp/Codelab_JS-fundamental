// * #Pure Function
// ! Pure function dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.
// ! contoh penggunaan variable dari luar function

// ! daripada seperti ini:
const createPersonWithAge1 = (age, person) => {
  person1.age = age;
  return person;
};

const person1 = {
  name: "Bobo",
};

const newPerson1 = createPersonWithAge1(18, person1);

console.log({
  person1,
  newPerson1,
});

// ! Mending seperti ini:
const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = {
  name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});

// * #Immutable

// ! Daripada seperti ini :
const user1 = {
  firstname: "Harry",
  lastName: "Protter", // ups, typo!
};

const renameLastNameUser = (newLastName, user) => {
  user1.lastName = newLastName;
};

renameLastNameUser("Potter", user1);

console.log(user1);

// ! Lalu bagaimana cara membuat fungsi tersebut menjadi pure? Mudah, kita manfaatkan destructuring object daripada mengubah objek tersebut secara langsung.

// ! Lebih Baik seperti ini, JANGAN MENGUBAH SEACARA LANGSUNG OBJEK !!
const user = {
  firstname: "Harry",
  lastName: "Protter", // ups, typo!
};

const createUserWithNewLastName = (user, newLastName) => {
  return { ...user, lastName: newLastName };
};
// ? parameter 'lastName' menyesuaikan dengan objek user

const newUser = createUserWithNewLastName(user, "potter");

console.log(newUser);

// * #Recursif

// ! daripada seperti ini:
const countDown1 = (start) => {
  do {
    console.log(start);
    start -= 1;
  } while (start > 0);
};

// countDown1(10);

// ! lebih baik seperti ini:
const countDown = (start) => {
  console.log(start);
  if (start) countDown(start - 1);
};

countDown(5);

// * Dengan teknik rekursif ini, kita sebenarnya bisa menggantikan operasi iterasi dengan rekursi. Namun tidak sebatas itu saja, dengan rekursi kita dapat membuat dan mengolah data structures seperti Tree dan Array.

// * #Higher-Order Function(HOF)
// * HOF memungkinkan kita untuk menggunakan function yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya. Contoh Array Map, Array filter, dll.

export { user, createUserWithNewLastName };
