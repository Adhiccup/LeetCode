/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // Create a map to store nums and their indices
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement to reach target
    if (map.has(complement)) {
      return [map.get(complement), i]; // Return the two indices as an array
    }
    map.set(nums[i], i); // Add num and its index to the map
  }
};