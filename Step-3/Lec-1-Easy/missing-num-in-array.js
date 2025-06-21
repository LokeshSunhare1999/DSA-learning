// Example 1:
// Input Format: N = 5, array[] = {1,2,4,5}
// Result: 3
// Explanation: In the given array, number 3 is missing. So, 3 is the answer.

let arr = [3,0,1];

function missingNum(arr){
  let num = new Array(arr.length + 1).fill(0);
  for(let i=0; i< arr.length; i++){
    num[arr[i]]++;
  }

  for(let i=0; i < num.length; i++){
    if(num[i] ===0){
      return i
    }
  }
  return -1;
}

console.log(missingNum(arr));