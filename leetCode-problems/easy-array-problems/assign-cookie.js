/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    let childIndex = 0;
    let cookieIndex = 0;

    while (childIndex < g.length && cookieIndex < s.length) {
        if (s[cookieIndex] >= g[childIndex]) {
            childIndex++;
        }
        cookieIndex++;
    }

    return childIndex;
};
let g = [1,2,3]; 
let s = [1,2,1];

console.log(findContentChildren(g,s)); // Output: 1