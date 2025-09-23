// Find out the second largest num from the array without sort and for loop 
let arr = [1,5,8,19,10,18,47];

function secondLargest(arr){
    let [first, second] = [-Infinity,-Infinity];
    
    arr.forEach(num=>{
        if(num > first){
            second = first;
            first = num;
        }else if(num > second && num < first){
            second = num
            }
    })
    return second
}
console.log(secondLargest(arr))