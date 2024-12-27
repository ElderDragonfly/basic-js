const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const obj = {};
  for (let char of s1) {
    if (obj[char]) {
      obj[char] += 1;
    } else obj[char] = 1;
  }
  const obj2 = {};
  for (let char of s2) {
    if (obj2[char]) {
      obj2[char] += 1;
    } else obj2[char] = 1;
  }
  for (let i in obj) {
    if (obj2[i]) {
      count += Math.min(obj[i], obj2[i]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
