// Input: rowIndex = 3
// Output: [1,3,3,1]

var getRow = function(rowIndex) {
    const row = new Array(rowIndex + 1).fill(1);
    
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
    }
    
    return row;
};
console.log(getRow(3)); // Output: [1,3,3,1]