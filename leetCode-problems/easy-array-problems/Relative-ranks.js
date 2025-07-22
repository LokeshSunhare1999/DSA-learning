/**
 * @param {number[]} score
 * @return {string[]}
 */

// Example 1:
// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

// Example 2:
// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

var findRelativeRanks = function (score) {
  // Step 1: Copy and sort the score array in descending order
  const sorted = [...score].sort((a, b) => b - a);

  // Step 2: Create a map to store ranks
  const rankMap = new Map();
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0) {
      rankMap.set(sorted[i], "Gold Medal");
    } else if (i === 1) {
      rankMap.set(sorted[i], "Silver Medal");
    } else if (i === 2) {
      rankMap.set(sorted[i], "Bronze Medal");
    } else {
      rankMap.set(sorted[i], (i + 1).toString());
    }
  }

  // Step 3: Build result array based on original score order
  const result = score.map(s => rankMap.get(s));
  return result;
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));