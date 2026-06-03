function findPair(arr, target) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let result = null;

  while (leftPointer < rightPointer) {
    let pairSum = arr[leftPointer] + arr[rightPointer];

    if (pairSum === target) {
      result = [arr[leftPointer], arr[rightPointer]];
      break;
    } else if (pairSum < target) {
      leftPointer++;
    } else if (pairSum > target) {
      rightPointer--;
    }
  }
  console.log(result);
}

findPair([1, 2, 3, 4, 5], 7);
findPair([1, 6, 8, 9, 10], 14);
findPair([1, 3, 4, 6, 8, 10], 12);
findPair([1, 2, 3, 4, 5], 10);
findPair([1, 2, 17, 3, 7], 20);
