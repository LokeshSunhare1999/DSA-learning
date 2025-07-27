// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findFirst = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let firstIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                firstIndex = mid;
                right = mid - 1; // Continue searching in the left half
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return firstIndex;
    };

    const findLast = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let lastIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                lastIndex = mid;
                left = mid + 1; // Continue searching in the right half
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return lastIndex;
    };

    const firstPosition = findFirst(nums, target);
    const lastPosition = findLast(nums, target);

    return [firstPosition, lastPosition];   
};

console.log(searchRange([5,7,7,8,8,10], 8)); // Output: [3,4]