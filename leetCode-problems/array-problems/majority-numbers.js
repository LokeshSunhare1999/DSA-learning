/**
 * @param {number[]} nums
 * @return {number}
 */
 
const nums = [-1,1,1,1,2,1];

var majorityElement = function(nums) {
    let freq = {};
    let miniFreq = -Infinity;
    let miniNum = -Infinity;
    for (let arr of nums) {
        freq[arr] = (freq[arr] || 0) + 1;
    }
    console.log(freq);
    for (let key in freq) {
        if (freq[key] > miniFreq) {
            miniFreq = freq[key];
            miniNum = key;
        }
    }
    return miniNum;
};
console.log(majorityElement(nums));