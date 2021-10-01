import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(array) {
  let outArray = [];

	let sortingArray = [];

	for (let item of array) {

		if (item !== -1) {

			sortingArray.push(item);

		} 

	}

	sortingArray.sort((a,b) => a - b);

	let k = 0;

	for (let item of array) {

		if (item !== -1) {

			outArray.push(sortingArray[k]);
			k++;

		} else {

			outArray.push(item);

		}

	}

	return outArray;
}
