import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  let monthName = '';
  
  if (Object.prototype.toString.call(date) === '[object Date]') {
  
  let timestamp = Date.parse(date);
  
  if (isNaN(timestamp) === true) {
  
    throw new Error('Invalid date!');
  
  }
  
  try {
    let qqq = date.valueOf();
  } catch {
    throw new Error('Invalid date!');
  }
  
  let month = date.getMonth();
  
    switch(month) {
      case 11:
      case 0:
      case 1: monthName = "winter"; 
      break;
      case 2:
      case 3:
      case 4: monthName = "spring"; 
      break;
      case 5:
      case 6:
      case 7: monthName = "summer"; 
      break;
      case 8:
      case 9:
      case 10: monthName = "autumn"; 
      break;
      default: break;
    } 
  
    return monthName;
  
  } else {
  
    throw new Error('Invalid date!');
  }
}
