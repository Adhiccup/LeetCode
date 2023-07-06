/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const numsMap = {};
    nums1.forEach(([id, num]) => {
        numsMap[id] = num;
    });
    nums2.forEach(([id, num]) => {
        numsMap[id] = (numsMap[id] ?? 0) + num;
    });
    // no need to sort entries because if keys in object is integers
    // (of course they are strings but if they are strings from integers)
    // they are sorted automatically
    return Object.entries(numsMap);
};