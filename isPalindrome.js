/*
 *
 * @param {*} str
 * @returns if the str is palindrome
 */
const isPalindrome = (str) => {
  if (str.length <= 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
};

console.log(isPalindrome("sanem") === false);
console.log(isPalindrome("tacocat") === true);
console.log(isPalindrome("amanaplanacanalpanama") === true);
console.log(isPalindrome("amanaplanacanalpandemonium") === false);
console.log(isPalindrome("ece") === true);
console.log(isPalindrome("anastas mum satsana") === true);
