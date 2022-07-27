// * #Spread Operator
// ? Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...).

const job = ["programming", "design", "marketing"];

const skill = ["cooking", "swimming", "reading"];

console.log(...job);
console.log(...skill);

const merge1 = [...job, ...skill];

console.log(...merge1);
/* 
  * outputs => programming design marketing 
*/

console.log(job);
console.log(skill);

const merge2 = [job, skill];

console.log(...merge2);
/*
  * outputs => [ 'programming', 'design', 'marketing' ]
*/

// * dapat dilihat perbedaan diantaranya.
// ? kenapa demikian karena :
console.log(...job) == console.log(job[0], job[1], job[2]);

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const merge3 = { obj1, obj2 };
console.log(merge3);

const merge4 = { ...obj1, ...obj2 };
console.log(merge4);
