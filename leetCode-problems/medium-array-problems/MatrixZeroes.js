// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let zeroRows = new Set();
    let zeroCols = new Set();

    // First pass: find all the rows and columns that need to be zeroed
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    // Second pass: set the appropriate cells to zero
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (zeroRows.has(i) || zeroCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
      }
    return matrix; // Return the modified matrix
};
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]])); // output [[1,0,1],[0,0,0],[1,0,1]]