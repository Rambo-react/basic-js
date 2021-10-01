import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(arr) {
  let count = 0;
  let cat = '^^';
  arr.forEach((item, index, arr)=> {

    let arrayOfCats = [];
    let idx = item.indexOf(cat);
    while (idx != -1) {
      arrayOfCats.push(idx);
      idx = item.indexOf(cat, idx + 1);
    }
    count += arrayOfCats.length; 

  })

return count;
}
