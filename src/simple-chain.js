const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  'value': [],
  getLength() {
    return this.value.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    this.value.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.value.length  || position <= 0 || !Number.isInteger(position)) {
      this.value = [];
      throw new Error("You can't remove incorrect link!");
    };
    this.value.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.value.reverse();
    return this;
  },
  finishChain() {
    let result = this.value.join('~~');
    this.value = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
