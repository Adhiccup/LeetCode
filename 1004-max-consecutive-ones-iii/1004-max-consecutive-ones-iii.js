/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {


    let start = 0 ;
    let count = 0 ;
    let longest  = 0 ;
    let flip = k;


    for(let windowEnd = 0 ; windowEnd < nums.length; windowEnd++)
    {
        const item = nums[windowEnd];

        if(item === 1)
        {
            count++;
        }
        else if(item === 0 && flip!== 0)
        {
            count++;
            flip--;
        }
        else
        {
            longest = Math.max(count , longest);
            windowEnd = start;
            start++
            count = 0 ;
            flip = k
        }
    }

   longest = Math.max(count , longest)
   return longest;
    
};