// looping through an array

// for Loop
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
  // console.log(arr1[i]);
}

// while loop
let arr2 = [1, 2, 3, 4, 5];
let i = 0;
while (i < arr2.length) {
  // console.log(arr2[i]);
  i++;
}

//Map() --> map() is used to transform each element of an array and return a new array without modifying the original array.
let arr3 = [1, 2, 3, 4, 5];
let newArr3 = arr3.map((item, index, array) => {
  return item * 2;
});

// console.log(newArr3)

// filter() --> Filter is used to select elements based on a condition and returns a new array that may contain fewer elements.
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let newArr4 = arr4.filter((item, index, array) => {
  // return item * 2 // ❌ this will not work like Map()
  return item > 4;
});
// console.log(newArr4);

// Difference between Map() and filter()
// map() changes every item in an array and returns a new array.
// filter() picks only the items that match a condition and returns a new array.

// Reduce() --> Reduce is used to combine all elements of an array into a single value.

// Write a function that takes an array of numbers and returns the sum of all the numbers using reduce().
// Input: [1, 2, 3, 4, 5]
// Expected Output: 15

let arr5 = [1, 2, 3, 4, 5];
let resArr5 = arr5.reduce((accumulator, item, index, array) => {
  accumulator = accumulator + item;
  return accumulator;
}, 0);

// console.log(resArr5)

// Some() --> returns true if any of the array elements pass the test implemented by the provided function.
// Input: [1, 2, 3, 4, 5]
// Output: true

let arr6 = [1, 2, 3, 4, 5];
let resArr6 = arr6.some((item) => {
  return item > 3;
});

// console.log(resArr6)

// Every() --> returns true if all of the array elements pass the test implemented by the provided function.
// Input: [1, 2, 3, 4, 5]
// Output: false

let arr7 = [2, 4, 6, 8, 10];
let resArr7 = arr7.every((item) => {
  return item % 2 == 0;
});
// console.log(resArr7)



// Find() --> returns the value of the first element in the array that satisfies the provided testing function.
// Input: [1, 2, 3, 4, 5]
// Output: 2

let arr8 = [1, 2, 3, 4, 5];
let resArr8 = arr8.find((item) => {
  return item == 2;
});
// console.log(resArr8)


// FindIndex() --> returns the index of the first element in the array that satisfies the provided testing function.
// Input: [1, 2, 3, 4, 5]
// Output: 1
let arr9 = [1,2,3,4,5,6,7,8,9];
let resArr9 = arr9.findIndex((item) => {
  return item == 4;
})
// console.log(resArr9);






