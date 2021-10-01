import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let mapOfDomains = new Map();
let outObj = {};

for (let item of domains) {

	let arrItem = item.split(".");

	arrItem.forEach( (item, index, array)=>{

		let tmpDomain;

		(index === arrItem.length - 1) 
		? tmpDomain = "." + item 
		: tmpDomain = array.slice(index).join(".");
		
		(mapOfDomains.get(tmpDomain)) 
		? mapOfDomains.set(tmpDomain, mapOfDomains.get(tmpDomain) + 1 ) 
		: mapOfDomains.set(tmpDomain, 1 );

	} )

}

mapOfDomains.forEach( (value, key)=>{

	let nameKeyArr = key.split(".").reverse()

	let newNameKey = "";

	for (let i of nameKeyArr) {

		if (i) {
			newNameKey += "." + i
		}

	}

	outObj[newNameKey] = value;

} )

const orderedOutObj = {};
Object.keys(outObj).sort().forEach(function(key) {
  orderedOutObj[key] = outObj[key];
});


return orderedOutObj;
}
