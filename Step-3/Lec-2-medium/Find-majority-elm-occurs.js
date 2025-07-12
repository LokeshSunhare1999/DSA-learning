// Example 1:
// Input Format: N = 3, nums[] = {3,2,3}
// Input Format:  N = 7, nums[] = {2,2,1,1,1,2,2}
// Input Format:  N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}
// Result: 3
// Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution.

let arr = [4, 2, 2, 4, 3, 5, 4, 3, 2, 5];
let count = 0;
let map = {};
function findMajorityElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let nums in arr){
      map[nums] = (map[nums] || 0) + 1;
    }
    if (map[arr[i]] > arr.length / 2) {
      return arr[i];
    }
  }
  return -1;
}

console.log(findMajorityElement(arr));