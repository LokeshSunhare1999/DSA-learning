let arr = [3, 2, 8, 5, 1, 4, 23];


function merge(arr, low, mid, high) {
  let tempArr = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      tempArr.push(arr[left]);
      left++;
    } else {
      tempArr.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    tempArr.push(arr[left]);
    left++;
  }

  while (right <= high) {
    tempArr.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = tempArr[i - low];
  }
}

function meregeSort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  meregeSort(arr, low, mid);
  meregeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
  return arr;
}

console.log(meregeSort(arr, 0,arr.length - 1));
console.log(arr);