/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const length = nums1.length + nums2.length
    const arr = nums1.concat(...nums2).sort((a, b) => a - b);
    return length % 2 === 1 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[(length / 2) - 1]) / 2;
};