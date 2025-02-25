import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(str) {
  let strArr = str.split("-");

	if (strArr.length === 6) {

		const regex = new RegExp(/[A-F, 0-9][A-F, 0-9]$/);

		for (let item of strArr) {

			if (!regex.test(item)) {
				return false;
			}

		}

		return true;

	} else {

		return false;

	}
}
