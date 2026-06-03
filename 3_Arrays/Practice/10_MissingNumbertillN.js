// Question: Missing Number in 1 to N (Using Sum Formula)

// Difficulty: Easy

// Problem Statement

// You are given an array containing numbers from 1 to N.
// However, one number is missing.
// Your task is to find the missing number.

// Example 1

// Input:
// [1, 2, 4, 5]

// The numbers should be:
// 1, 2, 3, 4, 5

// Notice that:

// 3

// is missing.

// Output:

// 3
// Example 2

// Input:

// [2, 3, 1, 5]

// Expected sequence:

// 1, 2, 3, 4, 5

// Missing number:

// 4

// Output:

// 4
// Example 3

// Input:

// [1]

// Expected sequence:

// 1, 2

// Missing number:

// 2

// Output:

// 2

function findMissingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum = actualSum+arr[i];
    
  }
  console.log(expectedSum-actualSum);
  return expectedSum-actualSum;
}

console.log(findMissingNumber([1,2,4,5], 5));
