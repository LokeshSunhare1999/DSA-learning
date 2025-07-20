/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;

    if (m * n !== r * c) {
        return mat; // Return original matrix if reshape is not possible
    }

    const reshaped = [];
    let index = 0;

    for (let i = 0; i < r; i++) {
        reshaped[i] = [];
        for (let j = 0; j < c; j++) {
            reshaped[i][j] = mat[Math.floor(index / n)][index % n];
            index++;
        }
    }

    return reshaped;
};