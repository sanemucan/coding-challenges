/* 
    Given two positive integers, check if two 
    has the same frequency of digits.
*/
const sameFrequency = (num1, num2) => {
  let str1 = String(num1).split("");
  let str2 = String(num2).split("");

  if (str1.length !== str2.length) {
    return false;
  }

  let strObj1 = {};

  for (let i of str1) {
    strObj1[i] = (strObj1[i] || 0) + 1;
  }

  for (let i of str2) {
    if (strObj1[i]) {
      strObj1[i] -= 1;
    } else {
      return false;
    }

    return true;
  }
};

console.log(sameFrequency(123, 231) === true);
console.log(sameFrequency(123, 21) === false);
console.log(sameFrequency(222, 22) === false);
console.log(sameFrequency(23456, 32654) === true);
