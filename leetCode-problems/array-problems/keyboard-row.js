/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    const rowSet = rows.map(row => new Set(row.split('')));
    const result = [];

    for (const word of words) {
        const lowerWord = word.toLowerCase();
        let foundRow = -1;

        for (let i = 0; i < rowSet.length; i++) {
            if (lowerWord.split('').every(char => rowSet[i].has(char))) {
                foundRow = i;
                break;
            }
        }

        if (foundRow !== -1) {
            result.push(word);
        }
    }

    return result;
};