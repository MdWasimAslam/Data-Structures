// Question: Reverse in-place (two-pointer swap)

// This question usually means:

// You are given an array (or sometimes a string).
// You need to reverse the elements.
// In-place means you are not allowed to create another array to store the reversed result.
// Two-pointer swap means you use:
// One pointer at the beginning.
// One pointer at the end.
// Swap the values.
// Move both pointers toward the center.
// Repeat until they meet or cross.
// Example

// Input:
// [1, 2, 3, 4, 5]

// Process:
// 1 2 3 4 5
// ^       ^

// Swap first and last
// 5 2 3 4 1
//   ^   ^

// Swap second and second-last
// 5 4 3 2 1
//     ^

// Output:
// [5, 4, 3, 2, 1]

function reverseArray(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {
    let temp = arr[leftPointer];
    arr[leftPointer] = arr[rightPointer];
    arr[rightPointer] = temp;
    leftPointer++;
    rightPointer--;
  }
  console.log(arr);
}

reverseArray([1, 2, 3, 4, 5]);
