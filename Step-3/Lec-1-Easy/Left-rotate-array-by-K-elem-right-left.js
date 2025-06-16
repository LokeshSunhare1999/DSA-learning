let arr = [5, 6, 9, 8, 7, 1, 2];
let temp = [];
let direction = "right";
function leftRotate(arr, k, direction) {
  for (let i = k; i < arr.length + k; i++) {
    if (i < arr.length) {
      temp.push(arr[i]);
    } else if (i < k) {
      temp.push(arr[i]);
    }
  }
  return temp;
}

console.log(leftRotate(arr, 2, direction));