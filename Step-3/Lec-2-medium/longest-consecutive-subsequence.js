// Example 1:Input: [100, 200, 1, 3, 2, 4]
// Output: 4
// Explanation: The longest consecutive subsequence is 1, 2, 3, and 4.

function longestConsecutive(nums) {
  if (nums.length == 0) return 0;
  nums.sort((a, b) => a - b);
  let longest = 1;
  let current = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) continue;
    if (nums[i] == nums[i - 1] + 1) current++;
    else current = 1;
    longest = Math.max(longest, current);
  }
  return longest;
}
let nums = [3, 8, 5, 7, 6];
console.log(longestConsecutive(nums));