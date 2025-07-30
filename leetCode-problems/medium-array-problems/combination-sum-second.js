// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: [[1,1,6], [1,2,5], [1,7], [2,6]]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = [];

    const dfs = (target, cur, index) => {
        if (target < 0) return;
        if (target === 0) {
            result.push(cur.slice());
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }
            cur.push(candidates[i]);
            dfs(target - candidates[i], cur, i + 1);
            cur.pop();
        }
    }

    dfs(target, [], 0);
    return result;
};
console.log(combinationSum2([10,1,2,7,6,1,5], 8));