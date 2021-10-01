import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(array) {

	let outArray = [];

	if (!Array.isArray(array)) {
		throw new Error("'arr' parameter must be an instance of the Array!")
	}

	for (let i = 0; i < array.length; i++) {

		switch (array[i]) {

			case "--discard-next":
				outArray.push(undefined);
				i++;
				break;
			case "--discard-prev":
				outArray.pop();
				break;
			case "--double-next":
				if (array[i+1] !== undefined) {
					outArray.push(array[i+1]);
				}
				
				break;
			case "--double-prev":
				if (outArray[outArray.length-1] !== undefined) {
					outArray.push(outArray[outArray.length-1]);
				}
				break;
			default: outArray.push(array[i]);

		}

	}

return outArray.filter((item) => item !== undefined);
}
