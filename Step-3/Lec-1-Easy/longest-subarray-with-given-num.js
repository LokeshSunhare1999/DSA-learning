// Example 2:
// Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
// Result: 3
// Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

let arr = [2, 3, 5, 1, 9];
let k = 10;

function longestSubarray(arr, k) {
  let sum = 0;
  let max = 0;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > k) {
      sum -= arr[left];
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}

console.log(longestSubarray(arr, k));