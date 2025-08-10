/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const merged = [];
    let i = 0;

    // Add all intervals that end before the new interval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i]);
        i++;
    }

    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    
    // Add the merged new interval
    merged.push(newInterval);

    // Add the remaining intervals
    while (i < intervals.length) {
        merged.push(intervals[i]);
        i++;
    }

    return merged;
};
// Example usage:
console.log(insert([[1, 3], [6, 9]], [2, 5])); // Output: [[1, 5], [6, 9]]