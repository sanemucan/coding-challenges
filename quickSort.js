const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start],
    swapIdx = start;

  for (let i = start + 1; i <= arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
      console.log(arr);
    }
  }
  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];

  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

let a = [4, 6, 9, 1, 2, 5];
quickSort(a);
