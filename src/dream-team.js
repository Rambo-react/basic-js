import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {

  if (arr == null) {
		return false;	
	} 

	if (!Array.isArray(arr)) {
    	return false;
  	}

	let arrayNames = arr;
	let teamName = [];

	for (let i = 0; i < arrayNames.length; i++) {

		if (typeof arrayNames[i] == "string") {
			let trimItem = arrayNames[i].trim()
			teamName.push(trimItem[0].toUpperCase());
		}
	}

return  teamName.length ? teamName.sort().join("") : false;

}
