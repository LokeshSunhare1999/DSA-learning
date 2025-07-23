// Input:
// nums[] = {1,2,-4,-5}, N = 4
// Output: 1 -4 2 -5
// Explanation: The array will be rearranged as 1,-4,2,-5.

function rearrange(nums) {
  if(nums.length == 0) return nums;
  let result = new Array(nums.length);
  let pos = 0;
  let neg = 1;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] >=0){
      result[pos]  = nums[i];
      pos +=2;
    }else{
      result[neg] = nums[i];
      neg += 2;
    }
  }
  return result;
}

let nums = [1, 2, -4, -5];
console.log(rearrange(nums))