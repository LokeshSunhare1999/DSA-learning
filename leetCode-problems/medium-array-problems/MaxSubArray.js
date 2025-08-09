// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let curr = nums[0];
    for(let i=1; i< nums.length; i++){
        curr = Math.max(curr + nums[i], nums[i]);
        max = Math.max(max, curr);
    }
    return max;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));