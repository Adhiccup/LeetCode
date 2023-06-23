/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function(nums, space) {
    nums.sort((a, b) => a - b);
  const count = {};
  for (let num of nums) {
    const remainder = num % space;
    if (!count[remainder]) {
      count[remainder] = 0;
    }
    count[remainder]++;
  }
  let max = 0;
  let answer;
  for (let num of nums) {
    const remainder = num % space;
    if (count[remainder] > max) {
      max = count[remainder];
      answer = num;
    }
  }
  return answer;
}