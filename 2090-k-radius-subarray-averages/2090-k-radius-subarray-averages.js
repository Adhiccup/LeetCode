/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
 if (k > nums.length) {
        // Means all the numbers in nums are invalid so we return an array with same length of -1        
        return Array(nums.length).fill(-1);
    }
    
    // Fill up the array with -1 (could also push -1 each time length is not valid)
    const result = Array(nums.length).fill(-1);
    
    // Our starting window
    let left = 0;
    // Total before we start averaging
    let sum = 0;
    // Loop
    for (let right = 0; right < nums.length; right++) {
        // Add to sum at each iteration
        sum += nums[right];

        // We check if the amount is equal to the entire length of our window (which is k * 2 + 1)
        // Why * 2? because the description says from the index we will have k left and k right. k + index + k
        if (right - left + 1 === k * 2 + 1) {
            // Get our average
            const average = Math.floor(sum / (k * 2 + 1));
            // Put it in the result array
            result[right - k] = average;
            // Close the window by making it smaller.
            // Decrease left and sum 
            sum -= nums[left];
            left++;
        }
    }

    // return result
    return result;
};