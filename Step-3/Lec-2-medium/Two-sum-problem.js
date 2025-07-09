// Example 1:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)  [1, 3] (for 2nd variant)
// Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

const arr = [2, 6, 5, 8, 11];
const target = 14;
function twoSum1(arr, target) {     // Naive Approach(Brute-force approach)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      if (arr[i] + arr[j] == target) {
        return "YES " + i + " " + j;
      }
    }
  }
  return "NO"
}

// console.log(twoSum1(arr, target));

function twoSum2(arr, target) {     // better Approach
  let map = new Map();
  let diff;
  for (let i = 0; i < arr.length; i++) {
    diff = target - arr[i];
    if (map.has(diff)) {
      return "YES " + map.get(diff) + " " + i;
    } else {
      map.set(arr[i], i);
    }
  }
  return "NO";
}

console.log(twoSum2(arr, target))

function twoSum3(arr, target) {     // optimal Approach
  // Store elements with their original indices
  let arr = arr.map((value, index) => ({ value, index }));

  // Sort the array based on values
  arr.sort((a, b) => a.value - b.value);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left].value + arr[right].value;

    if (sum === target) {
      return "YES " + arr[left].index + " " + arr[right].index;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return "NO";
}

console.log(twoSum3(arr, target))