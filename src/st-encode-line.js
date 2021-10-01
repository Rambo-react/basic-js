import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let count = 0;
  let outStr = "";
  
  for (let i = 0; i <= str.length; i++) {
  
    if (str[i] === str[i + 1]) {
      count++;
  
    } else {
      count++;
      outStr += (count > 1) ? `${count}${str[i]}` : str[i];
      count = 0;
    }
  
  }
  
  return outStr;
}
