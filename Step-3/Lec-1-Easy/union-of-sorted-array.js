let arr1 = [1,2,4,6,8];
let arr2 = [3,4,5,6,8,7];
let final = [];

function unionArr(arr1, arr2){
    let set = new Set();
    
    if(arr1.length === 0 && arr2.length === 0) return;
    
    for(let num of arr1){
        set.add(num)
    }
    for(let num of arr2){
        set.add(num)
    }
    for(let num of set){
        final.push(num)
    }
    
    return final;
}

console.log(unionArr(arr1, arr2));