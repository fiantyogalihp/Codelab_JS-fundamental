// * #destructuring Object & Array

// * #Destructuring Object
const profile = {
  firstName: "bapak Budi",
  status: "bertani",
  age: 36,
};

// * destructuring assignment,
// ? fungsi destructuring assignment  => untuk mengganti(replacement) value variable ke property dalam object/array
// const { firstName, age, isSwim}= profile; // * digunakan ketika tidak ada variable local yang sama

let firstName = "Budi";
let age = 18;

console.log(age);

// ? Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi 'undefined', agar data tidak 'undefined' beritanda assignment (=) setelah deklarasi setelah nama variable dan tentukan value nya
// * Default Values
({ firstName, age, isSwim = false } = profile);
// * Nah, inilah fungsinya tanda kurung. Ia akan memberi tahu JavaScript bahwa tanda kurawal di dalamnya bukan sebuah block statement melainkan sebuah expression, sehingga assignment dapat dilakukan.
console.log(age);

// * Assigning to Different Local Variable Names
const {
  firstName: localFirstName,
  status: localStatus,
  age: localAge,
} = profile;

console.log(localFirstName);
console.log(localAge);
console.log(isSwim);

// * #Destructuring Array
const favoriteFood = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, SecondFood, thirdFood] = favoriteFood;

console.log(thirdFood);
// ? destructuring Array akan bergantung pada index yang tersedia pada array, berbeda dengan decstruction pada object yang bergantung pada nama variable

// * destructuring assignment in array
// * untuk destructuring assignment di array harus dibungkus dengan tanda kurung siku
let myFood = "lemper";
let myDrink = "Red Velvet";

[myFood, myDrink] = favoriteFood;
console.log(myDrink);

// * Destructuring assignment default value
const food = ["rica-rica"];
const [my_food, my_drink = "chaos", my_topping] = food;

console.log(my_topping);
console.log(my_drink);
