/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
   const n = nums.length;
    if (n <= 2) return n;

    let maxLength = 2;
    const dp = Array(n).fill().map(() => new Map());

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const diff = nums[j] - nums[i];
            const currLength = (dp[i].get(diff) || 1) + 1;
            dp[j].set(diff, currLength);
            maxLength = Math.max(maxLength, currLength);
        }
    }

    return maxLength; 
};