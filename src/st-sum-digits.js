import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(num) {
  let outNumber;
	let strNum = String(num);
	
	function recursion(str) {

		let sum = 0;

		for (let item of str) {

			sum += +item;

		}

		if (String(sum).length > 1) {
			recursion(String(sum));
		} else {
			outNumber = sum;
		}

	}

	if (strNum.length > 1) {
		recursion(strNum);
	} else {
		return num;
	}

	return outNumber;
}
