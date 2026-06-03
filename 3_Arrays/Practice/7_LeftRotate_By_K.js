// Question: Left Rotate Sorted Array by K Positions

// Difficulty: Medium

// Problem Statement

// You are given an array of elements and an integer k.

// Your task is to rotate the array to the left by k positions.

// When an array is rotated left by k positions:

// The first k elements move to the end of the array.
// The remaining elements shift to the left.
// Example 1

// Input:

// arr = [1, 2, 3, 4, 5]
// k = 2

// Process:

// 1 2 | 3 4 5

// Move first 2 elements to the end

// 3 4 5 1 2

// Output:

// [3, 4, 5, 1, 2]
// Example 2

// Input:

// arr = [10, 20, 30, 40, 50]
// k = 3

// Output:

// [40, 50, 10, 20, 30]
// Example 3

// Input:

// arr = [1, 2, 3]
// k = 4

// Output:

// [2, 3, 1]

function leftRotateByK(arr, k) {
  k = k % arr.length;
  for (let rotate = 0; rotate < k; rotate++) {
    let firstElem = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = firstElem;
  }
  console.log(arr);
}

leftRotateByK([1, 2, 3, 4, 5], 2);
