import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor(direction) {
		this.direction = (direction === "" || direction !== false) ? true : false;
	}
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
			throw new Error("Incorrect arguments!")
		}
		return this.crypt(message, key, false);
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
			throw new Error("Incorrect arguments!")
		}
		return this.crypt(encryptedMessage, key, true);
  }

  crypt = function(message, key, isCrypt) {

		if (!message && !key) {
			throw new Error('Incorrect arguments!');
		} 

		let keyStr = key;
		let keyArray = this.filterKey(keyStr);

		if (isCrypt) {
			for (let i = 0; i < keyArray.length; i++)
				keyArray[i] = (26 - keyArray[i]) % 26;
		}

		let output = "";

		for (let i = 0, j = 0; i < message.length; i++) {

			let c = message.charCodeAt(i);
			if (this.isUppercase(c)) {
				output += String.fromCharCode((c - 65 + keyArray[j % keyArray.length]) % 26 + 65);
				j++;
			} else if (this.isLowercase(c)) {
				output += String.fromCharCode((c - 97 + keyArray[j % keyArray.length]) % 26 + 97);
				j++;
			} else {
				output += message.charAt(i);
			}

		}

		return  this.direction ? output.toUpperCase() : output.split("").reverse().join("").toUpperCase();
	}


	filterKey = function(key) {
		let result = [];
		for (let i = 0; i < key.length; i++) {
			let c = key.charCodeAt(i);
			if (this.isLetter(c))
				result.push((c - 65) % 32);
		}
		return result;
	}
		

	isLetter = function(c) {
		return this.isUppercase(c) || this.isLowercase(c);
	}
	

	isUppercase = function(c) {
		return 65 <= c && c <= 90;  
	}
	
	
	isLowercase = function(c) {
		return 97 <= c && c <= 122; 
	}

}
