/* 
    Accepts a variable number of arguments.
    Checks whether there are any duplicates among the passed arguments.
*/
const areThereDuplicates = (...args) => {
  let freqList = {};

  for (let i of args) {
    if (freqList[i]) {
      return true;
    } else {
      freqList[i] = (freqList[i] || 0) + 1;
    }
  }

  return false;
};

console.clear();
console.log(areThereDuplicates(1, 2, 3) === false);
console.log(areThereDuplicates("a", "b") === false);
console.log(areThereDuplicates("a", "b", "a") === true);
console.log(areThereDuplicates(1, 2, 2) === true);
console.log(areThereDuplicates("a") === false);
console.log(areThereDuplicates() === false);
