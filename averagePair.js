/* 
    Accepts an array of integers and a target integer.
    Checks if there is a pair of values in the array 
    where their average equals to the target integer.
*/
const averagePair = (arr, avg) => {
  let arrLen = arr.length;
  let sum = avg * 2;

  let i = 0,
    j = arrLen - 1;
  while (j > i) {
    let tempSum = arr[i] + arr[j];
    if (tempSum === sum) return true;
    else if (tempSum > sum) j -= 1;
    else i += 1;
  }
  return false;
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) === true);
