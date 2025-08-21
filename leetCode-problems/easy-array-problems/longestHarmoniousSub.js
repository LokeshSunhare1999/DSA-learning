// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// Input: nums = [1,2,3,4]
// Output: 2
// Explanation:The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLongestHarmoniousSubsequence = function(nums) {
    let map = {};
    let max = 0;
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    for (let num of nums) {
        if (map[num + 1]) {
            max = Math.max(max, map[num] + map[num + 1]);
        }
    }
    return max;
};
console.log(findLongestHarmoniousSubsequence([1, 3, 2, 2, 5, 2, 3, 7])); // output 5