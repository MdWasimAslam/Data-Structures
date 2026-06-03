// What Does "Union" Mean?

// Union means combining elements from both arrays and keeping only one copy of each value.

// Example 1

// Input:

// arr1 = [1, 2, 3, 4]
// arr2 = [3, 4, 5, 6]

// Combine both arrays:

// [1, 2, 3, 4, 3, 4, 5, 6]

// Remove duplicates:

// [1, 2, 3, 4, 5, 6]

// Output:

// [1, 2, 3, 4, 5, 6]
// Example 2

// Input:

// arr1 = [1, 1, 2, 3]
// arr2 = [2, 2, 4]

// Output:

// [1, 2, 3, 4]
// Example 3

// Input:

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

// Output:

// [1, 2, 3, 4, 5, 6]

function unionOfSortedArrays(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2];
  console.log([...new Set(mergedArray)]);
  return [...new Set(mergedArray)];
}

unionOfSortedArrays(arr1, arr2);
