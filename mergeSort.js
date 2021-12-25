const merge = (arr1, arr2) => {
  let res = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    res = res.concat(arr1.slice(i, arr1.length));
  }

  if (j < arr2.length) {
    res = res.concat(arr2.slice(j, arr2.length));
  }

  return res;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
    left = mergeSort(arr.slice(0, mid)),
    right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([33, 4, 12, 99, 1, 102, 34, 3]));
