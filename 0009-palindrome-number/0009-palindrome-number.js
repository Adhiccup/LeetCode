/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
  if (num < 0) { // negative numbers are not palindromes
    return false;
  }
  let reversedNum = 0;
  let originalNum = num;
  while (originalNum > 0) {
    const digit = originalNum % 10; // Extract the last digit of the number
    reversedNum = (reversedNum * 10) + digit; // Append the digit to the reversed number
    originalNum = Math.floor(originalNum / 10); // Remove the last digit from the original number
  }
  return num === reversedNum;
};