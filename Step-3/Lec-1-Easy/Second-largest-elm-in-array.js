let arr = [4, 68, 9, 45, 8, 67];
let mini;

function secondLargestElement(arr) {
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

console.log(secondLargestElement(arr));
