// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let str of strs) {
        let sorted = str.split('').sort().join('');
        if (map.has(sorted)) { 
            map.get(sorted).push(str);
        } else {
            map.set(sorted, [str]);
        }
    }
    return Array.from(map.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))