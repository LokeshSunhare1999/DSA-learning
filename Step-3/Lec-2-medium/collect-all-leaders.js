// Example 2:Input: arr = [10, 22, 12, 3, 0, 6]
// Output: 22 12 6
// Explanation: 6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), also 22 is greater than 12, 3, 0, 6

function findLeaders(arr) {
  let leaders = [];
  for (let i =  arr.length - 1; i >= 0; i--) {
      if(arr[i] > arr[i + 1]) {
        leaders.push(arr[i]);
      }
  }
  return leaders.reverse();
}

let arr = [10, 22, 12, 3, 0, 6];
console.log(findLeaders(arr));