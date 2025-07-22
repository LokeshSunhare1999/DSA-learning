/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i=0; i < nums.length; i++){
        if(nums[i] >= target) return i;
        if(nums[i] < target && nums[i+1] > target) return i+1;
    }
    return nums.length;
};