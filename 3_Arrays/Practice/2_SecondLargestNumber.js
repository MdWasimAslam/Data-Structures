// Find the Second Largest Element (Without Sorting)
// Question

// Given an array of numbers, find the second largest element without using any sorting method.

// Input
// [12, 45, 7, 89, 23]
// Expected Output
// 45

// let arr = [12, 45, 7, 89, 23];

// let largest = 0;
// let secondLargest = 0;

// for (let item of arr) {
//   if (item > largest) {
//     secondLargest = largest;
//     largest = item;
//   } else if (item > secondLargest && item !== largest) {
//     secondLargest = item;
//   }
// }

// console.log(secondLargest);

let arr = [12];
function secondLargestNumber(arr){
let UniqueArray = Array.from(new Set(arr));
let sortedArray = UniqueArray.sort((a,b)=>b-a);
return sortedArray.length >=2 ? sortedArray[1] : sortedArray[0];
}

console.log(secondLargestNumber(arr))