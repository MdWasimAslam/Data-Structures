// Question: Remove Duplicates from Sorted Array (In-Place)

// Difficulty: Easy

// Problem Statement

// You are given a sorted array of numbers.

// Your task is to remove the duplicate values so that each unique value appears only once.

// The removal must be done in-place, which means:

// Do not create a new array.
// Modify the original array itself.
// Use only constant extra space (O(1)).
// What Does "Sorted Array" Mean?

// The array is already arranged in ascending order.

// Example:

// [1, 1, 2, 2, 3, 3, 4]

// Because the array is sorted, all duplicate values will be next to each other.

// Example 1

// Input:

// [1, 1, 2]

// Process:

// The value 1 appears twice.
// Keep only one 1.
// The value 2 appears once.

// Result:

// [1, 2]
// Example 2

// Input:

// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

// Process:

// Keep only one occurrence of each number.

// Result:

// [0, 1, 2, 3, 4]

function RemoveDuplicates(arr) {
  let position = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      position++;
      arr[position] = arr[i];
    }
  }
  console.log(arr.splice(0, position + 1));
}

RemoveDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5]);
