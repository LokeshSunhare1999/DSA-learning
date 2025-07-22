// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

function intersection1(nums1, nums2){

  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let intersection = new Set();

  for (let num of set1) {
    if (set2.has(num)) {
      intersection.add(num);
    }
  }
  return Array.from(intersection);
}

function intersection2(nums1, nums2){

  let result = [];
  for(let i=0; i< nums1.length; i++){
    for(let j=0; j < nums2.length; j++){
      if(nums1[i] == nums2[j]){
        if(!result.includes(nums2[j])){
          result.push(nums2[j]);
        }
      }
    }
  }
  return result;
}

let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];

console.log(intersection1(nums1, nums2))
console.log(intersection2(nums1, nums2))