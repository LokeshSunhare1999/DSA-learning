/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
 let map = {};
  let result = [];
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) {
      result.push(i);
    }
  }
  return result;
};

const nums  = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));