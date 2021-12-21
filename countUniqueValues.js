/**
 *
 * @param {*} arr (sorted array)
 * @returns the count of the unique values of the array
 */
const countUniqueValues = (arr) => {
  let len = arr.length;
  if (len === 0) {
    return 0;
  }

  let i = 0,
    j = 1;

  while (j <= len - 1) {
    let first = arr[i];
    let second = arr[j];
    if (first === second) {
      j++;
    } else {
      arr[i + 1] = second;
      i++;
      j++;
    }
  }

  return i + 1;
};

console.log(countUniqueValues([]) === 0);
console.log(countUniqueValues([1]) === 1);
console.log(countUniqueValues([1, 2]) === 2);
console.log(countUniqueValues([1, 1, 2]) === 2);
console.log(countUniqueValues([1, 1, 2, 2, 3]) === 3);
console.log(countUniqueValues([1, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8]) === 8);
console.log(countUniqueValues([1, 1, 2, 13, 14]) === 4);
