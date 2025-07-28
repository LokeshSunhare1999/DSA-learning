// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const isValidRow = (row) => {
        const seen = new Set();
        for (const num of row) {
            if (num !== '.' && seen.has(num)) return false;
            if (num !== '.') seen.add(num);
        }
        return true;
    };

    const isValidColumn = (colIndex) => {
        const seen = new Set();
        for (let i = 0; i < 9; i++) {
            const num = board[i][colIndex];
            if (num !== '.' && seen.has(num)) return false;
            if (num !== '.') seen.add(num);
        }
        return true;
    };

    const isValidBox = (startRow, startCol) => {
        const seen = new Set();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const num = board[startRow + i][startCol + j];
                if (num !== '.' && seen.has(num)) return false;
                if (num !== '.') seen.add(num);
            }
        }
        return true;
    };

    for (let i = 0; i < 9; i++) {
        if (!isValidRow(board[i]) || !isValidColumn(i)) return false;
    }

    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            if (!isValidBox(row, col)) return false;
        }
    }

    return true;
};
console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
])); // Output: true