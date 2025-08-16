// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1 || numRows >= s.length) return s;

    const rows = Array.from({ length: numRows }, () => '');
    let currentRow = 0;
    let goingDown = false;

    for (let char of s) {
        rows[currentRow] += char; 
        if (currentRow === 0) {
            goingDown = true; 
        } else if (currentRow === numRows - 1) {
            goingDown = false; 
        }
        currentRow += goingDown ? 1 : -1; 
    }

    return rows.join(''); 
};
console.log(convert("PAYPALISHIRING", 3)); 