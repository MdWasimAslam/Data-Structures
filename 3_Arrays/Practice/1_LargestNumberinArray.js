// Find the Largest Element

// Given an array of numbers, find the largest element in the array.

// Input
// [12, 45, 7, 89, 23]
// Expected Output
// 89

let arr = [12, 45, 7, 89, 23, 49, 98, 10, 1, 107, 120, 0, 27, 56, 82, 90, 61];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);
