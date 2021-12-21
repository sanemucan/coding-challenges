/* 
    Accepts two strings.
    Checks if the characters in the first string appear in the second as well. 
    Their order has to be the same.
*/
const isSubsequence = (str1, str2) => {
  let i = 0,
    j = 0;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
};

console.log(isSubsequence("hayde", "acb") === false);
console.log(isSubsequence("hello", "hello world") === true);
console.log(isSubsequence("sing", "sting") === true);
console.log(isSubsequence("abc", "abracadabra") === true);
console.log(isSubsequence("abc", "acb") === false);
