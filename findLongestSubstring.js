/* 
    Accepts a string and returns the length of the longest
    substring with all distinct characters.
*/
const findLongestSubstring = (str) => {
  str = str.toLowerCase();
  let start = 0,
    found = {},
    longest = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let seenVal = found[char];
    if (seenVal) {
      start = Math.max(start, seenVal);
    }
    longest = Math.max(longest, i - start + 1);
    found[char] = i + 1;
  }

  return longest;
};

console.log(findLongestSubstring("findLongestSubstring"));
console.log(findLongestSubstring("thisisawesome"));
