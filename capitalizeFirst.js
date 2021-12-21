const capitalizeFirst = (arr, rest = []) => {
  if (arr.length === 0) return rest;
  rest.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  return capitalizeFirst(arr.slice(1), rest);
};

console.log(capitalizeFirst(["sanem", "hey", "wut"]));
