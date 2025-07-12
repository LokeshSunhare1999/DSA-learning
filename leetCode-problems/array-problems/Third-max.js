// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let [max, secondMax, thirdMax] = [-Infinity, -Infinity, -Infinity];
  for (let num of nums) {
    if (num > max) {
      thirdMax = secondMax;
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      thirdMax = secondMax;
      secondMax = num;
    } else if (num > thirdMax && num < secondMax) {
      thirdMax = num;
    }
  }
  return thirdMax === -Infinity ? max : thirdMax;
};

let nums = [3, 2, 1, 4, 5];
console.log(thirdMax(nums));