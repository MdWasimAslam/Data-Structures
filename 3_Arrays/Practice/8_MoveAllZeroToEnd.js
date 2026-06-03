// Question: Move All Zeros to End (Preserve Order)

// Difficulty: Easy

// Problem Statement

// You are given an array of numbers.

// Your task is to move all 0 values to the end of the array while keeping the relative order of all non-zero elements unchanged.

// What Does "Preserve Order" Mean?

// The non-zero elements must remain in the same order in which they originally appeared.

// Example 1

// Input:

// [1, 0, 2, 0, 3, 4]

// Process:

// Move all zeros to the end.
// Keep 1, 2, 3, 4 in the same order.

// Output:

// [1, 2, 3, 4, 0, 0]
// Example 2

// Input:

// [0, 1, 0, 3, 12]

// Output:

// [1, 3, 12, 0, 0]
// Example 3

// Input:

// [0, 0, 0]

// Output:

// [0, 0, 0]
// Example 4

// Input:

// [1, 2, 3]

// Output:

// [1, 2, 3]
// What Is NOT Allowed?

// Suppose the input is:

// [1, 0, 2, 0, 3]

// This output is wrong:

// [3, 2, 1, 0, 0]

// because the order of non-zero elements changed.

// What Is Expected?

// For:

// [1, 0, 2, 0, 3]

// the correct output is:

// [1, 2, 3, 0, 0]

function moveZeros(arr) {
  let position = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[position] = arr[i];
      position++;
    }
  }

  console.log(arr.fill(0, position));
  return arr.fill(0, position);
}

moveZeros([1, 0, 2, 0, 3, 4, 2]);
// Output -> [1, 2, 3, 4, 0, 0]
