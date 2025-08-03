// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const mid = Math.floor(totalLength / 2);
    let left = 0, right = 0, current = 0, prev = 0;

    while (left < nums1.length || right < nums2.length) {
        prev = current;

        if (left < nums1.length && (right >= nums2.length || nums1[left] <= nums2[right])) {
            current = nums1[left];
            left++;
        } else {
            current = nums2[right];
            right++;
        }

        if (left + right - 1 === mid) {
            if (totalLength % 2 === 0) {
                return (current + prev) / 2;
            } else {
                return current;
            }
        }
    }

    return 0; // This line should never be reached
};

console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.00000