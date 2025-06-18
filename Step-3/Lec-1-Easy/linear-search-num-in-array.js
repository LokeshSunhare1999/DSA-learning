let arr = [1, 4, 3, 6, 9, 8, 7];
let num = 7;

function searchNum(arr, num) {
  if (arr.length === 0) return;
  for (let i = 0; i <= arr.length; i++) {
    if (num === arr[i]) {
      return i;
    }
  }
  return -1;
}

console.log("Num present at index: ", searchNum(arr, num));
