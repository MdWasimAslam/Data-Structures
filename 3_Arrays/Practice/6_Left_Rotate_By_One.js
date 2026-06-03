// Question: Left Rotate Array by 1

// Difficulty: Easy

// Problem Statement

// You are given an array of elements.

// Your task is to rotate the array to the left by one position.

// When an array is rotated left by one position:

// The first element moves to the end of the array.
// Every other element shifts one position to the left.
// Example

// Input:

// [1, 2, 3, 4, 5]

// Process:

// 1 2 3 4 5
// ↑

// Move the first element (1) to the end

// 2 3 4 5 1

// Output:

// [2, 3, 4, 5, 1]
// More Examples

// Input:

// [10, 20, 30]

// Output:

// [20, 30, 10]

// Input:

// [7]

// Output:

// [7]

// Function Signature
function rotateByOne(arr) {
  let firstElem = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i-1] =arr[i];
  }
  arr[arr.length-1] = firstElem;
  console.log(arr)
  return arr
}

rotateByOne([1,2,3,4,5])

//output --> [2,3,4,5,1]
