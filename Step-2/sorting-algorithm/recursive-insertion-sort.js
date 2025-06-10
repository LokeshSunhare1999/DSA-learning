let arr = [133, 46, 24, 52, 20, 9];
function arrSort(arr, n) {
  if (n <= 1) return;

  arrSort(arr, n-1);

  let last = arr[n-1];
  let j = n- 2;

  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    j--
  }
  arr[j + 1] = last;
  return arr;
}

console.log(arrSort(arr, arr.length));