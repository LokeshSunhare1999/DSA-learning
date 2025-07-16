/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for (let num of nums1) {
        let index = nums2.indexOf(num);
        let found = false;
        for (let i = index + 1; i < nums2.length; i++) {
            if (nums2[i] > num) {
                result.push(nums2[i]);
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(-1);
        }
    }
    return result;
};