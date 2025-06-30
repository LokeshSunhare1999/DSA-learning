// Input: nums = [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let freq = {};
    let miniFreq = Infinity;
    let miniNum;

    for (let arr of nums) {
        freq[arr] = (freq[arr] || 0) + 1;
    }
    for (let nums in freq) {
        if (freq[nums] < miniFreq) {
            miniFreq = freq[nums];
            miniNum = nums;
        }
    }
    return Number(miniNum);
};