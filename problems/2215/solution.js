// NOTE:: rep1, 4min 42sec
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    return [
        [...new Set(nums1.filter(val => !nums2.includes(val)))],
        [...new Set(nums2.filter(val => !nums1.includes(val)))]
    ]
};