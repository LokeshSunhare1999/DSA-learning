let arr = [5, 8, 4, 2, 3, 6, 9, 1];

function arrSort(arr, n) {
  if (n === 1) return;
  for (let i = 0; i < n-1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
  }
  arrSort(arr, n-1);
  return arr;
}

console.log(arrSort(arr, arr.length));