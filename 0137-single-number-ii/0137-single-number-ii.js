/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = 0
    let twos = 0

    for(let num of nums){
        twos |= ones & num
        ones ^= num

        threes = ones & twos
        ones &= ~threes
        twos &= ~threes
    }
    return ones  
};