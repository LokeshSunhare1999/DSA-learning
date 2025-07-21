// Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6

function maxSubArrayWithRange(nums) {
  let maxSum = -Infinity;
  let currSum = 0;
  let start = 0, end = 0, tempStart = 0;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (currSum > maxSum) {
      maxSum = currSum;
      start = tempStart;
      end = i;
    }
    if (currSum < 0) {
      currSum = 0;
      tempStart = i + 1;
    }
  }
  return {
    maxSum, subarray: nums.slice(start, end + 1)
  }
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArrayWithRange(nums));
