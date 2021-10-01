import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, { repeatTimes = 1, separator = "+", addition, additionRepeatTimes = 1, additionSeparator = "|"}) {
  str = String(str);
	if (addition !== undefined) {
		addition = String(addition);	
	}
	let tempArray = [];
	let additionStr = "";

	let outStr = "";

	//additionRepeatTimes
	tempArray = [];
	for (let i = 0; i < additionRepeatTimes; i++) {
			tempArray.push(addition);	
	}

	additionStr =  tempArray.length ? tempArray.join(additionSeparator) : "";

	//repeatTimes
	tempArray = [];

	for (let i = 0; i < repeatTimes; i++) {
		tempArray.push(`${str}${additionStr}`)
	}

	outStr = tempArray.length ? tempArray.join(separator) : str;

	return outStr;
}
