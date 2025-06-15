arr = [45, 89, 9, 45, 8, 67];
let largest = 0;

function largestElement(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
  }
  return largest;
}

console.log(largestElement(arr));
