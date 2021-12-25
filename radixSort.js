/**
 *
 * @param {*} num
 * @param {*} i
 * @returns returns the ith digit of the num
 */
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

/**
 *
 * @param {*} num
 * @returns the digit count of the num
 */
const digitCount = (num) => {
  let r = num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
  return r;
};

/**
 *
 * @param {*} nums
 * @returns returns the highest of the digit count of the array of numbers
 */
const highestDigit = (nums) => {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(nums[i]));
  }
  return maxDigit;
};

const radixSort = (nums) => {
  let maxDigitCount = highestDigit(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([4445, 666, 13, 230, 3, 9852]));
