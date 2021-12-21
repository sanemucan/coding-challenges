const binarySearch = (arr, value) => {
  let start = 0,
    end = arr.length - 1,
    middle = Math.floor((end + start) / 2);

  while (arr[middle] !== value && start <= end) {
    if (arr[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((end + start) / 2);
  }
  return arr[middle] === value ? middle : -1;
};

console.log(binarySearch([1, 5, 7, 8, 20, 22], 22) === 5);
console.log(binarySearch([1, 5, 7, 8, 20, 22], 3) === -1);
console.log(binarySearch([1, 5, 7, 8, 20, 22], 20) === 4);
console.log(binarySearch([1, 5, 7, 8, 20, 22], 30) === -1);
console.log(binarySearch([], 20) === -1);
