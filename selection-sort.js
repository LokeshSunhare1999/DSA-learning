let arr = [133,46,24,52,20,9];
let mini;
function arrSort(arr){
    for(let i=0; i< arr.length; i++){
        mini = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[mini]){
                mini = j;
            }
        }
        [arr[i], arr[mini]] = [arr[mini], arr[i]]
    }
    return arr;
}

console.log(arrSort(arr));