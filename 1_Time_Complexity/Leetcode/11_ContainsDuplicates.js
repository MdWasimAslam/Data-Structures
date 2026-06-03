// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

var containsDuplicate = function(nums) {
   let sortedNums = nums.sort((a,b)=>a-b);
   for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(element===nums[i+1])return true
   }
   return false;5
};

console.log(containsDuplicate([1, 2, 3, 1]));
