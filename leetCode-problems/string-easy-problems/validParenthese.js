// Input: s = "()"
// Output: true
// Input: s = "(]"
// Output: false


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true  
console.log(isValid("(]")) // falseconsole.log(isValid("([)]")) // false
console.log(isValid("{[]}")) // true