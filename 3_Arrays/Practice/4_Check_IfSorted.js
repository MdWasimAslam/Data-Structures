// Question: Check if Array is Sorted

// Difficulty: Easy

// Problem Statement:

// Given an array of numbers, determine whether the array is sorted in ascending order.

// Return true if every element is greater than or equal to the previous element; otherwise, return false.

// Example 1:

// Input:
// [1, 2, 3, 4, 5]

// Output:
// true

// Example 2:

// Input:
// [1, 3, 2, 4, 5]

// Output:
// false

// Example 3:

// Input:
// [5]

// Output:
// true

// Example 4:

// Input:
// [1, 1, 2, 2, 3]

// Output:
// true

// Function Signature:

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true
}

console.log(isSorted([1, 1, 4, 2, 3]));
