// Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6

function maxSubArray(nums) {
  let maxSum = -Infinity;
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    if (currSum < 0) {
      currSum = 0;
    }
  }
  return maxSum;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, 2, -5, 4];
console.log(maxSubArray(nums));