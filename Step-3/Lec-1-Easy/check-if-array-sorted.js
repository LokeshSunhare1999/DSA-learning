let arr = [4, 5, 9,  78, 45];

function checkIfArrSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
   for(let j = i+1; j < arr.length; j++){
    if(arr[j] < arr[i]) return false;
   }
  }
  return true;
}

console.log(checkIfArrSorted(arr));