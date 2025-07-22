/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

let nums = [3,2,2,3];
let val = 3;
var removeElement = function(nums, val) {
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--; // Decrement i to account for the removed element
        }
    }
    return nums.length; // Return the new length of the array
};

console.log(removeElement(nums, val));