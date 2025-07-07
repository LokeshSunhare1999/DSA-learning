// Example 2:
// Input Format: arr[] = {4,1,2,1,2}
// Result: 4

let arr = [4,1,2,1,2];
let freq = {};
function findUnique(arr){
    for(let num of arr){
        freq[num] = (freq[num] || 0)+1;
    }
    
    for(let key in freq){
        if(freq[key] == 1 ){
            return key;
        }
    }
}

console.log(findUnique(arr))
