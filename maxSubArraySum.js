/* 
    Accepts an array and a number.
    Returns the maximum sum of subarray with the length of the 
    number passed as the second parameter to the function.
*/
const maxSubarraySum = (arr, num) => {
  if (arr.length < num) {
    return null;
  }
  let maxSum = 0,
    tempSum = 0;
  // start from the beginning of the array with the num length sliding window
  // assign it to maxsum

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // slide one idx and compare assign it to the temp. if greater then to the maxsum as well

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 2, 3, 4], 2) === 7);
console.log(maxSubarraySum([1, 2], 3) === null);
console.log(maxSubarraySum([], 2) === null);
console.log(maxSubarraySum([1, 9, 12, 3, 15, 9, 4], 3) === 30);
