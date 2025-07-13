/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;
v
                // Check for adjacent land cells
                if (i > 0 && grid[i - 1][j] === 1) perimeter -= 1; // Up
                if (i < grid.length - 1 && grid[i + 1][j] === 1) perimeter -= 1; // Down
                if (j > 0 && grid[i][j - 1] === 1) perimeter -= 1; // Left
                if (j < grid[i].length - 1 && grid[i][j + 1] === 1) perimeter -= 1; // Right
            }
        }
    }

    return perimeter;
};