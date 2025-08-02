// Input: nums = [1,1,2]
// Output:[[1,1,2], [1,2,1], [2,1,1]]

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const results = [];
    const used = Array(nums.length).fill(false);
    nums.sort((a, b) => a - b); // Sort to handle duplicates

    const backtrack = (path) => {
        if (path.length === nums.length) {
            results.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // Skip used elements
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue; // Skip duplicates

            used[i] = true;
            path.push(nums[i]);
            backtrack(path);
            path.pop();
            used[i] = false;
        }
    };

    backtrack([]);
    return results;
};

console.log(permuteUnique([1, 1, 2])); // Output: [[1,1,2], [1,2,1], [2,1,1]]