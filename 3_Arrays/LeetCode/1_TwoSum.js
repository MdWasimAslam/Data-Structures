// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
  let arr = nums.sort((a,b)=>a-b);
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let pair = null;

  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];

    if (sum === target) {
      pair = [arr[leftPointer], arr[rightPointer]];
      break;
    } else if (sum < target) {
      leftPointer++;
    } else if (sum > target) {
      rightPointer--;
    }
  }
  console.log(pair);
}

twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
twoSum([1, 6, 8, 9, 10], 14);
twoSum([1, 3, 4, 6, 8, 10], 12);
twoSum([1, 2, 17, 3, 7], 20);
