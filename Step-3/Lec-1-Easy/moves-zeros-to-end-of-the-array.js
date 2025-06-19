let arr = [1,5,2,4,0,58,0,0,3,0,0,6,7,0,8,9];
let temp = [];

function moveZero(arr){
    if(arr.length === 0) return;
    
    for(let i=0; i < arr.length; i++){
        if(arr[i] !== 0){
            temp.push(arr[i]);
        }
    }
    for(let i=0; i < arr.length; i++){
        if(arr[i] === 0){
            temp.push(arr[i]);
        }
    }
    return temp;
}

console.log(moveZero(arr));