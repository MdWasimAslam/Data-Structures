// Concat --> Concat function joins two or more arrays.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
// console.log(arr3);

// Slice () --> Slice function returns a copy of a portion of an array into a new array object.
let arr4 = [
  "apple",
  "banana",
  "cherry",
  "mango",
  "Papaya",
  "Guava",
  "Pineapple",
];
let arr5 = arr4.slice(0, 3); // startIndex = from where you want to start, endIndex = where you want to end
// console.log(arr5);

let arr6 = arr4.slice(3); // starts from index three and takes everything till the end
// console.log(arr6);

let arr7 = arr4.slice(-2); // starts from last index and takes everything till the end (so take last 2 elements)
// console.log(arr7);

// Splice() --> Splice function changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Remove an element
let arr8 = [
  "apple",
  "banana",
  "cherry",
  "mango",
  "Papaya",
  "Guava",
  "Pineapple",
];
arr8.splice(2, 1); // startIndex = from where you want to start, endIndex = how many you want to remove
// console.log(arr8);

// Replace an element
let arr9 = [
  "apple",
  "banana",
  "cherry",
  "mango",
  "Papaya",
  "Guava",
  "Pineapple",
];
arr9.splice(4, 1, "Guava"); // startIndex = from where you want to start, endIndex = how many you want to remove, replace with this element
// console.log(arr9);

// Add element after specific index
let arr10 = [
  "apple",
  "banana",
  "cherry",
  "mango",
  "Papaya",
  "Guava",
  "Pineapple",
];
arr10.splice(4, 0, "Guava"); // startIndex = from where you want to start, endIndex = how many you want to remove, replace with this element
// console.log(arr10);

// fill() is used to fill all or part of an array with a specific value.

// Syntax
// array.fill(value, start, end)

// value → what you want to fill
// start → starting index (optional)
// end → ending index, not included (optional)

// Fill entire array
let arr11 = [1, 2, 3, 4];
arr11.fill(0);
// console.log(arr11);

// Fill from a specific index
let arr13 = [0, 1, 2, 3, 4, 5];
// console.log(arr13.fill('x',2)) // start from 2nd index and fill every element to x

// Fill between specific index
let arr12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr12.fill('x',3,5))

// Create an array of 10 zeros:
let arr14 = new Array(10).fill(0);
// console.log(arr14);
