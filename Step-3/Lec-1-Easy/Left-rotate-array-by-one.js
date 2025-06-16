let arr = [5,6,9,8,7,1,2];
let temp = [];

function leftRotate(arr){
  for(let i = 1; i < arr.length+1; i++){
    if(i < arr.length){
      temp.push(arr[i]);
    }else{
      temp.push(arr[0]);
    }
  }
  return temp;
}

console.log(leftRotate(arr));