// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > max) {
            return false;
        }
        max = Math.max(max, i + nums[i]);
    }
    return true;
};

let nums = [2,3,1,1,4];
console.log(canJump(nums));