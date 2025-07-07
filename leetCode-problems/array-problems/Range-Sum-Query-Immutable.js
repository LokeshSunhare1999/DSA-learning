/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.sum = [];
  this.sum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    this.sum[i] = this.sum[i - 1] + nums[i];
  }
  console.log(this.sum);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  if (left === 0) {
    return this.sum[right];
  }
  return this.sum[right] - this.sum[left - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

let nums = [-2, 0, 3, -5, 2, -1];
let obj = new NumArray(nums);
console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(2, 5));
console.log(obj.sumRange(0, 5));