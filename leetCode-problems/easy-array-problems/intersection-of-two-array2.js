// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2];

function intersection(nums1, nums2) {
  let map = {};
  let result = [];
 
  for (let num of nums1) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }

  return result;
}

let nums1 = [2, 2];
let nums2 = [1, 2, 2, 1];

console.log(intersection(nums1, nums2))