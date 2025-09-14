// Print the missing random number from the arr = [1, 2, 4, 5, 8, 11, 14, 17, 20]; 1 to 20
let arr  = [1, 2, 4, 5, 8, 11, 14, 17, 20];
let max = 20;

function findMissing(arr){
    let result = [];
    for(let i=1; i <= max; i++){
        if(!arr.includes(i)){
            result.push(i);
        }
    }
    return result;
}
console.log(findMissing(arr))