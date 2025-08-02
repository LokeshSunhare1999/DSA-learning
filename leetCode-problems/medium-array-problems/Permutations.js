// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    
    const dfs = (arr) => {
        if (arr.length === nums.length) {
            result.push(arr.slice());
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (arr.includes(nums[i])) continue;
            arr.push(nums[i]);
            dfs(arr);
            arr.pop();
        }
    }
    
    dfs([]);
    return result;  
};
console.log(permute([1,2,3]));
