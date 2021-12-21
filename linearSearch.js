const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
};

console.log(linearSearch([2, 30, 30, 44], 30) === 1);
console.log(linearSearch([2], 30) === -1);
console.log(linearSearch([2], 2) === 0);
console.log(linearSearch([], 30) === -1);
console.log(linearSearch([2, 30, 20, 44], 44) === 3);
