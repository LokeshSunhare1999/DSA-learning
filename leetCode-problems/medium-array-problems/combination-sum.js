
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation: 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = []

    const dfs = (target, cur, index) => {
        if (target < 0) return;
        if (target === 0) {
            result.push(cur.slice());
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            cur.push(candidates[i]);
            dfs(target - candidates[i], cur, i);
            cur.pop();
        }
    }

    dfs(target, [], 0);
    return result;
};

console.log(combinationSum([2,3,6,7], 7))