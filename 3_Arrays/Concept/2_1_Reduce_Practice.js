
// Write a function that takes an array of strings and returns a single string that concatenates all the strings using reduce().
// Input: ["Hello", " ", "World"]
// Expected Output: "Hello World"

let arr6 = ["Hello", " ", "World"];
let resArr6 = arr6.reduce((accumulator, item) => {
  if (item.length > 0) {
    accumulator = accumulator + item;
  }
  return accumulator;
}, "");
// console.log(resArr6);

// Write a function that takes an array of objects and returns a new object that contains only the objects with a property called name using reduce().
// Input: [ { name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 35 } ]
// Expected Output: { "Alice": { name: "Alice", age: 25 }, "Bob": { name: "Bob", age: 30 } }

let arr7 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
let resArr7 = arr7.reduce((accumulator, item) => {
  accumulator[item.name] = item;
  return accumulator;
}, {});

// console.log(resArr7);

// Write a function that takes an array of numbers and returns an array of objects that contain the number and its square using reduce().
// Input: [1, 2, 3, 4, 5]
// Expected Output: [ { number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }, { number: 4, square: 16 }, { number: 5, square: 25 } ]

let arr8 = [1, 2, 3, 4, 5];
let resArr8 = arr8.reduce((acc, item) => {
  acc = [...acc, { number: item, sqaure: item * item }];
  return acc;
}, []);

// console.log(resArr8);

// Write a function that takes an array of strings and returns a new array that contains only the strings that are longer than 5 characters using reduce() and a callback function.
// Input: ["Hello", "World", "Code", "Academy"]
// Expected Output: ["Hello", "World", "Academy"]

let arr9 = ["Hello", "World", "Code", "Academy"];
let resArr9 = arr9.reduce((acc, item) => {
  if (item.split("").length >= 5) {
    acc = [...acc, item];
  }
  return acc;
}, []);

// console.log(resArr9);

// Write a function that takes an array of objects and returns a new object that contains only the objects with a property called id using reduce() and a callback function.
// Input: [ { id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" } ]
// Expected Output: { "1": { id: 1, name: "Alice" }, "2": { id: 2, name: "Bob" } }

let arr10 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
let resArr10 = arr10.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

// console.log(resArr10)

// Write a function that takes an array of numbers and returns the product of all the numbers using reduce() and a callback function.
// Input: [1, 2, 3, 4, 5]
// Expected Output: 120

let arr11 = [1, 2, 3, 4, 5];
let resArr11 = arr11.reduce((acc, item) => {
  if (acc == 0) acc = item;
  acc = acc * item;
  return acc;
}, 0);

// console.log(resArr11);

// Write a function that takes an array of objects and returns a new array containing only the objects that have a `name` property using reduce().

// Input: [{ name: "Alice", age: 25 }, { age: 30 }, { name: "Charlie", age: 35 }, { city: "New York" }]
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 35 }]

let arr12 = [
  { name: "Alice", age: 25 },
  { age: 30 },
  { name: "Charlie", age: 35 },
  { city: "New York" },
];
let resArr12 = arr12.reduce((acc, item) => {
  if (item.name) {
    acc = [...acc, item];
  }
  return acc;
}, []);

// console.log(resArr12);


// Count Occurrences of Elements
// Input: ["apple", "banana", "apple", "orange", "banana", "apple"]
// Output: { apple: 3, banana: 2, orange: 1 }

let arr13 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let resArr13 = arr13.reduce((acc,item)=>{
  if(!acc[item]){
    acc[item]=0
  }
  acc[item] = acc[item]+1
  return acc;
},{})

// console.log(resArr13)

