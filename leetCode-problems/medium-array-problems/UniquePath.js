// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
        return 0; // If start or end is blocked
    }
    
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    dp[0][0] = 1; // Start point
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0; // Blocked cell
            } else {
                if (i > 0) dp[i][j] += dp[i - 1][j]; // From top
                if (j > 0) dp[i][j] += dp[i][j - 1]; // From left
            }
        }
    }
    
    return dp[m - 1][n - 1]; // Return the number of unique paths to the bottom-right corner
};
// Example usage:
const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
console.log(uniquePathsWithObstacles(obstacleGrid)); // Output: 2