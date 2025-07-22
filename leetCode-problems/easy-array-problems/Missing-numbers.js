/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [3,0,1];

var missingNumber = function(nums) {   
    
    let maxNum = nums.length;
    for(let i = 0; i <= maxNum; i++){
        if(!nums.includes(i)){
            return i;
        }
    }
};

console.log(missingNumber(nums));