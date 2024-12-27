const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.isDirect = type;
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const keyArr = [];
    let result = [];
    for (let i = 0; i < str.length; i++) {
      keyArr.push(key[i % key.length].toUpperCase());
    }
    let keyFlag = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/i)) {
        let strNumber = str[i].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
        let keyNumber = keyArr[i - keyFlag].charCodeAt(0) - 'A'.charCodeAt(0);
        let resLetter = String.fromCharCode((strNumber + keyNumber) % 26 + 'A'.charCodeAt(0));
        result.push(resLetter);
      } else {
        result.push(str[i]);
        keyFlag++;
      }

    }
    if (this.isDirect) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const keyArr = [];
    let result = [];
    for (let i = 0; i < str.length; i++) {
      keyArr.push(key[i % key.length].toUpperCase());
    }
    let keyFlag = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/i)) {
        let strNumber = str[i].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
        let keyNumber = keyArr[i - keyFlag].charCodeAt(0) - 'A'.charCodeAt(0);
        let resLetter = String.fromCharCode((strNumber - keyNumber + 26) % 26 + 'A'.charCodeAt(0));
        result.push(resLetter);
      } else {
        result.push(str[i]);
        keyFlag++;
      }

    }
    if (this.isDirect) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
