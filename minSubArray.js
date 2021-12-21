/* 
    Accepts an array of positive integers and a positive integer.
    Returns the minimal length of contiguous subarray of which 
    the sum is greater than or equal to the positive integer 
    passed to the function as the second parameter. 
    If none, return 0.
*/
const minSubArray = (nums, sum) => {
  let start = 0,
    end = 0,
    total = 0,
    minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArray([2, 3, 41, 13, 56, 40], 90));
console.log(minSubArray([2, 3, 41, 13, 56, 40], 120));
console.log(minSubArray([2, 3, 41, 13, 56, 40], 47));
