// * #object 
const people = {
  nama: "Rizki",
  age: 21,
  hobbies: ["Gaming", "Reading", "Coding"],
  isMarried: false,
};

// ? cara mengakses inisialisasi object
people.nama = "Galih";
console.log(people.nama);

people["age"] = 19;
console.log(people["age"]);

// ? kondisi dimana property dalam Object tidak ada
people.class = "Diploma 1"; // * menambahkan property baru

// ? bagaimana cara delete property dalam object
delete people.isMarried;

console.log(`Hi my name is ${people.nama}, im ${people["age"]} years old, im now in ${people.class}`);
