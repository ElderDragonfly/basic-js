const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const obj = { addition: '', separator: '+', additionSeparator: '|', repeatTimes: 0, additionRepeatTimes: 1, ...options };
  const string = `${str}`;
  obj.addition = `${obj.addition}`;

  const subArray = Array(obj.additionRepeatTimes).fill(obj.addition);
  const subString = subArray.join(obj.additionSeparator);

  if (obj.repeatTimes === 0) return string + subString;

  const resultArray = Array(obj.repeatTimes).fill(string);
  return resultArray.join(`${subString}${obj.separator}`) + subString;
}

module.exports = {
  repeater
};
