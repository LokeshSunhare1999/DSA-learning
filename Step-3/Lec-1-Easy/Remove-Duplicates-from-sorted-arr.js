let arr = [4,5,6,7,8,8,9,9,10];
let newArr = [];

function removeDuplicates(){
  for(let i = 0;  i < arr.length; i++){
    if(arr[i] !== arr[i+1]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeDuplicates(arr));