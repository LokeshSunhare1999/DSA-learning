// Print Out the duplicate only number from the arr = [1,2,3,3,4,2,5,5,6,7] do not print the single number
let arr = [1,2,3,3,4,2,5,5,6,7];
let freq = {};
let result = [];

for(let num of arr){
    freq[num] = (freq[num] || 0 ) +1
}

for(let key in freq){
    if(freq[key] > 1){
        result.push(Number(key))
    }
}

console.log(result);