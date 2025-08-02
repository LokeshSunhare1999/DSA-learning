// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;
    let curr = 0;
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i]);
        if (i === curr) {
            jumps++;
            curr = max;
        }
    }
    return jumps;
};

console.log(jump([2,3,1,1,4]));