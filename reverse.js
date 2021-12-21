/**
 *
 * @param {*} str
 * @returns the reverse of the string
 */
const reverse = (str) => {
  let s = [],
    l = str.length;

  if (str.length === 0) return s;
  s.push(str[l - 1]);
  s = s.concat(reverse(str.slice(0, l - 1)));
  return s.join("");
};

console.log(reverse("sanem"));
