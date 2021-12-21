const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }

  return arr;
};

console.log(selectionSort([12, 4, 11]));
console.log(selectionSort([3, 1, -2, 23]));
console.log(selectionSort([12, 4, 11, 9, 43, 2, 1, 56]));
