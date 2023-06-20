/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
     let maxSum = 0;

    // Compute sum of the first k elements
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }

    let currentSum = maxSum;

    // Compute sum of each contiguous subarray of length k and keep track of the maximum
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / k;
};