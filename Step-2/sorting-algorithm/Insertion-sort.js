let arr = [133, 46, 24, 52, 20, 9];
let j;
function arrSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--
    }
  }
  return arr;
}

console.log(arrSort(arr));