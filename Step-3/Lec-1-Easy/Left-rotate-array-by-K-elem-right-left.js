let arr = [1,2,33,44,55,6,7,8,78, 45,7,8];
let temp = [];
let direction = "right";
function leftRotate(arr, k, direction) {
  if(direction === "right") {
    k = arr.length - k; 
  }
  for (let i = k; i < arr.length + k; i++) {
    temp.push(arr[i % arr.length]);
  }
  return temp;
}

console.log(leftRotate(arr, 2, direction));