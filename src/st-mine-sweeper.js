import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let outMatrix = [];

  for (let i = 0; i < matrix.length; i++) {

      let tmpArray = [];

      for (let k = 0; k < matrix[i].length; k++) {

          let countMines = 0;

          //left
          // countMines += Number((typeof(matrix[i]?.[k - 1]) == 'undefined') ? false : matrix[i]?.[k - 1]);  
          countMines += Number(  (matrix[i] == undefined || matrix[i][k - 1] == undefined) ? false : matrix[i][k - 1] );  

          //left-top
          // countMines += Number((typeof(matrix[i - 1]?.[k - 1]) == 'undefined') ? false : matrix[i - 1]?.[k - 1]);
          countMines += Number(  (matrix[i - 1] == undefined || matrix[i - 1][k - 1] == undefined) ? false : matrix[i - 1][k - 1] ); 

          //top
          // countMines += Number((typeof(matrix[i - 1]?.[k]) == 'undefined') ? false : matrix[i - 1]?.[k]);
          countMines += Number(  (matrix[i - 1] == undefined || matrix[i - 1][k] == undefined) ? false : matrix[i - 1][k]);


          //right-top
          // countMines += Number((typeof(matrix[i - 1]?.[k + 1]) == 'undefined') ? false : matrix[i - 1]?.[k + 1]);
          countMines += Number(  (matrix[i - 1] == undefined || matrix[i - 1][k + 1] == undefined) ? false : matrix[i - 1][k + 1]);

          //right
          // countMines += Number((typeof(matrix[i]?.[k + 1]) == 'undefined') ? false : matrix[i]?.[k + 1]);
          countMines += Number(  (matrix[i] == undefined || matrix[i][k + 1] == undefined) ? false : matrix[i][k + 1]);  

          //right-down
          // countMines += Number((typeof(matrix[i + 1]?.[k + 1]) == 'undefined') ? false : matrix[i + 1]?.[k + 1]);
          countMines += Number(  (matrix[i + 1] == undefined || matrix[i + 1][k + 1] == undefined) ? false : matrix[i + 1][k + 1]);


          //down
          // countMines += Number((typeof(matrix[i + 1]?.[k]) == 'undefined') ? false : matrix[i + 1]?.[k]);
          countMines += Number(  (matrix[i + 1] == undefined || matrix[i + 1][k] == undefined) ? false : matrix[i + 1][k]);

          //left-down
          // countMines += Number((typeof(matrix[i + 1]?.[k - 1]) == 'undefined') ? false : matrix[i + 1]?.[k - 1]);
          countMines += Number(  (matrix[i + 1] == undefined || matrix[i + 1][k - 1] == undefined) ? false : matrix[i + 1][k - 1]);

          tmpArray.push(countMines);
      
      }    

      outMatrix.push(tmpArray);

  }

  return outMatrix;
}
