import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(arr) {

	let mapNames = new Map();
	let outArray = [];

	arr.forEach((item, index, arr) => {
		if (outArray.indexOf(item) == -1) {
			mapNames.set(item, 0);
		} else {
			mapNames.set(item, mapNames.get(item) + 1);
		}

		let postfix = (mapNames.get(item) > 0) ? `(${mapNames.get(item)})` : "";

		outArray.push(`${item}${postfix}`);

		if (index !== 0) {
			if (!mapNames.has(`${item}${postfix}`)) {
			mapNames.set(`${item}${postfix}`, 0);
		} else {
			mapNames.set(`${item}${postfix}`, mapNames.get(`${item}${postfix}`) + 1);
		}

		}

	})


	return outArray;
}
