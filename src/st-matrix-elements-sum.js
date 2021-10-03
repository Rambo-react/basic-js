import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(arr) {
	let outSum = 0;

	for (let i = 0; i < arr.length; i++) {

		for (let k = 0; k < arr[i].length; k++) {

			if (arr[i - 1] == undefined || arr[i - 1][k] || arr[i - 1][k] !== 0) {
				outSum += arr[i][k];

			}

			// if (typeof (arr[i - 1]?.[k]) == 'undefined' || arr[i - 1]?.[k] !== 0) {

			// }

		}

	}

	return outSum;
}
