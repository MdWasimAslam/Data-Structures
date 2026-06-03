// Spread Operator --> Spread operator expands values out of an array or object.
const arr = [1, 2, 3];
// console.log(...arr);

// Merge Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// console.log([...arr1,...arr2]);

// Copy Array
let arr3 = ["apple", "mango", "banana"];
let copyArr3 = [...arr3];
// console.log(copyArr3);

// Add items in an array
let arr4 = [1, 2];
// console.log([0,...arr4,3,4,5]);

// Copy object
const user = {
  name: "Wasim",
  age: 25,
};

const updateUser = {
  ...user,
  age: 19,
};
// console.log(updateUser);

// Rest Operator --> The rest operator (...) is used to collect multiple values into a single array or object.

function printNumbers(...numbers) {
  // console.log(numbers)
}
printNumbers(1, 2, 3, 4, 5);

function sum(...numbers) {
  let result = numbers.reduce((acc, item) => {
    acc = acc + item;
    return acc;
  }, 0);
  // console.log(result)
}
sum(1, 2, 3, 4, 5);

const user2 = {
  name: "Wasim",
  age: 25,
};

const updatedUser = {
  ...user2,
  city: "Kolkata",
};

console.log(updatedUser);

// Rest → Collects multiple values into a single array or object.
// Spread → Expands an array or object into individual values.

