let arr = [4, 68, 9, 45, 8, 67];
let mini;

// 2nd largest element in array using selection sort
// Time Complexity: O(n^2)
function secondLargestElmSelectionSort(arr) {
  if (arr.length <= 0) return;

  for (let i = 0; i < arr.length; i++) {
    mini = i;
    for(let j = i+1; j < arr.length; j++){
        if(arr[mini] > arr[j]){
            mini = j;
        }
    }
    [arr[i], arr[mini]] = [arr[mini], arr[i]];
  }
  return arr[arr.length - 2];
}

console.log(secondLargestElmSelectionSort(arr));

function secondLargestElement(arr){
  let [max, secondMax] = [-Infinity, -Infinity];
  arr.forEach(num =>{
    if(num > max){
      secondMax = max;
      max = num;
    }else if(num > secondMax && num < max){
      secondMax = num;
    }
  })
  return secondMax;
}

console.log(secondLargestElement(arr));