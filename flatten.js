/**
 *
 * @param {*} arr - array of arrays
 * @returns a new array with all values flattened
 */
const flatten = (arr) => {
  let flat = [];
  if (arr.length === 0) return flat;

  for (let i of arr) {
    if (Array.isArray(i)) {
      flat = flat.concat(flatten(i));
    } else {
      flat.push(i);
    }
  }

  return flat;
};

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
