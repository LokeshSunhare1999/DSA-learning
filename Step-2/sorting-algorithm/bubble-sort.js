let arr = [13,46,24,52,20,9];
let swap= false;
function arrSort(arr){
    for(let i=0; i < arr.length -1; i++){
        for(let j= i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                [arr[i] ,arr[j]] = [arr[j], arr[i]];
                swap = true;
            }
        }
        if(!swap) break;
    }
    return arr;
}

console.log(arrSort(arr));