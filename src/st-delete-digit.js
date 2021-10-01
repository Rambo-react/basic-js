import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arrayN = [...String(n)];

	let max = 0;

	for (let i = 0; i < arrayN.length; i++) {

		let tmpNum = Number([...arrayN.slice(0, i), ...arrayN.slice(i + 1) ].join("")) 

		max = max >= tmpNum ? max : tmpNum;

	}

	return max;
}
